# @ts-core/notification

Общие TypeScript интерфейсы и классы для систем уведомлений. Предоставляет базовые абстракции для уведомлений, каналов доставки, шаблонов и пользовательских настроек.

## Содержание

- [Установка](#установка)
- [Зависимости](#зависимости)
- [Основные интерфейсы](#основные-интерфейсы)
- [DTO (Data Transfer Objects)](#dto-data-transfer-objects)
- [Загрузчик настроек](#загрузчик-настроек)
- [Примеры использования](#примеры-использования)
- [Каналы доставки](#каналы-доставки)
- [Типы уведомлений](#типы-уведомлений)
- [Связанные пакеты](#связанные-пакеты)

## Установка

```bash
npm install @ts-core/notification
```

```bash
yarn add @ts-core/notification
```

```bash
pnpm add @ts-core/notification
```

## Зависимости

| Пакет | Описание |
|-------|----------|
| `@ts-core/common` | Базовые классы и интерфейсы |

## Основные интерфейсы

### INotification

Базовый интерфейс уведомления:

```typescript
interface INotification {
    id: number;                    // Уникальный идентификатор
    type: string;                  // Тип уведомления
    channel: string;               // Канал доставки
    status: NotificationStatus;    // Статус
    recipient: string;             // Получатель
    data?: any;                    // Данные уведомления
    createdDate: Date;             // Дата создания
    sentDate?: Date;               // Дата отправки
}

enum NotificationStatus {
    PENDING = 'pending',       // Ожидает отправки
    SENT = 'sent',             // Отправлено
    DELIVERED = 'delivered',   // Доставлено
    FAILED = 'failed',         // Ошибка
    READ = 'read'              // Прочитано
}
```

### INotificationChannel

Канал доставки уведомлений:

```typescript
interface INotificationChannel {
    name: string;          // Название канала (email, push, sms)
    isEnabled: boolean;    // Включён ли канал
}
```

### INotificationTemplate

Шаблон содержимого уведомления:

```typescript
interface INotificationTemplate {
    id: number;           // Уникальный идентификатор
    type: string;         // Тип уведомления
    channel: string;      // Канал доставки
    locale: string;       // Язык (ru, en, etc.)
    subject?: string;     // Тема (для email)
    content: string;      // Содержимое шаблона
}
```

### INotificationPreference

Пользовательские настройки уведомлений:

```typescript
interface INotificationPreference {
    id: number;           // Уникальный идентификатор
    userId: number;       // ID пользователя
    type: string;         // Тип уведомления
    channel: string;      // Канал доставки
    isEnabled: boolean;   // Включено ли уведомление
}
```

### INotificationMessage

Сообщение для отправки:

```typescript
interface INotificationMessage {
    type: string;          // Тип уведомления
    channel: string;       // Канал доставки
    recipient: string;     // Получатель (email, телефон, etc.)
    data?: any;            // Данные для шаблона
    locale?: string;       // Язык
}
```

### INotifable

Интерфейс для сущностей, которые могут получать уведомления:

```typescript
interface INotifable {
    notificationRecipient: string;   // Адрес получателя
    notificationLocale?: string;     // Предпочитаемый язык
}
```

### INotificationResult

Результат отправки уведомления:

```typescript
interface INotificationResult {
    success: boolean;      // Успешно ли отправлено
    notificationId?: number;  // ID созданного уведомления
    error?: string;        // Описание ошибки
}
```

## DTO (Data Transfer Objects)

### Список уведомлений

```typescript
import { INotificationListDto, INotificationListDtoResponse } from '@ts-core/notification';

// Запрос
interface INotificationListDto extends IPaginable<INotification>, ITraceable {
    type?: string;      // Фильтр по типу
    channel?: string;   // Фильтр по каналу
    status?: string;    // Фильтр по статусу
}

// Ответ
interface INotificationListDtoResponse extends IPagination<INotification> {}
```

### Управление настройками

```typescript
import {
    INotificationPreferenceAddDto,
    INotificationPreferenceEditDto,
    INotificationPreferenceListDto
} from '@ts-core/notification';

// Добавление настройки
const addDto: INotificationPreferenceAddDto = {
    type: 'order_update',
    channel: 'email',
    isEnabled: true
};

// Редактирование настройки
const editDto: INotificationPreferenceEditDto = {
    isEnabled: false
};

// Список настроек
interface INotificationPreferenceListDto extends IPaginable<INotificationPreference>, ITraceable {}
```

### Управление шаблонами

```typescript
import {
    INotificationTemplateAddDto,
    INotificationTemplateEditDto,
    INotificationTemplateListDto
} from '@ts-core/notification';

// Добавление шаблона
const templateDto: INotificationTemplateAddDto = {
    type: 'welcome',
    channel: 'email',
    locale: 'ru',
    subject: 'Добро пожаловать в {{appName}}!',
    content: 'Привет, {{userName}}! Рады видеть тебя!'
};

// Редактирование шаблона
const editDto: INotificationTemplateEditDto = {
    subject: 'Обновлённая тема',
    content: 'Обновлённый контент'
};
```

## Загрузчик настроек

```typescript
import { NotificationSettingsLoader, INotificationSettings } from '@ts-core/notification';

class MySettingsLoader extends NotificationSettingsLoader {
    async load(): Promise<INotificationSettings> {
        // Загрузка настроек из API или конфигурации
        return {
            channels: ['email', 'push', 'sms', 'telegram'],
            types: ['welcome', 'order_update', 'promo', 'security']
        };
    }
}

// Использование
const loader = new MySettingsLoader();
const settings = await loader.load();
console.log('Доступные каналы:', settings.channels);
console.log('Типы уведомлений:', settings.types);
```

## Примеры использования

### Создание сообщения для отправки

```typescript
import { INotificationMessage } from '@ts-core/notification';

// Уведомление о заказе
const orderMessage: INotificationMessage = {
    type: 'order_shipped',
    channel: 'email',
    recipient: 'user@example.com',
    data: {
        orderId: '12345',
        trackingNumber: 'TRACK123',
        estimatedDelivery: '2024-01-15'
    },
    locale: 'ru'
};

// Push-уведомление
const pushMessage: INotificationMessage = {
    type: 'new_message',
    channel: 'push',
    recipient: 'device_token_xxx',
    data: {
        title: 'Новое сообщение',
        body: 'У вас новое сообщение от Иван',
        senderId: 42
    }
};
```

### Проверка настроек пользователя

```typescript
import { INotificationPreference, INotificationMessage } from '@ts-core/notification';

function shouldSendNotification(
    preferences: INotificationPreference[],
    message: INotificationMessage
): boolean {
    const preference = preferences.find(
        p => p.type === message.type && p.channel === message.channel
    );

    // Если настройка не найдена, отправляем по умолчанию
    if (!preference) {
        return true;
    }

    return preference.isEnabled;
}

// Использование
const userPreferences: INotificationPreference[] = [
    { id: 1, userId: 1, type: 'promo', channel: 'email', isEnabled: false },
    { id: 2, userId: 1, type: 'order_update', channel: 'email', isEnabled: true }
];

const message: INotificationMessage = {
    type: 'promo',
    channel: 'email',
    recipient: 'user@example.com'
};

const canSend = shouldSendNotification(userPreferences, message);
console.log('Можно отправить:', canSend); // false
```

### Реализация INotifable

```typescript
import { INotifable } from '@ts-core/notification';

class User implements INotifable {
    id: number;
    email: string;
    phone: string;
    locale: string;

    get notificationRecipient(): string {
        return this.email;
    }

    get notificationLocale(): string {
        return this.locale || 'ru';
    }
}

// Функция отправки уведомления пользователю
async function notifyUser(user: INotifable, type: string, data: any): Promise<void> {
    const message: INotificationMessage = {
        type,
        channel: 'email',
        recipient: user.notificationRecipient,
        locale: user.notificationLocale,
        data
    };

    await notificationService.send(message);
}
```

### Работа со статусами

```typescript
import { INotification, NotificationStatus } from '@ts-core/notification';

function getStatusLabel(status: NotificationStatus): string {
    const labels = {
        [NotificationStatus.PENDING]: 'Ожидает отправки',
        [NotificationStatus.SENT]: 'Отправлено',
        [NotificationStatus.DELIVERED]: 'Доставлено',
        [NotificationStatus.FAILED]: 'Ошибка доставки',
        [NotificationStatus.READ]: 'Прочитано'
    };
    return labels[status] || 'Неизвестно';
}

function canRetry(notification: INotification): boolean {
    return notification.status === NotificationStatus.FAILED;
}
```

## Каналы доставки

Типичные каналы доставки уведомлений:

| Канал | Описание | Пример recipient |
|-------|----------|------------------|
| `email` | Email уведомления | `user@example.com` |
| `push` | Push-уведомления (web/mobile) | `device_token_xxx` |
| `sms` | SMS сообщения | `+79001234567` |
| `telegram` | Telegram сообщения | `chat_id_123` |
| `slack` | Slack сообщения | `channel_id` |
| `in_app` | Внутренние уведомления | `user_id` |

## Типы уведомлений

Примеры типов уведомлений:

| Тип | Описание | Каналы |
|-----|----------|--------|
| `welcome` | Приветственное сообщение | email |
| `password_reset` | Сброс пароля | email, sms |
| `email_verification` | Подтверждение email | email |
| `order_created` | Заказ создан | email, push |
| `order_shipped` | Заказ отправлен | email, push, sms |
| `order_delivered` | Заказ доставлен | email, push |
| `payment_received` | Оплата получена | email, push |
| `new_message` | Новое сообщение | push, in_app |
| `promo` | Промо-рассылка | email, push |
| `security_alert` | Предупреждение безопасности | email, sms, push |

## Архитектура

```
@ts-core/notification (этот пакет)
│
├── Интерфейсы
│   ├── INotification — базовое уведомление
│   ├── INotificationChannel — канал доставки
│   ├── INotificationTemplate — шаблон
│   ├── INotificationPreference — настройки пользователя
│   ├── INotificationMessage — сообщение для отправки
│   ├── INotifable — получатель уведомлений
│   └── INotificationResult — результат отправки
│
├── DTO
│   ├── INotificationListDto
│   ├── INotificationPreferenceAddDto/EditDto/ListDto
│   └── INotificationTemplateAddDto/EditDto/ListDto
│
└── Утилиты
    └── NotificationSettingsLoader

@ts-core/notification-backend
│
└── Серверная реализация
    ├── Entity для БД
    ├── Сервисы отправки
    ├── Контроллеры
    └── Процессоры каналов
```

## Связанные пакеты

| Пакет | Описание |
|-------|----------|
| `@ts-core/notification-backend` | Серверная реализация с сущностями БД и контроллерами |

## Автор

**Renat Gubaev** — [renat.gubaev@gmail.com](mailto:renat.gubaev@gmail.com)

- GitHub: [ManhattanDoctor](https://github.com/ManhattanDoctor)
- Репозиторий: [ts-core-notification](https://github.com/ManhattanDoctor/ts-core-notification)

## Лицензия

ISC

import { IDestroyable } from '@ts-core/common';

export enum NotificationChannelType {
    SMS = 'sms',
    EMAIL = 'email',
    SLACK = 'slack',
    SOCKET = 'socket',
    TELEGRAM = 'telegram',
    WHATS_APP = 'whatsApp'
}

export enum NotificationChannelStatus {
    ACTIVE = 'ACTIVE',
    NOT_ACTIVE = 'NOT_ACTIVE'
}

export interface INotificationChannel<U = string> extends IDestroyable {
    type: U;
    status: NotificationChannelStatus;
}

import { INotificationMessage } from './INotificationMessage';
import { INotifable, NotifableUid } from './INotifable';
import { Type } from 'class-transformer';

export enum NotificationStatus {
    CREATED = 'CREATED',
    SENDING = 'SENDING',
    SENT = 'SENT',
    READED = 'READED',
    FAILED = 'FAILED',
    ERROR = 'ERROR'
}

export interface INotification<U = string, V = any> extends INotifable {
    id: number;
    type: U;
    status: NotificationStatus;
    channel: string;

    createdAt: Date;
    updatedDate: Date;

    details?: V;
    message?: INotificationMessage;
}

export class Notification<U = string, V = any> implements INotification<U, V> {
    id: number;
    type: U;
    status: NotificationStatus;
    channel: string;
    notifableUid: NotifableUid;

    @Type(() => Date)
    createdAt: Date;

    @Type(() => Date)
    updatedDate: Date;

    details?: V;
    message?: INotificationMessage;
}

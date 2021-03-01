import { INotificationMessage } from './INotificationMessage';
import { Type } from 'class-transformer';

export interface INotificationTemplate<T = string> extends INotificationMessage {
    id: number;
    type: T;
    locale: string;
    channel: string;

    createdDate: Date;
    updatedDate: Date;
}

export class NotificationTemplate<T = string> implements INotificationTemplate<T> {
    id: number;
    type: T;
    locale: string;
    channel: string;

    text: string;
    subject?: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

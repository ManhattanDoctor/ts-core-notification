import { INotificationMessage } from './INotificationMessage';
import { Type } from 'class-transformer';

export interface INotificationTemplate<U = string> extends INotificationMessage {
    id: number;
    type: U;
    locale: string;
    channel: string;

    createdDate: Date;
    updatedDate: Date;

    params?: Array<string>;
}

export class NotificationTemplate<U = string> implements INotificationTemplate<U> {
    id: number;
    type: U;
    locale: string;
    channel: string;

    text: string;
    subject?: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

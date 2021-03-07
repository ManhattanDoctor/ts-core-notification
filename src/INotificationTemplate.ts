import { INotificationMessage } from './INotificationMessage';
import { Type } from 'class-transformer';

export interface INotificationTemplate extends INotificationMessage {
    id: number;
    type: string;
    locale: string;
    channel: string;

    createdDate: Date;
    updatedDate: Date;

    params?: Array<string>;
}

export class NotificationTemplate implements INotificationTemplate {
    id: number;
    type: string;
    locale: string;
    channel: string;

    text: string;
    subject?: string;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

import { INotificationMessage } from './INotificationMessage';

export interface INotificationTemplate<T = string> extends INotificationMessage {
    id: number;
    type: T;
    locale: string;
    channel: string;
}

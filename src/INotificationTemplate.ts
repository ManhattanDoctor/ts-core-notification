import { INotificationMessage } from './INotificationMessage';

export interface INotificationTemplate<T = string> extends INotificationMessage {
    type: T;
    locale: string;
    channel: string;
}

import { INotifable } from './INotifable';
import { NotificationStatus } from './INotification';
import { INotificationMessage } from './INotificationMessage';

export interface INotificationSender<U = string, V extends INotifable = INotifable> {
    readonly channel: string;
    send(notifable: V, message: INotificationMessage, type: U, details: any): Promise<INotificationSenderResult>;
}

export interface INotificationSenderResult {
    status: NotificationStatus;
    details?: any;
}

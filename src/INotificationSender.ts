import { INotifable } from './INotifable';
import { NotificationStatus } from './INotification';
import { INotificationMessage } from './INotificationMessage';

export interface INotificationSender<U extends INotifable = INotifable> {
    readonly channel: string;
    send(notifable: U, message?: INotificationMessage): Promise<INotificationSenderResult>;
}

export interface INotificationSenderResult {
    status: NotificationStatus;
    details?: any;
}

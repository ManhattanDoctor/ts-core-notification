import { NotificationStatus } from './INotification';

export interface INotificationResult<T = any> {
    status: NotificationStatus;
    details?: T;
}

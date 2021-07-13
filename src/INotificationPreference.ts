import { NotifableUid } from './INotifable';
import { Type } from 'class-transformer';

export interface INotificationPreference<U = string> {
    id: number;
    type: U;
    channels: Array<string>;
    notifableUid: NotifableUid;

    createdDate: Date;
    updatedDate: Date;
}

export class NotificationPreference<U = string> implements INotificationPreference<U> {
    id: number;
    type: U;
    channels: Array<string>;
    notifableUid: NotifableUid;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

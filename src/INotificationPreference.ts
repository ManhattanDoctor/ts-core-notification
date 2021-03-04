import { NotifableUid } from './INotifable';
import { Type } from 'class-transformer';

export interface INotificationPreference {
    id: number;
    type: string;
    channels: Array<string>;
    notifableUid: NotifableUid;

    createdDate: Date;
    updatedDate: Date;
}


export class NotificationPreference implements INotificationPreference {
    id: number;
    type: string;
    channels: Array<string>;
    notifableUid: NotifableUid;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

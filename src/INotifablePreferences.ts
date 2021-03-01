import { NotifableUid } from './INotifable';
import { Type } from 'class-transformer';

export interface INotifablePreferences<T = string> {
    id: number;
    type: T;
    channels: Array<string>;
    notifableUid: NotifableUid;

    createdDate: Date;
    updatedDate: Date;
}

export class NotifablePreferences<T = string> implements INotifablePreferences<T> {
    id: number;
    type: T;
    channels: Array<string>;
    notifableUid: NotifableUid;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

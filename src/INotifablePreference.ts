import { NotifableUid } from './INotifable';
import { Type } from 'class-transformer';

export interface INotifablePreference<T = string> {
    id: number;
    type: T;
    channels: Array<string>;
    notifableUid: NotifableUid;

    createdDate: Date;
    updatedDate: Date;
}

export class NotifablePreference<T = string> implements INotifablePreference<T> {
    id: number;
    type: T;
    channels: Array<string>;
    notifableUid: NotifableUid;

    @Type(() => Date)
    createdDate: Date;

    @Type(() => Date)
    updatedDate: Date;
}

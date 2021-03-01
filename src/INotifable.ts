export type INotifableUid = number | string;

export interface INotifable {
    notifableUid: INotifableUid;
}

export interface INotifablePreferences<T = string> {
    type: T;
    channels: Array<string>;
    notifableUid: INotifableUid;
}

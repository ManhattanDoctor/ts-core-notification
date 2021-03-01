export type NotifableUid = number | string;

export interface INotifable {
    notifableUid: NotifableUid;
}

export interface INotifablePreferences<T = string> {
    type: T;
    channels: Array<string>;
    notifableUid: NotifableUid;
}

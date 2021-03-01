export interface INotifable {
    notifableUid: string;
}

export interface INotifablePreferences<T = string> {
    type: T;
    channels: Array<string>;
    notifableUid: string;
}

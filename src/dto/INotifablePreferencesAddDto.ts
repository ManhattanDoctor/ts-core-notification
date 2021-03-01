import { ITraceable } from '@ts-core/common/trace';
import { NotifableUid } from '../INotifable';
import { INotifablePreferences } from '../INotifablePreferences';

export interface INotifablePreferencesAddDto<T = string> extends ITraceable {
    type: T;
    channels: Array<string>;
    notifableUid?: NotifableUid;
}

export declare type INotifablePreferencesAddDtoResponse = INotifablePreferences;

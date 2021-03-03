import { ITraceable } from '@ts-core/common/trace';
import { NotifableUid } from '../../INotifable';
import { INotifablePreference } from '../../INotifablePreference';

export interface INotifablePreferenceAddDto<T = string> extends ITraceable {
    type: T;
    channels: Array<string>;
    notifableUid?: NotifableUid;
}

export declare type INotifablePreferenceAddDtoResponse = INotifablePreference;

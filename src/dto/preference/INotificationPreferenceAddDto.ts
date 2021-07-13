import { ITraceable } from '@ts-core/common/trace';
import { NotifableUid } from '../../INotifable';
import { INotificationPreference } from '../../INotificationPreference';

export interface INotificationPreferenceAddDto<U = string> extends ITraceable {
    type: U;
    channels: Array<string>;
    notifableUid?: NotifableUid;
}

export declare type INotificationPreferenceAddDtoResponse = INotificationPreference;

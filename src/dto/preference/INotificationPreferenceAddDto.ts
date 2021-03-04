import { ITraceable } from '@ts-core/common/trace';
import { NotifableUid } from '../../INotifable';
import { INotificationPreference } from '../../INotificationPreference';

export interface INotificationPreferenceAddDto extends ITraceable {
    type: string;
    channels: Array<string>;
    notifableUid?: NotifableUid;
}

export declare type INotificationPreferenceAddDtoResponse = INotificationPreference;

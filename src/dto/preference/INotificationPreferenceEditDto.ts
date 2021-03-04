import { ITraceable } from '@ts-core/common/trace';
import { NotifableUid } from '../../INotifable';
import { INotificationPreference } from '../../INotificationPreference';

export interface INotificationPreferenceEditDto extends ITraceable {
    notifableUid: NotifableUid;
    items: Array<{ type: string; channels: Array<string> }>;
}

export declare type INotificationPreferenceEditDtoResponse = Array<INotificationPreference>;

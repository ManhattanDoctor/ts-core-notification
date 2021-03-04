import { ITraceable } from '@ts-core/common/trace';
import { NotifableUid } from '../../INotifable';
import { INotificationPreference } from '../../INotificationPreference';
import { INotificationPreferenceItem } from './INotificationPreferenceListDto';

export interface INotificationPreferenceEditDto extends ITraceable {
    notifableUid: NotifableUid;
    items: Array<INotificationPreferenceItem>;
}

export declare type INotificationPreferenceEditDtoResponse = Array<INotificationPreference>;

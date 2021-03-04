import { ITraceable } from '@ts-core/common/trace';
import { NotifableUid } from '../../INotifable';
import { INotificationPreference } from '../../INotificationPreference';
import { INotificationPreferenceItem } from './INotificationPreferenceListDto';

export interface INotificationPreferenceEditDto<T = string> extends ITraceable {
    notifableUid: NotifableUid;
    items: Array<INotificationPreferenceItem<T>>;
}

export declare type INotificationPreferenceEditDtoResponse<T = string> = Array<INotificationPreference<T>>;

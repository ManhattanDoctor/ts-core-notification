import { ITraceable } from '@ts-core/common/trace';
import { NotifableUid } from '../../INotifable';
import { INotificationPreference } from '../../INotificationPreference';
import { INotificationPreferenceItem } from './INotificationPreferenceListDto';

export interface INotificationPreferenceEditDto<U = string> extends ITraceable {
    notifableUid: NotifableUid;
    items: Array<INotificationPreferenceItem<U>>;
}

export declare type INotificationPreferenceEditDtoResponse<U = string> = Array<INotificationPreference<U>>;

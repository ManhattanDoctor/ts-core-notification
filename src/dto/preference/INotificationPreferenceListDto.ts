import { IFilterable } from '@ts-core/common/dto';
import { ITraceable } from '@ts-core/common/trace';
import { INotificationPreference, NotificationPreference } from '../../INotificationPreference';

export interface INotificationPreferenceListDto extends IFilterable<INotificationPreference>, ITraceable {}

export interface INotificationPreferenceListDtoResponse extends Array<INotificationPreferenceItem> {}

export interface INotificationPreferenceItem<T = string> extends INotificationPreference<T> {
    channelsAvailable: Array<string>;
}

export class NotificationPreferenceItem<T = string> extends NotificationPreference<T> implements INotificationPreferenceItem<T> {
    channelsAvailable: Array<string>;
}

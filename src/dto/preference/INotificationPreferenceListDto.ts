import { IFilterable } from '@ts-core/common/dto';
import { ITraceable } from '@ts-core/common/trace';
import { INotificationPreference } from '../../INotificationPreference';

export interface INotificationPreferenceListDto extends IFilterable<INotificationPreference>, ITraceable {}

export interface INotificationPreferenceListDtoResponse extends Array<INotificationPreferenceItem> {}

export interface INotificationPreferenceItem<T = string> {
    type: T;
    channels: Array<string>;
    channelsAvailable: Array<string>;
}

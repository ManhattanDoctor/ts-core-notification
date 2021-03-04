import { IFilterable } from '@ts-core/common/dto';
import { ITraceable } from '@ts-core/common/trace';
import { INotificationPreference } from '../../INotificationPreference';

export interface INotificationPreferenceListDto<T = string> extends IFilterable<INotificationPreference<T>>, ITraceable {}

export interface INotificationPreferenceListDtoResponse<T = string> extends Array<INotificationPreferenceItem<T>> {}

export interface INotificationPreferenceItem<T = string> {
    type: T;
    channels: Array<string>;
    channelsAvailable: Array<string>;
}

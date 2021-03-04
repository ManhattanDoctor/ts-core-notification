import { ITraceable } from '@ts-core/common/trace';

export interface INotificationPreferenceListDto extends ITraceable {}

export interface INotificationPreferenceListDtoResponse<T = string> extends Array<INotificationPreferenceItem<T>> {}

export interface INotificationPreferenceItem<T = string> {
    type: T;
    channels: Array<string>;
    channelsAllowed: Array<string>;
}

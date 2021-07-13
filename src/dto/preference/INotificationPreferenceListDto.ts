import { ITraceable } from '@ts-core/common/trace';

export interface INotificationPreferenceListDto extends ITraceable {}

export interface INotificationPreferenceListDtoResponse<U = string> extends Array<INotificationPreferenceItem<U>> {}

export interface INotificationPreferenceItem<U = string> {
    type: U;
    channels: Array<string>;
    channelsAvailable: Array<string>;
}

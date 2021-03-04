import { ITraceable } from '@ts-core/common/trace';

export interface INotificationPreferenceListDto extends ITraceable {}

export interface INotificationPreferenceListDtoResponse extends Array<INotificationPreferenceItem> {}

export interface INotificationPreferenceItem {
    type: string;
    channels: Array<string>;
    channelsAllowed: Array<string>;
}

import { ITraceable } from '@ts-core/common/trace';

export interface INotificationsSettingsDto extends ITraceable {}

export interface INotificationsSettingsDtoResponse<U = string> {
    types: Array<U>;
    locales: Array<string>;
    channels: Array<string>;
}

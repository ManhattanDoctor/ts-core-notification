import { IFilterable } from '@ts-core/common/dto';
import { ITraceable } from '@ts-core/common/trace';
import { INotifablePreference } from '../INotifablePreference';

export interface INotifablePreferencesListDto extends IFilterable<INotifablePreference>, ITraceable {}

export interface INotifablePreferencesListDtoResponse extends Array<INotifablePreferenceItem> {}

export interface INotifablePreferenceItem extends INotifablePreference {
    channelsAvailable: Array<string>;
}

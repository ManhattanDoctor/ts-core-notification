import { IFilterable } from '@ts-core/common/dto';
import { ITraceable } from '@ts-core/common/trace';
import { INotifablePreference } from '../../INotifablePreference';

export interface INotifablePreferenceListDto extends IFilterable<INotifablePreference>, ITraceable {}

export interface INotifablePreferenceListDtoResponse extends Array<INotifablePreferenceItem> {}

export interface INotifablePreferenceItem extends INotifablePreference {
    channelsAvailable: Array<string>;
}

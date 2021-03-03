import { IFilterable } from '@ts-core/common/dto';
import { ITraceable } from '@ts-core/common/trace';
import { INotifablePreference, NotifablePreference } from '../../INotifablePreference';

export interface INotifablePreferenceListDto extends IFilterable<INotifablePreference>, ITraceable {}

export interface INotifablePreferenceListDtoResponse extends Array<INotifablePreferenceItem> {}

export interface INotifablePreferenceItem<T = string> extends INotifablePreference<T> {
    channelsAvailable: Array<string>;
}

export class NotifablePreferenceItem<T = string> extends NotifablePreference<T> implements INotifablePreferenceItem<T> {
    channelsAvailable: Array<string>;
}

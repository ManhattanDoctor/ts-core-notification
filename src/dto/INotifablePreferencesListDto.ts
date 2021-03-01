import { IFilterable } from '@ts-core/common/dto';
import { ITraceable } from '@ts-core/common/trace';
import { INotifablePreferences } from '../INotifablePreferences';

export interface INotifablePreferencesListDto extends IFilterable<INotifablePreferences>, ITraceable {}

export interface INotifablePreferencesListDtoResponse extends Array<INotifablePreferences> {}

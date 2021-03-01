import { ITraceable } from '@ts-core/common/trace';
import { INotifablePreferences } from '../INotifablePreferences';

export interface INotifablePreferencesEditDto extends ITraceable {
    channels: Array<string>;
}

export declare type INotifablePreferencesEditDtoResponse = INotifablePreferences;

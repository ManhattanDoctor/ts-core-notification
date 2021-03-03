import { ITraceable } from '@ts-core/common/trace';
import { INotifablePreference } from '../INotifablePreference';

export interface INotifablePreferenceEditDto extends ITraceable {
    channels: Array<string>;
}

export declare type INotifablePreferenceEditDtoResponse = INotifablePreference;

import { ITraceable } from '@ts-core/common/trace';
import { INotificationPreference } from '../../INotificationPreference';

export interface INotificationPreferenceEditDto extends ITraceable {
    id: number;
    channels: Array<string>;
}

export declare type INotificationPreferenceEditDtoResponse = INotificationPreference;

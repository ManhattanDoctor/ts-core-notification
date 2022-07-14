import { ITraceable } from '@ts-core/common';
import { INotificationTemplate } from '../../INotificationTemplate';

export interface INotificationTemplateEditDto<U = string> extends Partial<INotificationTemplate<U>>, ITraceable {
    id: number;
}

export declare type INotificationTemplateEditDtoResponse<U = string> = INotificationTemplate<U>;

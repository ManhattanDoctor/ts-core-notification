import { ITraceable } from '@ts-core/common/trace';
import { INotificationTemplate } from '../../INotificationTemplate';

export interface INotificationTemplateAddDto<U = string> extends ITraceable {
    type: U;
    locale: string;
    channel: string;

    params?: Array<string>;

    text: string;
    subject?: string;
}

export declare type INotificationTemplateAddDtoResponse<U = string> = INotificationTemplate<U>;

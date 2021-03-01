import { ITraceable } from '@ts-core/common/trace';
import { INotificationTemplate } from '../INotificationTemplate';

export interface INotificationTemplateAddDto extends ITraceable {
    type: string;
    locale: string;
    channel: string;

    text: string;
    subject?: string;
}

export declare type INotificationTemplateAddDtoResponse = INotificationTemplate;

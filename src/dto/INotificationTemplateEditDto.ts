import { ITraceable } from '@ts-core/common/trace';
import { INotificationTemplate } from '../INotificationTemplate';

export interface INotificationTemplateEditDto extends Partial<INotificationTemplate>, ITraceable {}

export declare type INotificationTemplateEditDtoResponse = INotificationTemplate;

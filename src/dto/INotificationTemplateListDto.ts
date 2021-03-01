import { ITraceable } from '@ts-core/common/trace';
import { IPaginable, IPagination } from '@ts-core/common/dto';
import { INotificationTemplate } from '../INotificationTemplate';

export interface INotificationTemplateListDto extends IPaginable<INotificationTemplate>, ITraceable {}

export interface INotificationTemplateListDtoResponse extends IPagination<INotificationTemplate> {}

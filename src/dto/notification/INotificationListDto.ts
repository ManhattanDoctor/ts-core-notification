import { ITraceable } from '@ts-core/common';
import { IPaginable, IPagination } from '@ts-core/common';
import { INotification } from '../../INotification';

export interface INotificationListDto extends IPaginable<INotification>, ITraceable {}

export interface INotificationListDtoResponse extends IPagination<INotification> {}

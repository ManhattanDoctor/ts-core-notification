import { ILogger, LoggerWrapper } from '@ts-core/common/logger';
import { DestroyableMapCollection } from '@ts-core/common/map';
import { LanguageLocale } from '@ts-core/language';
import * as _ from 'lodash';
import { INotifable } from './INotifable';
import { INotificationSender } from './INotificationSender';
import { INotificationTemplate } from './INotificationTemplate';
import { INotificationMessage } from './INotificationMessage';

export abstract class NotificationManagerBase<T, U extends INotifable> extends LoggerWrapper {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    protected senders: Array<INotificationSender<U>>;
    protected locales: DestroyableMapCollection<LanguageLocale>;
    protected templates: Array<INotificationTemplate<T>>;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(logger: ILogger) {
        super(logger);
        this.senders = new Array();
        this.locales = new DestroyableMapCollection('locale');
        this.templates = new Array();
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected abstract getNotifables(type: T, details: any): Promise<Array<INotifableDetails<U>>>;

    protected abstract getTemplate(type: T, details: INotifableDetails<U>): Promise<INotificationTemplate<T>>;

    protected abstract send(type: T, details: any, notifable: U, senders: INotificationSender<U>, message: INotificationMessage): Promise<void>;

    protected getLocale(template: INotificationTemplate<T>): LanguageLocale {
        return this.locales.get(template.locale);
    }

    protected getSenders(channel: string): Array<INotificationSender<U>> {
        return _.filter(this.senders, item => item.channel === channel);
    }

    protected async createMessage(type: T, details: any, template: INotificationTemplate<T>): Promise<INotificationMessage> {
        let locale = this.getLocale(template);
        let text = template.text;
        let subject = template.subject;
        if (!_.isNil(locale)) {
            text = locale.compile(template.text, details);
            if (!_.isNil(template.subject)) {
                subject = locale.compile(template.subject, details);
            }
        } else {
            this.warn(`Unable to create correct message of ${type}: locale for "${template.type}}" template is undefined`);
        }
        return !_.isEmpty(subject) ? { text, subject } : { text };
    }

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public async notify(type: T, details: any): Promise<void> {
        let notifables = await this.getNotifables(type, details);
        if (_.isEmpty(notifables)) {
            return;
        }

        for (let item of notifables) {
            let template = await this.getTemplate(type, item);
            if (_.isNil(template)) {
                this.warn(`Unable to notify "${item.notifable.notifableUid}" of ${type}: template is Nil`);
                continue;
            }

            let message = await this.createMessage(type, details, template);
            for (let sender of this.getSenders(item.channel)) {
                this.send(type, details, item.notifable, sender, message);
            }
        }
    }

    public destroy(): void {
        if (this.isDestroyed) {
            return;
        }
        super.destroy();

        this.locales.destroy();
        this.locales = null;

        this.senders = null;
        this.templates = null;
    }
}

export interface INotifableDetails<T extends INotifable> {
    channel: string;
    notifable: T;
}

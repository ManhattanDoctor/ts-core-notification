import { Loadable, LoadableEvent, LoadableStatus } from '@ts-core/common';
import { ObservableData } from '@ts-core/common';
import * as _ from 'lodash';
import { INotificationsSettingsDtoResponse } from '../dto';

export abstract class NotificationSettingsLoader extends Loadable<void, INotificationsSettingsDtoResponse> implements INotificationsSettingsDtoResponse {
    //--------------------------------------------------------------------------
    //
    // 	Properties
    //
    //--------------------------------------------------------------------------

    protected settings: INotificationsSettingsDtoResponse;

    //--------------------------------------------------------------------------
    //
    // 	Constructor
    //
    //--------------------------------------------------------------------------

    constructor() {
        super();
    }

    //--------------------------------------------------------------------------
    //
    // 	Protected Methods
    //
    //--------------------------------------------------------------------------

    protected abstract loadSettings(): Promise<INotificationsSettingsDtoResponse>;

    //--------------------------------------------------------------------------
    //
    // 	Public Methods
    //
    //--------------------------------------------------------------------------

    public async load(): Promise<void> {
        if (this.isLoading) {
            return;
        }

        this.status = LoadableStatus.LOADING;
        this.observer.next(new ObservableData(LoadableEvent.STARTED));

        this.settings = await this.loadSettings();

        this.status = LoadableStatus.LOADED;
        this.observer.next(new ObservableData(LoadableEvent.COMPLETE, this));
        this.observer.next(new ObservableData(LoadableEvent.FINISHED));
    }

    public reset(): void {
        this.settings = null;
        this.status = LoadableStatus.NOT_LOADED;
    }

    //--------------------------------------------------------------------------
    //
    // 	Public Properties
    //
    //--------------------------------------------------------------------------

    public get types(): Array<string> {
        return !_.isNil(this.settings) ? this.settings.types : null;
    }

    public get locales(): Array<string> {
        return !_.isNil(this.settings) ? this.settings.locales : null;
    }

    public get channels(): Array<string> {
        return !_.isNil(this.settings) ? this.settings.channels : null;
    }
}

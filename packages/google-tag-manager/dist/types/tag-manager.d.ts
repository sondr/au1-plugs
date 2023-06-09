import { EventAggregator } from 'aurelia-event-aggregator';
import { Configure, OptionsInterface } from './configure';
export declare class TagManager {
    private _noScriptElement?;
    private _scriptElement?;
    private _subscriptions;
    private _flags;
    private _eventAggregator;
    private _initialized;
    private _logger;
    private _options;
    private _settings;
    private _dataLayer;
    constructor(eventAggregator: EventAggregator, configuration: Configure);
    init(initData: string | OptionsInterface): void;
    dispatchDataLayerEvent(event: Object): void;
    enable(): void;
    disable(): void;
    isActive(): boolean;
    getKey(): string;
    private _setup;
    private _checkSettings;
    private _attachScriptElements;
    private _detachScripts;
    private _attachPageTracker;
    private _resetDataLayer;
    private _log;
    private _trackPage;
    private _ensureDataLayer;
}
//# sourceMappingURL=tag-manager.d.ts.map
import { PLATFORM } from 'aurelia-pal';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/dynamic-input')
    ]);
}
export * from './interfaces';
//# sourceMappingURL=index.js.map
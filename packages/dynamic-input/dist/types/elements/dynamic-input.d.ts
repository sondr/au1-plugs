import { TemplatingEngine } from 'aurelia-framework';
import { DynamicInputType, IDynamicInputModel } from '../interfaces';
export declare class CustomInput {
    protected readonly parentElement: HTMLTemplateElement;
    protected readonly te: TemplatingEngine;
    private containerElement;
    private _view;
    inputModel: IDynamicInputModel<any>;
    model: {};
    overrideClass: '';
    trigger?: string;
    constructor(parentElement: HTMLTemplateElement, te: TemplatingEngine);
    bind(): void;
    attached(): void;
    unbind(): void;
    detached(): void;
    buildHtml(): void;
    get isRegular(): boolean;
    valueBindString(): string;
    attachInputElement(): void;
    attachTextareaElement(): void;
    attachSelectElement(): void;
    createEl(tag: DynamicInputType | 'div' | 'option' | 'input'): HTMLElement;
}
//# sourceMappingURL=dynamic-input.d.ts.map
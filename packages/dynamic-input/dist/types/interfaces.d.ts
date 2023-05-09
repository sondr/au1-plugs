export declare const regularInputs: readonly ["text", "number", "email", "tel", "checkbox", "password", "color"];
export type RegularInputs = typeof regularInputs[number];
export type DynamicInputType = RegularInputs | // regular inputs
'textarea' | 'select' | // regular select
'select-control' | // custom select
'date';
export interface IDynamicInputModel<T> {
    type: DynamicInputType;
    propertyId?: string;
    id?: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
    options?: ISelectOption[];
    class?: string;
    rows?: string;
    validation?: IValidateOptions;
    data?: T;
}
export interface ISelectOption {
    id: string | number;
    title: string;
}
export interface IValidateOptions {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
}
export interface ISelectOptionsProp {
    id: any;
    name: string;
}
//# sourceMappingURL=interfaces.d.ts.map
export declare type Dict<V> = { [k: string]: V }

export declare type DynamicControlSection = {
    label: string
    description?: string
    controlGroups: DynamicControlGroup[]
}

export declare type DynamicControlGroup = {
    label?: string
    controls: Control[]
}

export declare type Option = {
    id: string,
    label: string,
    children?: Option[]
}

export declare type DynamicControlType = "multiselect" | "select" | "number"
export type Control = SelectControl | MultiSelectControl | NumberControl

export declare type DynamicControl = {
    name: string,
    label?: string,
    type: DynamicControlType
    required: boolean
    helpText?: string
    value?: string | string[] | number | null
}

export declare type SelectControl = DynamicControl & {
    options: Option[]
    value?: string | null
}

export declare type MultiSelectControl = DynamicControl & {
    options: Option[]
    value?: string[] | string
}

export declare type NumberControl = DynamicControl & {
    min?: number
    max?: number
    value?: number | null
}

export declare type DynamicFormMeta = {
    controlSections: DynamicControlSection[]
}

export declare type DynamicFormData = Dict<string | string[] | number | null>

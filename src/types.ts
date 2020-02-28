export type Dict<V> = { [k: string]: V }

export interface FilterOption {
    label: string;
    id: string;
}

export interface Filter extends FilterOption {
    column_id: string,
    options: FilterOption[]
}

export interface IndicatorValues {
    value: number,
    color: string
}

export interface NestedFilterOption extends FilterOption{
    children?: FilterOption[];
}

export interface NumericRange {
    min: number,
    max: number
}

export interface LevelLabel {
    id: number;
    area_level_label: string;
    display: boolean;
}

//TODO: Rename this IndicatorMetadata
export interface ChoroplethIndicatorMetadata {
    indicator: string;
    value_column: string;
    indicator_column?: string;
    indicator_value?: string;
    name: string;
    min: number;
    max: number;
    colour: string;
    invert_scale: boolean;
}
export type Dict<V> = { [k: string]: V }

export interface FilterOption {
    label: string;
    id: string;
}

export interface Filter extends FilterOption {
    column_id: string,
    options: FilterOption[]
}


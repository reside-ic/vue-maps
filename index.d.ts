declare module "@reside-ic/vue-maps" {
}

import Vue from "vue";

export declare class BubblePlot extends Vue {

}

export type Dict<V> = { [k: string]: V }

export interface LevelLabel {
    id: number;
    area_level_label: string;
    display: boolean;
}

export interface IndicatorMetadata {
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

export interface FilterOption {
    label: string;
    id: string;
}

export interface Filter extends FilterOption {
    column_id: string,
    options: FilterOption[]
}

export interface BubblePlotLabels {
    filtersLabel: string,
    colorIndicatorLabel: string,
    sizeIndicatorLabel: string,
    detailLabel: string
}

export interface BubblePlotSelections {
    colorIndicatorId: string,
    sizeIndicatorId: string,
    selectedFilterOptions: Dict<FilterOption[]>,
    detail: number
}


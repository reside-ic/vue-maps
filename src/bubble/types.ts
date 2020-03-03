import {Dict, FilterOption, IndicatorValues} from "../types";

export interface BubblePlotLabels {
    filtersLabel: string,
    colorIndicatorLabel: string,
    sizeIndicatorLabel: string,
    detailLabel: string
}

export interface BubbleIndicatorValues extends IndicatorValues {
    radius: number;
}

export type BubbleIndicatorValuesDict = Dict<BubbleIndicatorValues>;

export interface BubblePlotSelections {
    colorIndicatorId: string,
    sizeIndicatorId: string,
    selectedFilterOptions: Dict<FilterOption[]>,
    detail: number
}
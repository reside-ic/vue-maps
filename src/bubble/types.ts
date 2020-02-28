import {Dict, FilterOption, IndicatorValues} from "../types";

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
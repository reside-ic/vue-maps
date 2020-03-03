import {Wrapper} from "@vue/test-utils";
import {Vue} from "vue/types/vue";
import {FilterOption} from "../src/types";
import FilterSelect from "../src/FilterSelect.vue";

export const testData = {
    features: [
        {
            "type": "Feature",
            "properties": {"iso3": "MWI", "area_id": "MWI", "area_name": "Malawi", "area_level": 0, "center_x": 35.7082, "center_y": -15.2046},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [[[[35.7, -15.2], [35.8, -15.1], [35.9, -15.3]]]]
            }
        },
        {
            "type": "Feature",
            "properties": {"iso3": "MWI", "area_id": "MWI_3_1", "area_name": "North", "area_level": 3, "center_x": 35.7082, "center_y": -15.2046},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [[[[35.7083, -15.2047], [35.7117, -15.2066], [35.7108, -15.2117]]]]
            }
        },
        {
            "type": "Feature",
            "properties": {"iso3": "MWI", "area_id": "MWI_4_1", "area_name": "North West", "area_level": 4, "center_x": 35.7083, "center_y": -15.2047},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [[[[35.7083, -15.2047], [35.7117, -15.2066], [35.7108, -15.2117]]]]
            }
        },
        {
            "type": "Feature",
            "properties": {"iso3": "MWI", "area_id": "MWI_4_2", "area_name": "North East", "area_level": 4, "center_x": 35.7084, "center_y": -15.2048},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [[[[35.7083, -15.2047], [35.7117, -15.2066], [35.7108, -15.2117]]]]
            }
        },
        {
            "type": "Feature",
            "properties": {"iso3": "MWI", "area_id": "MWI_4_3", "area_name": "North North East", "area_level": 3, "center_x": 35.7084, "center_y": -15.2048},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [[[[35.7083, -15.2047], [35.7117, -15.2066], [35.7108, -15.2117]]]]
            }
        }
    ],
    featureLevels: [
        {id: 0, display: true, area_level_label: "Country"},
        {id: 3, display: true, area_level_label: "Admin Level 3"},
        {id: 4, display: true, area_level_label: "Admin Level 4"}
    ],
    chartdata: [
        {
            area_id: "MWI_3_1", plhiv: 1, prevalence: 0.01, age: "0:15", sex: "female"
        },
        {
            area_id: "MWI_4_1", plhiv: 10, prevalence: 0.1, age: "0:15", sex: "female"
        },
        {
            area_id: "MWI_4_2", plhiv: 20, prevalence: 0.2, age: "0:15", sex: "female"
        },
        {
            area_id: "MWI_4_3", plhiv: 20, prevalence: 0, age: "0:15", sex: "female"
        }
    ],
    indicators: [
        {
            indicator: "plhiv", value_column: "plhiv", name: "PLHIV", min: 1, max: 100, colour: "interpolateGreys", invert_scale: false
        },
        {
            indicator: "prevalence", value_column: "prevalence", name: "Prevalence", min: 0, max: 0.8, colour: "interpolateGreys", invert_scale: false
        }
    ],
    areaFilterId: "area",
    filters: [
        { id: "area", label: "Area", column_id: "area_id",
            options: [{id: "MWI", label: "Malawi", children: [
                    {id: "MWI_3_1", label: "3.1"},
                    {id: "MWI_4_1", label: "4.1"},
                    {id: "MWI_4_2", label: "4.2"},
                    {id: "MWI_4_3", label: "4.3"}
                ]}
            ]},
        { id: "age", label: "Age", column_id: "age", options: [{id: "0:15", label:"0-15"}, {id: "15:30", label: "15-30"}]},
        { id: "sex", label: "Sex", column_id: "sex", options: [{id: "female", label:"Female"}, {id: "male", label: "Male"}]}
    ]
};

export const expectFilter = (wrapper: Wrapper<Vue>, divId: string, value: string[], label: string, multiple: boolean, options: FilterOption[]) => {
    const filterDiv = wrapper.find("#" + divId);
    expect(filterDiv.classes()[0]).toBe("form-group");
    const filter = filterDiv.find(FilterSelect);
    expect(filter.props().value).toStrictEqual(value);
    expect(filter.props().multiple).toBe(multiple);
    expect(filter.props().label).toBe(label);
    expect(filter.props().options).toStrictEqual(options);
};

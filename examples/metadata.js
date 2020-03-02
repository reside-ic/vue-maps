const indicators = [
    {
        "indicator": "prevalence",
        "value_column": "mean",
        "indicator_column": "indicator_id",
        "indicator_value": "2",
        "name": "HIV prevalence",
        "min": 0,
        "max": 0.5,
        "colour": "interpolateMagma",
        "invert_scale": true
    },
    {
        "indicator": "population",
        "value_column": "mean",
        "indicator_column": "indicator_id",
        "indicator_value": "1",
        "name": "Population",
        "min": 0,
        "max": 20000000,
        "colour": "interpolateViridis",
        "invert_scale": false
    },
    {
        "indicator": "incidence",
        "value_column": "mean",
        "indicator_column": "indicator_id",
        "indicator_value": "7",
        "name": "HIV incidence",
        "min": 0,
        "max": 0.01,
        "colour": "interpolateMagma",
        "invert_scale": true
    },
    {
        "indicator": "new_infections",
        "value_column": "mean",
        "indicator_column": "indicator_id",
        "indicator_value": "8",
        "name": "New infections",
        "min": 0,
        "max": 40000,
        "colour": "interpolateMagma",
        "invert_scale": true
    },
    {
        "indicator": "anc_prevalence",
        "value_column": "mean",
        "indicator_column": "indicator_id",
        "indicator_value": "9",
        "name": "ANC HIV prevalence",
        "min": 0,
        "max": 0.5,
        "colour": "interpolateMagma",
        "invert_scale": true
    }
];

const featureLevels = [
    {
        "id": 0,
        "area_level_label": "Country",
        "display": true
    },
    {
        "id": 1,
        "area_level_label": "Region",
        "display": truegit
    },
    {
        "id": 2,
        "area_level_label": "Zone",
        "display": true
    },
    {
        "id": 3,
        "area_level_label": "District",
        "display": true
    },
    {
        "id": 4,
        "area_level_label": "District + Metro",
        "display": true
    }
];

const areaOptions = [{
        "id": "MWI",
        "label": "Malawi",
        "children": [
            {
                "id": "MWI_1_1",
                "label": "Northern",
                "children": [
                    {
                        "id": "MWI_2_1",
                        "label": "Northern",
                        "children": [
                            {
                                "id": "MWI_3_1",
                                "label": "Chitipa",
                                "children": [
                                    {
                                        "id": "MWI_4_1",
                                        "label": "Chitipa",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_2",
                                "label": "Karonga",
                                "children": [
                                    {
                                        "id": "MWI_4_2",
                                        "label": "Karonga",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_3",
                                "label": "Rumphi",
                                "children": [
                                    {
                                        "id": "MWI_4_3",
                                        "label": "Rumphi",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_4",
                                "label": "Mzimba",
                                "children": [
                                    {
                                        "id": "MWI_4_4",
                                        "label": "Mzuzu City",
                                        "children": []
                                    },
                                    {
                                        "id": "MWI_4_6",
                                        "label": "Mzimba",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_5",
                                "label": "Nkhata Bay",
                                "children": [
                                    {
                                        "id": "MWI_4_5",
                                        "label": "Nkhata Bay",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_6",
                                "label": "Likoma",
                                "children": [
                                    {
                                        "id": "MWI_4_7",
                                        "label": "Likoma",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "MWI_1_2",
                "label": "Central",
                "children": [
                    {
                        "id": "MWI_2_2",
                        "label": "Central-East",
                        "children": [
                            {
                                "id": "MWI_3_10",
                                "label": "Dowa",
                                "children": [
                                    {
                                        "id": "MWI_4_11",
                                        "label": "Dowa",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_11",
                                "label": "Salima",
                                "children": [
                                    {
                                        "id": "MWI_4_12",
                                        "label": "Salima",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_7",
                                "label": "Nkhotakota",
                                "children": [
                                    {
                                        "id": "MWI_4_8",
                                        "label": "Nkhotakota",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_8",
                                "label": "Kasungu",
                                "children": [
                                    {
                                        "id": "MWI_4_9",
                                        "label": "Kasungu",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_9",
                                "label": "Ntchisi",
                                "children": [
                                    {
                                        "id": "MWI_4_10",
                                        "label": "Ntchisi",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "MWI_2_3",
                        "label": "Central-West",
                        "children": [
                            {
                                "id": "MWI_3_12",
                                "label": "Mchinji",
                                "children": [
                                    {
                                        "id": "MWI_4_13",
                                        "label": "Mchinji",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_13",
                                "label": "Lilongwe",
                                "children": [
                                    {
                                        "id": "MWI_4_14",
                                        "label": "Lilongwe City",
                                        "children": []
                                    },
                                    {
                                        "id": "MWI_4_15",
                                        "label": "Lilongwe",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_14",
                                "label": "Dedza",
                                "children": [
                                    {
                                        "id": "MWI_4_16",
                                        "label": "Dedza",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_15",
                                "label": "Ntcheu",
                                "children": [
                                    {
                                        "id": "MWI_4_17",
                                        "label": "Ntcheu",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "MWI_1_3",
                "label": "Southern",
                "children": [
                    {
                        "id": "MWI_2_4",
                        "label": "South-East",
                        "children": [
                            {
                                "id": "MWI_3_16",
                                "label": "Mangochi",
                                "children": [
                                    {
                                        "id": "MWI_4_18",
                                        "label": "Mangochi",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_17",
                                "label": "Machinga",
                                "children": [
                                    {
                                        "id": "MWI_4_19",
                                        "label": "Machinga",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_18",
                                "label": "Balaka",
                                "children": [
                                    {
                                        "id": "MWI_4_20",
                                        "label": "Balaka",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_19",
                                "label": "Zomba",
                                "children": [
                                    {
                                        "id": "MWI_4_21",
                                        "label": "Zomba City",
                                        "children": []
                                    },
                                    {
                                        "id": "MWI_4_22",
                                        "label": "Zomba",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_20",
                                "label": "Phalombe",
                                "children": [
                                    {
                                        "id": "MWI_4_23",
                                        "label": "Phalombe",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_21",
                                "label": "Mulanje",
                                "children": [
                                    {
                                        "id": "MWI_4_24",
                                        "label": "Mulanje",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "MWI_2_5",
                        "label": "South-West",
                        "children": [
                            {
                                "id": "MWI_3_22",
                                "label": "Neno",
                                "children": [
                                    {
                                        "id": "MWI_4_25",
                                        "label": "Neno",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_23",
                                "label": "Blantyre",
                                "children": [
                                    {
                                        "id": "MWI_4_26",
                                        "label": "Blantyre",
                                        "children": []
                                    },
                                    {
                                        "id": "MWI_4_29",
                                        "label": "Blantyre City",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_24",
                                "label": "Mwanza",
                                "children": [
                                    {
                                        "id": "MWI_4_27",
                                        "label": "Mwanza",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_25",
                                "label": "Chiradzulu",
                                "children": [
                                    {
                                        "id": "MWI_4_28",
                                        "label": "Chiradzulu",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_26",
                                "label": "Thyolo",
                                "children": [
                                    {
                                        "id": "MWI_4_30",
                                        "label": "Thyolo",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_27",
                                "label": "Chikwawa",
                                "children": [
                                    {
                                        "id": "MWI_4_31",
                                        "label": "Chikwawa",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "MWI_3_28",
                                "label": "Nsanje",
                                "children": [
                                    {
                                        "id": "MWI_4_32",
                                        "label": "Nsanje",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }];

const filters = [
    {
        "id": "area",
        "column_id": "area_id",
        "label": "Area",
        "options": areaOptions
    },
    {
        "id": "quarter",
        "column_id": "calendar_quarter",
        "label": "Period",
        "options": [
            {
                "id": "CY2019Q2",
                "label": "June 2019"
            },
            {
                "id": "CY2018Q3",
                "label": "September 2018"
            },
            {
                "id": "CY2016Q1",
                "label": "March 2016"
            }
        ]
    },
    {
        "id": "sex",
        "column_id": "sex",
        "label": "Sex",
        "options": [
            {
                "id": "both",
                "label": "Both"
            },
            {
                "id": "female",
                "label": "Female"
            },
            {
                "id": "male",
                "label": "Male"
            }
        ]
    },
    {
        "id": "age",
        "column_id": "age_group",
        "label": "Age",
        "options": [
            {
                "id": "00-14",
                "label": "0-14"
            },
            {
                "id": "15-49",
                "label": "15-49"
            },
            {
                "id": "50+",
                "label": "50+"
            }
        ]
    }
];

const selections = {
    colorIndicatorId: "prevalence",
    sizeIndicatorId: "population",
    detail: -1,
    selectedFilterOptions: {}
};
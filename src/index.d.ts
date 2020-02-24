declare module 'vue-modelvis' {
    import Vue from 'vue';

    class DynamicForm extends Vue {
    }

    class DynamicFormControlSection extends Vue {
    }

    class DynamicFormControlGroup extends Vue {
    }

    class DynamicFormControl extends Vue {
    }

    class DynamicFormSelect extends Vue {
    }

    class DynamicFormMultiSelect extends Vue {
    }

    class DynamicFormNumberInput extends Vue {
    }

    type Dict<V> = { [k: string]: V }

    type DynamicControlSection = {
        label: string
        description?: string
        controlGroups: DynamicControlGroup[]
    }

    type DynamicControlGroup = {
        label?: string
        controls: Control[]
    }

    type Option = {
        id: string,
        label: string,
        children?: Option[]
    }

    type DynamicControlType = "multiselect" | "select" | "number"
    type Control = SelectControl | MultiSelectControl | NumberControl

    type DynamicControl = {
        name: string,
        label?: string,
        type: DynamicControlType
        required: boolean
        helpText?: string
        value?: string | string[] | number | null
    }

    type SelectControl = DynamicControl & {
        options: Option[]
        value?: string | null
    }

    type MultiSelectControl = DynamicControl & {
        options: Option[]
        value?: string[] | string
    }

    type NumberControl = DynamicControl & {
        min?: number
        max?: number
        value?: number | null
    }

    type DynamicFormMeta = {
        controlSections: DynamicControlSection[]
    }

    type DynamicFormData = Dict<string | string[] | number | null>

    export {
        DynamicForm,
        DynamicFormControlSection,
        DynamicFormControlGroup,
        DynamicFormControl,
        DynamicFormSelect,
        DynamicFormNumberInput,
        DynamicFormMultiSelect,
        DynamicFormData,
        DynamicFormMeta
    }
}

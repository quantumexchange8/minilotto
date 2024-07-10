<script setup>
import { ref } from "vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import { CalendarIcon } from "./Icons/outline.jsx";

const props = defineProps({
    inputName: String,
    labelText: String,
    errorMessage: String,
    modelValue: [String, Date, Array],
    range: {
        type: Boolean,
        default: false,
    },
    withPresetRanges: {
        type: Boolean,
        default: false,
    },
    withTime: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const modelValue = ref(props.modelValue);

const emit = defineEmits(["update:modelValue"]);

function updateValue(value) {
    modelValue.value = value;
    emit("update:modelValue", value);
}

const setDateToday = () => {
    let date = new Date();

    date.setHours(0, 0, 0, 0);

    modelValue.value = [date];
};

const setDateYesterday = () => {
    let date = new Date();

    date.setDate(date.getDate() - 1);
    date.setHours(0, 0, 0, 0);

    modelValue.value = [date];
};

const setDateLast7Days = () => {
    let startDate = new Date();
    let currentDate = new Date();

    startDate.setDate(startDate.getDate() - 7);
    startDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    modelValue.value = [startDate, currentDate];
};

const setDateLast30Days = () => {
    let startDate = new Date();
    let currentDate = new Date();

    startDate.setDate(startDate.getDate() - 30);
    startDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    modelValue.value = [startDate, currentDate];
};

const setDateThisMonth = () => {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    firstDay.setHours(0, 0, 0, 0);
    lastDay.setHours(0, 0, 0, 0);

    modelValue.value = [firstDay, lastDay];
};

const setDateLastMonth = () => {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth(), 0);

    firstDay.setHours(0, 0, 0, 0);
    lastDay.setHours(0, 0, 0, 0);

    modelValue.value = [firstDay, lastDay];
};
</script>

<template>
    <div class="w-full">
        <InputLabel
            :value="labelText"
            :for="inputName"
            :class="[
                'mb-1',
                {
                    'text-red-1 dark:text-red-1': props.errorMessage,
                    'text-gray-6 dark:text-gray-2': !props.errorMessage,
                },
            ]"
            v-if="labelText !== ''"
        >
        </InputLabel>
        <DatePicker
            :name="props.inputName"
            :modelValue="modelValue"
            @update:modelValue="updateValue"
            dateFormat="dd/mm/yy"
            :selectionMode="props.range === true ? 'range' : 'single'"
            :manualInput="false"
            showIcon
            iconDisplay="input"
            :showTime="props.withTime"
            hourFormat="12"
            :placeholder="props.placeholder"
            :disabled="disabled"
            :pt="{
                root: {
                    class: 'w-full'
                },
                pcinput: {
                    root: {
                        class: [
                            '!w-full !min-h-[44px] !max-h-[44px] !py-3 !pl-4 !pr-10 !border dark:!bg-transparent',
                            '!rounded !text-sm !text-gray-8 dark:!text-white active:!ring-0 placeholder:!text-gray-3',
                            'dark:placeholder:!text-gray-4 !shadow-[0px_1px_2px_0px_rgba(12,17,29,0.05)]',
                            'hover:!border-blue-1 !caret-blue-1 active:!border-blue-1 focus:!border-blue-1',
                            {
                                '!border-gray-1': disabled === true,
                                '!border-gray-2 dark:!border-gray-6': disabled === false,
                                '!border-red-1 focus:!border-red-1 hover:!border-red-1': errorMessage,
                            },
                        ]

                    }
                },
                inputiconcontainer: {
                    class: '!top-[42%]'
                }
            }"
        >
            <template #inputicon>
                <CalendarIcon
                    class="w-5 h-5 text-gray-5"
                />
            </template>
        </DatePicker>
        <InputError :message="errorMessage" v-if="errorMessage" />
    </div>
</template>

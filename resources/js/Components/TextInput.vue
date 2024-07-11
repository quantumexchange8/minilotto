<script setup>
import { onMounted, ref, watch, computed } from "vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import { EyeClosedIcon, EyeIcon } from "./Icons/outline.jsx";
import { currentSelection } from '@/Composables';
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

const props = defineProps({
    inputName: String,
    modelValue: String,
    labelTextEng: {
        type: String,
        default: '',
    },
    labelTextZh: {
        type: String,
        default: '',
    },
    errorMessage: String,
    inputType: {
        type: String,
        default: "text",
    },
    rows: {
        type: Number,
        default: 1,
    },
    placeholder: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    iconPosition: {
        type: String,
        default: "",
    },
});

const {
    inputName,
    errorMessage,
    inputType,
    placeholder,
    rows,
    disabled,
} = props;

const labelText = computed(() => {
    return currentSelection.language === 'ENG' ? props.labelTextEng : props.labelTextZh;
});

const emit = defineEmits(["update:modelValue"]);

const editor = useEditor({
    content: props.modelValue,
    onUpdate: ({editor}) => {
        emit('update:modelValue', editor.getHTML())
    },
    editorProps: {
        attributes: {
            class: 'w-full border-none focus:outline-none dark:bg-transparent rounded text-gray-8 dark:text-white focus:!ring-0 placeholder:text-gray-3 dark:placeholder:text-gray-4 caret-blue-1',
        },
    },
    extensions: [
        StarterKit,
        Placeholder.configure({
            emptyEditorClass: 'cursor-text before:content-[attr(data-placeholder)]',
            placeholder: props.placeholder,
        }),
    ],
})

// const input = ref(null);

// const focus = () => input.value?.focus();

// defineExpose({
//     input,
//     focus,
// });

const showPassword = ref(false);

const toggleShow = () => {
    showPassword.value = !showPassword.value;
};

// const resizeTextarea = () => {
//     if (input.value) {
//         input.value.style.height = 'auto';
//         input.value.style.height = `${input.value.scrollHeight}px`;
//     }
// };

onMounted(() => {
    // if (input.value.hasAttribute("autofocus")) {
    //     input.value.focus();
    // }
    
    // resizeTextarea();
});

watch(() => props.modelValue, () => {
    // resizeTextarea();
});
</script>

<template>
    <div class="w-full flex flex-col gap-1">
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
        <div class="relative" v-if="inputType === 'text' || inputType === 'password'">
            <input
                :id="inputName"
                :name="inputName"
                :class="[
                    'w-full min-h-[44px] max-h-[44px] py-3 pl-4 pr-10 border dark:bg-transparent',
                    'rounded text-sm text-gray-8 dark:text-white active:ring-0 placeholder:text-gray-3',
                    'dark:placeholder:text-gray-4 shadow-[0px_1px_2px_0px_rgba(12,17,29,0.05)]',
                    'hover:border-blue-1 caret-blue-1 active:border-blue-1 focus:border-blue-1',
                    {
                        'border-gray-1': disabled === true,
                        'border-gray-2 dark:border-gray-6': disabled === false,
                        'border-red-1 focus:border-red-1 hover:border-red-1':
                            errorMessage,
                    },
                ]"
                :type="
                    inputType !== 'password'
                        ? inputType
                        : showPassword
                        ? 'text'
                        : 'password'
                "
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                ref="input"
                :autocomplete="inputType === 'password' ? 'current-password' : ''"
                :required="inputType === 'password' ? true : false"
                :disabled="disabled"
                :placeholder="placeholder"
            />
            <span
                v-if="inputType === 'password'"
                class="absolute inset-y-0 right-0 flex items-center px-4"
            >
                <button
                    type="button"
                    class="justify-center max-h-max"
                    @click="toggleShow"
                >
                    <component
                        :is="showPassword ? EyeIcon : EyeClosedIcon"
                        class="flex-shrink-0 w-5 h-5 cursor-pointer text-gray-5"
                        aria-hidden="true"
                    />
                </button>
            </span>
        </div>
        
        <EditorContent :editor="editor" v-else-if="inputType === 'textarea'" />
        <!-- <textarea
            v-else-if="inputType === 'textarea'"
            :name="inputName"
            :class="[
                'w-full border-none dark:bg-transparent',
                'rounded text-sm text-gray-8 dark:text-white focus:!ring-0 placeholder:text-gray-3',
                'dark:placeholder:text-gray-4 caret-blue-1',
            ]"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            ref="input"
            :rows="rows"
            :disabled="disabled"
            :placeholder="placeholder"
        /> -->
        <InputError :message="props.errorMessage" v-if="props.errorMessage" />
    </div>
</template>

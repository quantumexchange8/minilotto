<script setup>
import axios from 'axios';
import { ref, computed, onMounted, watch } from 'vue'
import { useForm } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import Button from '@/Components/Button.vue'
import { currentSelection } from '@/Composables'

const props = defineProps({
    errors: Object,
    selectedRecord: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['close'])

const initialValue = ref(props.selectedRecord)
const wasModified = ref(false)

const form = useForm({
    hasChanges: false,
    subject_title: props.selectedRecord.subject_title,
    message: props.selectedRecord.message,
});

const formSubmit = () => { 
    form.hasChanges = wasModified.value;

    form.put(route('records.updateRecord', props.selectedRecord.id), {
        preserveScroll: true,
        preserveState: 'errors',
        onSuccess: () => {
            form.reset();
            emit('close');
            
        },
    })
};

const requiredFields = ['subject_title', 'message'];

const isFormValid = computed(() => {
    return requiredFields.every(field => form[field]) && wasModified.value;
});

watch(() => [form.subject_title, form.message], () => {
    let subject_title_changes = form.subject_title !== initialValue.value.subject_title;
    let message_changes = form.message !== initialValue.value.message;

    wasModified.value = subject_title_changes || message_changes;
})
</script>

<template>
    <form class="flex flex-col py-5 px-4 gap-6 min-h-full max-h-screen" novalidate @submit.prevent="formSubmit">
        <div class="flex flex-col gap-6 overflow-y-auto max-h-[58vh]">
            <TextInput
                :inputName="'subject_title'"
                :inputType="'textarea'"
                :rows="1"
                :placeholder="currentSelection.language === 'ENG' ? 'Enter subject' : '輸入標題'"
                :errorMessage="form.errors ? form.errors.subject_title  : ''"
                v-model="form.subject_title"
                class="font-bold text-md"
            />
            <TextInput
                :inputName="'message'"
                :inputType="'textarea'"
                :rows="18"
                :placeholder="currentSelection.language === 'ENG' ? 'Write your message here...' : '在這裡寫下您的內容...'"
                :errorMessage="form.errors ? form.errors.message  : ''"
                v-model="form.message"
                class="text-sm"
            />
        </div>
        <div class="fixed bottom-0 left-0 right-0 flex py-5 px-4 justify-end items-center self-stretch border-t border-gray-2 dark:border-gray-7">
            <Button
                :disabled="!isFormValid"
                class="w-max"
            >
                {{ currentSelection.language === 'ENG' ? 'Save Changes' : '儲存變更' }}
            </Button>
        </div>
    </form>
</template>

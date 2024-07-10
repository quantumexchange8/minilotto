<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue'
import { Link, useForm, usePage } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import Button from '@/Components/Button.vue'
import { currentSelection } from '@/Composables'

const props = defineProps({
    errors: Object,
});

const emit = defineEmits(['close'])

const form = useForm({
    subject_title: '',
    message: '',
});

const formSubmit = () => { 
    form.post(route('records.store'), {
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
    return requiredFields.every(field => form[field]);
});

</script>

<template>
    <form class="flex flex-col py-5 px-4 gap-6 min-h-full max-h-screen" novalidate @submit.prevent="formSubmit">
        <div class="flex flex-col gap-6 overflow-y-auto max-h-[450px]">
            <TextInput
                :inputName="'subject_title'"
                :inputType="'textarea'"
                :rows="1"
                :placeholder="currentSelection.language === 'ENG' ? 'Enter subject' : '輸入標題'"
                :errorMessage="form.errors ? form.errors.subject_title  : ''"
                v-model="form.subject_title"
                class="flex-[1_0_0] font-bold text-md"
            />
            <TextInput
                :inputName="'message'"
                :inputType="'textarea'"
                :rows="18"
                :placeholder="currentSelection.language === 'ENG' ? 'Write your message here...' : '在這裡寫下您的內容...'"
                :errorMessage="form.errors ? form.errors.message  : ''"
                v-model="form.message"
                class="flex-[1_0_0] font-normal text-sm"
            />
        </div>
        <div class="fixed bottom-0 left-0 right-0 flex py-5 px-4 justify-end items-center self-stretch border-t border-gray-2 dark:border-gray-7">
            <Button
                :disabled="!isFormValid"
                class="w-max"
            >
                {{ currentSelection.language === 'ENG' ? 'Create' : '創建' }}
            </Button>
        </div>
    </form>
</template>
<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import Button from '@/Components/Button.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { currentSelection } from '@/Composables'

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div class="flex flex-col pt-10 px-4 gap-8">
            <div class="flex flex-col gap-3 items-center justify-center">
                <span class="text-gray-8 dark:text-white text-lg font-bold text-center">{{ currentSelection.language === 'ENG' ? 'Admin Log In' : '管理員登入' }}</span>
                <span class="text-gray-4 dark:text-gray-3 text-md font-normal text-center">{{ currentSelection.language === 'ENG' ? 'Welcome back! Please enter your password.' : '歡迎回來！請輸入您的密碼。' }}</span>
            </div>

            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                {{ status }}
            </div>

            <form @submit.prevent="submit">
                <div class="mt-4">
                    <TextInput
                        :inputName="'password'"
                        :labelTextEng="'Password'"
                        :labelTextZh="'密碼'"
                        :placeholder="'••••••••'"
                        :inputType="'password'"
                        :errorMessage="form.errors.password"
                        autocomplete="current-password"
                        required
                        v-model="form.password"
                    />
                </div>

                <div class="flex items-center justify-end mt-4">
                    <Button :disabled="form.processing">
                        {{ currentSelection.language === 'ENG' ? 'Log In' : '登入' }}
                    </Button>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>

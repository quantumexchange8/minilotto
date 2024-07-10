<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import Button from '@/Components/Button.vue'
import DateInput from '@/Components/Date.vue'
import { ref, onMounted, watch, computed } from 'vue'
import { useDarkMode, currentSelection } from '@/Composables'
import Modal from '@/Components/Modal.vue';
import CreateRecordForm from './Partials/CreateRecordForm.vue';
import EditRecordForm from './Partials/EditRecordForm.vue';
import { TrashIcon, NotFoundDarkIcon, NotFoundLightIcon } from '@/Components/Icons/outline.jsx';
import Toast from '@/Components/Toast.vue';

const props = defineProps({
    toastOption: {
		type: [Object, String, Array],
	}
});

const { isDarkMode } = useDarkMode();

const isDark = computed(() => {
    return isDarkMode;
});

const records = ref([]);
const createRecordFormIsOpen = ref(false);
const editRecordFormIsOpen = ref(false);
const selectedRecord = ref(null);
const deleteRecordConfirmationIsOpen = ref(false);
const isToastOpen = ref(false);
const toastOption = ref('created');

const setDateLast30Days = computed(() => {
    let last30Days = new Date();
    let currentDate = new Date();

    last30Days.setDate(last30Days.getDate() - 30);

    return [last30Days, currentDate];
});
const date_filter = ref(setDateLast30Days.value);

const getData = async (date_filter) => {
    if (date_filter.constructor === Array) {
        try {
            const recordsResponse = await axios.get(`/records/getAllRecords/`, {
                method: 'GET',
                params: {
                    date_filter: date_filter,
                }
            });
            records.value = recordsResponse.data;
            records.value.forEach(record => {
                const newDate = new Date(record.updated_at);
                record.updated_at = (newDate.getDate()  < 10 ? '0' + newDate.getDate() : newDate.getDate()) + '/' + ((newDate.getMonth() + 1) < 10 ? '0' + (newDate.getMonth() + 1) : (newDate.getMonth() + 1)) + '/' + (newDate.getFullYear() < 10 ? '0' + newDate.getFullYear() : newDate.getFullYear());
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

const showToast = (option) => {
    toastOption.value = option;
    isToastOpen.value = true;
}

const hideToast = () => {
    isToastOpen.value = false;
}

onMounted(() => {
    getData(setDateLast30Days);

    if (props.toastOption) {
        showToast(props.toastOption);
        setTimeout(() => {
            hideToast();
        }, 3000);
    }
});

const showCreateRecordForm = () => {
    createRecordFormIsOpen.value = true;
}

const hideCreateRecordForm = () => {
    createRecordFormIsOpen.value = false;
}

const showEditRecordForm = (record) => {
    selectedRecord.value = record;
    editRecordFormIsOpen.value = true;
}

const hideEditRecordForm = () => {
    editRecordFormIsOpen.value = false;
    setTimeout(() => {
        selectedRecord.value = null;
    }, 300);
}

const showDeleteRecordForm = () => {
    deleteRecordConfirmationIsOpen.value = true;

    editRecordFormIsOpen.value = false;
}

const hideDeleteRecordForm = () => {
    deleteRecordConfirmationIsOpen.value = false;
}

watch(date_filter, getData, { immediate: true });

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>
        </template>
        <Toast 
            :show="isToastOpen"
            :option="toastOption"
            :closeable="true"
            @close="hideToast"
        />

        <div class="p-4">
            <div class="flex flex-col items-center justify-center gap-5 flex-shrink-0">
                <div class="w-full flex flex-col items-center justify-center gap-3">
                    <DateInput
                        :inputName="'product_name'"
                        :placeholder="'Select date'"
                        :range="true"
                        :withPresetRanges="true"
                        :errorMessage="''"
                        class="w-full"
                        v-model="date_filter"
                    />
                    <Button
                        :type="'button'"
                        @click="showCreateRecordForm"
                    >
                        {{ currentSelection.language === 'ENG' ? 'Create New' : '創建' }}
                    </Button>
                    <Modal 
                        :title="currentSelection.language === 'ENG' ? 'New Record' : '新紀錄'"
                        :show="createRecordFormIsOpen" 
                        :closeable="true" 
                        @close="hideCreateRecordForm"
                    >
                        <CreateRecordForm @close="hideCreateRecordForm" />
                    </Modal>
                </div>
                <div class="overflow-hidden scrollbar-0 w-full flex flex-col items-center gap-3">
                    <div 
                        v-if="records.length > 0"
                        v-for="(record, index) in records" :key="index"
                        class="flex flex-col items-center self-stretch p-4 gap-1 rounded bg-gray-1 dark:bg-gray-7" 
                        @click="showEditRecordForm(record)"
                    >
                        <span class="self-stretch text-gray-4 text-xs font-normal">{{ record.updated_at }}</span>
                        <span class="self-stretch text-gray-8 dark:text-white text-sm font-bold">{{ record.subject_title }}</span>
                        <span class="break-all line-clamp-1 text-ellipsis text-gray-5 dark:text-gray-3 text-sm font-normal">{{ record.message }}</span>
                    </div>
                    <div class="w-full flex flex-col items-center justify-center gap-5" v-else>
                        <component :is="isDark ? NotFoundDarkIcon : NotFoundLightIcon"></component>
                        <span class="self-stretch text-center text-gray-4 text-xs font-normal">{{ currentSelection.language === 'ENG' ? 'No Records Found' : '暫無紀錄' }}</span>
                    </div>
                </div>
                <Modal 
                    v-if="selectedRecord"
                    :title="currentSelection.language === 'ENG' ? 'View Record' : '查看記錄'"
                    :show="editRecordFormIsOpen" 
                    :closeable="true" 
                    @close="hideEditRecordForm"
                >
                    <template #deleteOption>
                        <TrashIcon
                            class="w-4 h-4 m-2.5 text-red-1 hover:text-red-2 hover:cursor-pointer"
                            @click="showDeleteRecordForm"
                        />
                    </template>
                    <template v-if="selectedRecord">
                        <EditRecordForm :selectedRecord="selectedRecord" @close="hideEditRecordForm" />
                    </template>
                </Modal>
                <Modal 
                    :show="deleteRecordConfirmationIsOpen" 
                    :closeable="true" 
                    :deleteConfirmation="true"
                    :deleteUrl="`/records/deleteRecord/${selectedRecord.id}`"
                    :confirmationTitle="currentSelection.language === 'ENG' ? 'Delete Record' : '刪除記錄'"
                    :confirmationMessage="currentSelection.language === 'ENG' ? 'Are you sure you want to delete this record?\nThis action cannot be undone.' : '您確定要刪除此記錄嗎？此操作無法撤銷。'"
                    @close="hideDeleteRecordForm"
                    v-if="selectedRecord"
                />
            </div>
        </div>
    </AuthenticatedLayout>
</template>

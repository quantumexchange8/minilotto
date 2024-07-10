import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import PrimeVue from "primevue/config";
import preset from "../presets/primevue";
import Noir from '../presets/Noir';
import DatePicker from 'primevue/datepicker';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: Noir,
                    options: {
                        prefix: 'p',
                        darkModeSelector: '.p-dark',
                        cssLayer: false,
                    }
                }
            })
            .component('DatePicker', DatePicker)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

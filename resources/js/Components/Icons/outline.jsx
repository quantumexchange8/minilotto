import { defineComponent, computed } from "vue";

export const LanguageIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M4 5H11M9 3V5C9 9.418 6.761 13 4 13M5 9C5 11.144 7.952 12.908 11.7 13M12 20L16 11L20 20M19.1 18H12.9" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const PencilIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M13.5 6.5L17.5 10.5M4 19.9998H8L18.5 9.49981C18.7626 9.23717 18.971 8.92537 19.1131 8.58221C19.2553 8.23905 19.3284 7.87125 19.3284 
                        7.49981C19.3284 7.12838 19.2553 6.76058 19.1131 6.41742C18.971 6.07426 18.7626 5.76246 18.5 5.49981C18.2374 5.23717 17.9256 5.02883 17.5824 
                        4.88669C17.2392 4.74455 16.8714 4.67139 16.5 4.67139C16.1286 4.67139 15.7608 4.74455 15.4176 4.88669C15.0744 5.02883 14.7626 5.23717 14.5 5.49981L4 15.9998V19.9998Z" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const PlusIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M12 5V19M5 12H19" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const TrashIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 
                        20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 
                        3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const SunIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M3 12H4M12 3V4M20 12H21M12 20V21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3M17.7 17.7L18.4 18.4M6.3 17.7L5.6 18.4M8 12C8 13.0609 8.42143 14.0783 9.17157 
                        14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 
                        9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12Z" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const MoonIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M12 3.00019C12.132 3.00019 12.263 3.00019 12.393 3.00019C11.1084 4.19389 10.2826 5.80003 10.0593 7.53941C9.83602 9.27879 10.2293 11.0414 11.1708 
                        12.5209C12.1122 14.0004 13.5424 15.1032 15.2126 15.6377C16.8829 16.1721 18.6876 16.1043 20.313 15.4462C19.6878 16.9507 18.6658 18.2572 17.3562 19.2264C16.0466 
                        20.1957 14.4985 20.7912 12.8769 20.9496C11.2554 21.1079 9.62129 20.8231 8.14892 20.1256C6.67654 19.428 5.42114 18.3439 4.51661 16.9888C3.61209 15.6337 
                        3.09238 14.0585 3.01291 12.4312C2.93345 10.8038 3.29721 9.18548 4.0654 7.7487C4.83359 6.31192 5.97739 5.11061 7.37479 4.27292C8.77219 3.43523 10.3708 2.99258 12 2.99219V3.00019Z" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const CalendarIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M16 3V7M8 3V7M4 11H20M11 15H12V18M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 
                        5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const XIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M18 6L6 18M6 6L18 18" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const EyeClosedIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M21 9C18.6 11.667 15.6 13 12 13C8.4 13 5.4 11.667 3 9M3 15.0002L5.5 11.2002M21.0001 14.9762L18.5081 11.2002M9 17L9.5 13M15 17L14.5 13" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const EyeIcon = defineComponent({
    setup() {
        return () => (
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 
                        14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12Z" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <path 
                    d="M21 12C18.6 16 15.6 18 12 18C8.4 18 5.4 16 3 12C5.4 8 8.4 6 12 6C15.6 6 18.6 8 21 12Z" 
                    stroke="currentColor" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const LogoutIcon = defineComponent({
    setup() {
        return () => (
            <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"  
                stroke-width="1.5"  
                stroke-linecap="round"  
                stroke-linejoin="round"  
                class="icon icon-tabler icons-tabler-outline icon-tabler-logout"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M9 12h12l-3 -3" />
                <path d="M18 15l3 -3" />
            </svg>
        );
    },
});

// Date component

export const CircledTimesIcon = defineComponent({
    setup() {
        return () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
            >
                <rect width="16" height="16" rx="8" fill="fill-current" />
                <path
                    d="M10 6L6 10M6 6L10 10"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        );
    },
});

export const CircledArrowHeadLeftIcon = defineComponent({
    setup() {
        return () => (
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="20"
                    y="20"
                    width="20"
                    height="20"
                    rx="10"
                    transform="rotate(180 20 20)"
                    fill="fill-current"
                />
                <path
                    d="M12.917 15.8333L7.08366 9.99996L12.917 4.16663"
                    stroke="#353D45"
                    stroke-width="1.25"
                    stroke-linecap="square"
                />
            </svg>
        );
    },
});

export const CircledArrowHeadRightIcon = defineComponent({
    setup() {
        return () => (
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="20"
                    height="20"
                    rx="10"
                    transform="matrix(1 0 0 -1 0 20)"
                    fill="fill-current"
                />
                <path
                    d="M7.08301 15.8333L12.9163 9.99996L7.08301 4.16663"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="square"
                />
            </svg>
        );
    },
});

export const CircledArrowHeadUpIcon = defineComponent({
    setup() {
        return () => (
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="20"
                    height="20"
                    rx="10"
                    transform="matrix(0 -1 -1 0 20 20)"
                    fill="fill-current"
                />
                <path
                    d="M15.8337 12.9166L10.0003 7.08329L4.16699 12.9166"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="square"
                />
            </svg>
        );
    },
});

export const CircledArrowHeadDownIcon = defineComponent({
    setup() {
        return () => (
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="20"
                    width="20"
                    height="20"
                    rx="10"
                    transform="rotate(90 20 0)"
                    fill="fill-current"
                />
                <path
                    d="M15.8337 7.08337L10.0003 12.9167L4.16699 7.08337"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="square"
                />
            </svg>
        );
    },
});
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en', 'vn'],
    defaultLocale: 'vn',
    localePrefix: 'as-needed'
})
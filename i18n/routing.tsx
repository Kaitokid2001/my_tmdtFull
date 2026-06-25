import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['vn', 'en'],
    defaultLocale: 'vn',
    localePrefix: 'always'
})

export const config = {
    matcher: ['/', '(vn|en)/:path*']
}
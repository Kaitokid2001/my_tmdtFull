'use client'

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
    Select,
    Option,
} from "../styles/styleLocaleSwitcher"

export default function LocaleSwitcher(){
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const SwitchLocate = (newLocale: string) => {
        if (newLocale !== locale){
            router.replace(pathname, {locale: newLocale});
            router.refresh();
        }
    }

    return(
        <Select value={locale} onChange={e => SwitchLocate(e.target.value)}>
            <Option value="vn">VN</Option>
            <Option value="en">EN</Option>
        </Select>
    )
}
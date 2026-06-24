import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Search } from "@mui/icons-material";
import {
  Checkbox,
  NavbarMenuSearch,
  MenuCheckedSearch,
  SidebarSearch,
  SidebarSearchDiv,
  SearchFormDiv,
  SidebarSearchDivDelete,
} from "../styles/styleNavbar";

export default function SearchNavbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const t = useTranslations("navbar");
  return (
    <>
      <NavbarMenuSearch>
        <Checkbox
          type="checkbox"
          id="search-toggle"
          checked={openSearch}
          onChange={(e) => setOpenSearch(e.target.checked)}
        />
        <MenuCheckedSearch $checked={openSearch} htmlFor="search-toggle">
          {/* Ở đây bạn có thể để icon search/hamburger */}
          <Search />
        </MenuCheckedSearch>
      </NavbarMenuSearch>

      {/* Div dropdown open */}
      <SidebarSearch $open={openSearch}>
        <SidebarSearchDiv>
          <h3>{t('search.header')}</h3>
          <form>
            <SearchFormDiv>
              <Search />
              <input type="text" placeholder="Search..." />
            </SearchFormDiv>
          </form>
          <p>{t('search.title')}</p>
        </SidebarSearchDiv>
        <SidebarSearchDivDelete
          onClick={() => setOpenSearch(false)}
          title="Đóng tìm kiếm"
        />
      </SidebarSearch>
    </>
  );
}

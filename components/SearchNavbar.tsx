"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("navbar");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const searchOverlay = (
    <SidebarSearch $open={openSearch}>
      <SidebarSearchDiv>
        <h3>{t("search.header")}</h3>
        <form>
          <SearchFormDiv>
            <Search />
            <input type="text" placeholder="Search..." />
          </SearchFormDiv>
        </form>
        <p>{t("search.title")}</p>
      </SidebarSearchDiv>
      <SidebarSearchDivDelete
        onClick={() => setOpenSearch(false)}
        title="Đóng tìm kiếm"
      />
    </SidebarSearch>
  );

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
          <Search />
        </MenuCheckedSearch>
      </NavbarMenuSearch>

      {mounted && createPortal(searchOverlay, document.body)}
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";
import { RiMenuUnfold3Line, RiMenuUnfold4Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

import "@/styles/drawer.css";

export default function FixedDrawerLayout({
  children,
  title,
  navData,
  searchName,
}) {
  const [collapsed, setCollapsed] = useState(isMobile);
  const [searchParams, setSearchParam] = useSearchParams();
  const drawerRef = useRef(null);
  const navRef = useRef(null);

  const handleSearch = (searchParam) => {
    setCollapsed(true);
    //to trigger effect
    setSearchParam({});
    setTimeout(() => {
      setSearchParam({
        [searchName]: searchParam,
      });
    }, 420);
  };

  const renderDrawerNavItem = (item) => {
    return (
      <button
        className={`${
          searchParams.get(searchName) === item.searchParam
            ? "btn-on-background "
            : "btn-on-background-muted "
        } ${
          isMobile ? "mobile" : ""
        } px-4 py-3 mx-4 rounded-4 d-flex justify-content-between`}
        onClick={() => handleSearch(item.searchParam)}
      >
        {item.title}{" "}
        {searchParams.get(searchName) === item.searchParam && <FaArrowRight />}
      </button>
    );
  };

  useEffect(() => {
    //sticky drawer
    const handleScroll = () => {
      if (!drawerRef.current || !navRef.current) return;
      const drawerRect = drawerRef.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      if (drawerRect.top > 0) {
        navRef.current.style.position = "absolute";
        navRef.current.style.top = null;
        navRef.current.style.bottom = null;
      } else if (navRect.height > drawerRect.bottom) {
        navRef.current.style.position = "absolute";
        navRef.current.style.top = null;
        navRef.current.style.bottom = "0px";
      } else {
        navRef.current.style.position = "fixed";
        navRef.current.style.top = `${Math.max(drawerRect.top, 0)}px`;
        navRef.current.style.bottom = null;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [drawerRef, navRef]);

  return (
    <section ref={drawerRef} className={`drawer-layout`}>
      <div
        ref={navRef}
        className={`background drawer-nav z-1
          ${collapsed ? "drawer-nav-collapsed" : ""} 
          `}
      >
        <div
          style={{ height: 76, marginBottom: 15 }}
          className="d-flex primary-color align-items-center justify-content-center"
        >
          {title}
        </div>

        <div>
          <div className="d-flex flex-column gap-2 nav-items-container">
            {navData.map((item) => renderDrawerNavItem(item))}
          </div>
        </div>

        <button
          className={`btn-on-background ${
            isMobile ? "mobile" : ""
          } drawer-toggle`}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <RiMenuUnfold3Line /> : <RiMenuUnfold4Line />}
        </button>
      </div>
      <div
        className={`d-flex flex-column drawer-content z-0 ${
          collapsed ? "drawer-content-collapsed" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}

FixedDrawerLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  navData: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchName: PropTypes.string.isRequired,
};

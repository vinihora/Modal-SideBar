import React from "react";
import "./Sidebar.css";
import { GrClose } from "react-icons/gr";
import {
  BsCalendarFill,
  BsPeopleFill,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { HiDocument } from "react-icons/hi";
import { AiOutlineTwitter, AiOutlineBehance } from "react-icons/ai";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();

  return (
    <>
      <div className={`${isSideBarOpen ? "sidebar" : "sidebarclose"}`}>
        <div className="sidebar-header">
          <img
            src="https://react-projects-12-sidebar-modal.netlify.app/static/media/logo.2bb7da65.svg"
            alt=""
          />
          <GrClose className="close-menu-side" onClick={() => closeSideBar()} />
        </div>
        <div className="menus">
          <li>
            <ul className="row-list">
              <ImHome className="icon-menu" />
              <h3>Home</h3>
            </ul>
            <ul className="row-list">
              <BsPeopleFill className="icon-menu" />
              <h3>Teams</h3>
            </ul>
            <ul className="row-list">
              <FaFolderOpen className="icon-menu" />
              <h3>Projects</h3>
            </ul>
            <ul className="row-list">
              <BsCalendarFill className="icon-menu" />
              <h3>Calendar</h3>
            </ul>
            <ul className="row-list">
              <HiDocument className="icon-menu" />
              <h3>Documents</h3>
            </ul>
          </li>
        </div>
        <div className="social-networks">
          <BsFacebook className="icon" />
          <BsLinkedin className="icon" />
          <AiOutlineTwitter className="icon" />
          <AiOutlineBehance className="icon" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

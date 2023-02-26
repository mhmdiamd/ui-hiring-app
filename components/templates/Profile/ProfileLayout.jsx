import React from "react";
import BaseTemplate from "../base/BaseTemplate";
import style from "./ProfileLayout.module.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ProfileLayout = ({ children, leftside }) => {
  const { pathname } = useRouter();
  const initialPathName = pathname.split("/")[1];

  return (
    <BaseTemplate>
      {initialPathName != "hire" && (
        <span className={`${style.bgPurple} d-block bg-purple`}></span>
      )}
      <div
        className={`${style.profileContainer} container position-relative pt-5`}
      >
        <div className={"row"}>
          <div className={`${style.leftSide} col-4`}>{leftside}</div>
          <div className={`${style.leftSide} col-8`}>{children}</div>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default dynamic(() => Promise.resolve(ProfileLayout), { ssr: false });

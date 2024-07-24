"use client";
import React from "react";
import {IoMdArrowBack} from "@react-icons/all-files/io/IoMdArrowBack";
function BackButton() {
  return (
    <button className="back-button" onClick={() => history.back()}>
      <IoMdArrowBack />
      <p>Back</p>
    </button>
  );
}

export default BackButton;

import React from "react";

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
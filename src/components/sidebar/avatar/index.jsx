import React from "react";

import Picture from "../../../assets/me.png";

export const Avatar = () => {
  return (
    <div className="position-relative w-h100 h-w100 rounded-full border-lime-300 overflow-hidden">
      <img src={Picture} alt="avatar" className="position-absolute" />
    </div>
  );
};

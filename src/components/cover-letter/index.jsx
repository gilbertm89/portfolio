import React from "react";
import { useTranslation } from "react-i18next";

import Avatar from "../../assets/me.png";

export const CoverLetter = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="flex flex-row justify-end items-center gap-x-3">
        <div>
          <h1>Gilbert Mengana</h1>
          <h6>Ssr Frontend Developer</h6>
        </div>
        <div className="position-relative w-w100 h-h100 rounded-full border-lime-300 overflow-hidden">
          <img src={Avatar} alt="avatar" className="position-absolute" />
        </div>
      </div>
      <p className="text-justify">{t("cover")}</p>
      <i class="fa-solid fa-address-card"></i>
    </div>
  );
};

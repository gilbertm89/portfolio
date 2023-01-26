import ES from "../../../assets/icons/es.png";
import EN from "../../../assets/icons/en.png";

import { useTranslation } from "react-i18next";

export const Language = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-x-10 text-white">
      <div className="flex items-center gap-x-2">
        <img alt="es" src={ES} className="h-6 w-6" />
        <span>{t("Native")}</span>
      </div>
      <div className="flex items-center gap-x-2">
        <img alt="en" src={EN} className="h-5 w-5" />
        <span>{t("Advanced")}</span>
      </div>
    </div>
  );
};

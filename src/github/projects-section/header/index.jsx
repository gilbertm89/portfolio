import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mt-[120px] gap-y-6 text-left">
      <h3 className="text-white text-[24px] font-medium">{t("Portfolio")}</h3>
      <h2 className="text-white font-medium text-[48px] leading-[52px]">
        <span className="text-[#7ee787]">
          {t("I introduce you some of my projects.")}
        </span>
        &nbsp;
        {t(
          "These are some projects from companies where i worked and other personal to show on my portfolio."
        )}
      </h2>
    </div>
  );
};

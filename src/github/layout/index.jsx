import { Fragment } from "react";
import { ReactComponent as ContactIcon } from "../../assets/icons/address-card-solid.svg";
import { ContactSection } from "../contact-section";
import { ReactComponent as PortfolioIcon } from "../../assets/icons/briefcase-solid.svg";
import { useTranslation } from "react-i18next";
import { Header } from "../projects-section/header";
import { Card } from "../common/card";

export const Layout = () => {
  const { t } = useTranslation();

  return (
    <div className="flex px-[100px] py-[100px]">
      <div className="flex flex-col justify-center items-center gap-y-7 w-20">
        <Fragment>
          <div className="w-[3px] h-[300px] rounded-full bg-gradient-to-b from-[#6639ba] to-[#be90fb]" />
          <ContactIcon className="w-6 h-5 rounded-md shadow-3xl fill-white bg-[#472f5a]" />
          <div className="w-[3px] h-[400px] rounded-full bg-gradient-to-b from-[#c99cfc] via-[#5a6e8c] to-[#54d062]" />
        </Fragment>

        <Fragment>
          <Fragment>
            <PortfolioIcon className="w-6 h-5 rounded-md shadow-3xl fill-white bg-[#2b4a34] shadow-[#2b4a34]" />
            {/* <h3 className="absolute text-white left-[72px] top-0 text-[24px] font-medium">
              {t("Portfolio")}
            </h3> */}
          </Fragment>
          <div className="w-[3px] h-[300px] rounded-full bg-gradient-to-b from-[#54d062] to-[#11231d]" />
          {/*
          <ContactIcon className="w-6 h-5 rounded-md shadow-3xl fill-white bg-[#472f5a]" />
          <div className="w-[3px] h-[300px] rounded-full bg-gradient-to-b from-[#c99cfc] via-[#5a6e8c] to-[#54d062]" />{" "}
          */}
        </Fragment>
      </div>
      <div className="flex flex-col grow px-12">
        <ContactSection />
        <Header />
        <Card />
      </div>
    </div>
  );
};

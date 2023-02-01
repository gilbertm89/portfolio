import { useTranslation } from "react-i18next";

import { Link } from "../../components/common/link";
import { Chip } from "../common/chip";

import { ReactComponent as UserIcon } from "../../assets/icons/user-tie-solid.svg";
import { ReactComponent as BriefcaseIcon } from "../../assets/icons/briefcase-solid.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/mobile-solid.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/envelope-solid.svg";
import { ReactComponent as ReactLogo } from "../../assets/icons/react.svg";
import { ReactComponent as JavascriptLogo } from "../../assets/icons/javascript.svg";
import { ReactComponent as HtmlLogo } from "../../assets/icons/html.svg";
import { ReactComponent as CssLogo } from "../../assets/icons/css.svg";
import { ReactComponent as NextLogo } from "../../assets/icons/nextjs.svg";
import { ReactComponent as ReduxLogo } from "../../assets/icons/redux.svg";
import { ReactComponent as SagaLogo } from "../../assets/icons/saga.svg";
import { ReactComponent as TailwindLogo } from "../../assets/icons/tailwind.svg";
import { ReactComponent as MaterialUILogo } from "../../assets/icons/material.svg";
import { ReactComponent as JavaLogo } from "../../assets/icons/java.svg";
import { ReactComponent as SpringLogo } from "../../assets/icons/spring.svg";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-16">
      <div className="flex flex-col items-start gap-y-6 text-justify">
        <h1 className="text-[96px] text-white leading-[100px] font-semibold">
          {t("Hi I'm Gilbert")}
        </h1>
        <p className="text-[32px] text-[#8B949E] leading-[44px]">
          {t("cover")}
        </p>
      </div>

      <div className="relative h-[61px] w-[470px]">
        <Link href="http://localhost:3000/resume-gilbert.pdf">
          <div className="absolute left-0 border border-[#6639ba] rounded hover:shadow-2xl hover:shadow-[#6639ba] hover:border-2 py-4 px-5">
            <div className="flex justify-center items-center gap-x-3">
              <UserIcon className="w-6 h-6 fill-white" />
              <span className="text-lg text-white">
                {t("Download the resume")}
              </span>
            </div>
          </div>
        </Link>

        <div className="absolute right-0 border border-[#6639ba] rounded hover:shadow-2xl hover:shadow-[#6639ba] hover:border-2 py-4 px-5 cursor-pointer">
          <div className="flex justify-center items-center gap-x-3">
            <BriefcaseIcon className="w-6 h-6 fill-white" />
            <span className="text-lg text-white">{t("My projects")}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-x-14">
        <Link
          href="https://www.linkedin.com/in/gilbert-adrian-mengana-de-la-f%C3%A9-0ba065146/"
          className="flex justify-start items-center gap-x-1 text-[#b7bfc7]"
        >
          <LinkedInIcon className="w-7 h-7 fill-[#b7bfc7]" />
          <span className="font-semibold">LinkedIn</span>
        </Link>

        <Link
          href="https://github.com/gilbertm89"
          className="flex justify-start items-center gap-x-1 text-[#b7bfc7]"
        >
          <GithubIcon className="w-7 h-7 fill-[#b7bfc7]" />
          <span className="font-semibold">Github</span>
        </Link>

        <div className="flex justify-start items-center gap-x-1 text-[#b7bfc7] cursor-pointer">
          <EmailIcon className="w-7 h-7 fill-[#b7bfc7]" />
          <span className="font-semibold">gilbertmdlf@gmail.com</span>
        </div>

        <div className="flex justify-start items-center gap-x-1 text-[#b7bfc7] cursor-pointer">
          <PhoneIcon className="w-7 h-7 fill-[#b7bfc7]" />
          <span className="font-semibold">+59899953178</span>
        </div>
      </div>

      <div className="flex flex-col gap-y-8">
        <p className="text-[#6E7681] text-[16px] leading-[24px]">
          {t("What is magic made of")}
        </p>
        <div className="flex flex-wrap justify-start gap-x-10 gap-y-5">
          <Chip label="HTML 5" icon={<HtmlLogo />} stroke="#54d062" />
          <Chip label="CSS 3" icon={<CssLogo />} stroke="#54d062" />
          <Chip label="Javascript" icon={<JavascriptLogo />} stroke="#54d062" />
          <Chip label="ReactJS" icon={<ReactLogo />} stroke="#54d062" />
          <Chip icon={<NextLogo />} fill="#54d062" width="60px" />
          <Chip label="Redux" icon={<ReduxLogo />} fill="#54d062" />
          <Chip label="Redux-Saga" icon={<SagaLogo />} />
          <Chip label="tailwindcss" icon={<TailwindLogo />} fill="#54d062" />
          <Chip label="Material-UI" icon={<MaterialUILogo />} />
          <Chip label="Java" icon={<JavaLogo />} />
          <Chip icon={<SpringLogo />} width="75px" />
        </div>
      </div>
    </div>
  );
};

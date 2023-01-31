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

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-16">
      <div className="flex flex-col items-start gap-y-6 text-justify">
        <h1 className="text-[96px] text-white leading-[100px] font-semibold">
          {t("I am Gilbert")}
        </h1>
        <p className="text-[32px] text-[#8B949E] leading-[44px]">
          {t("cover")}
        </p>
      </div>

      <div className="flex justify-start gap-x-6">
        <Link href="http://localhost:3000/resume-gilbert.pdf">
          <div className="border border-[#6639ba] rounded hover:shadow-2xl hover:shadow-[#6639ba] hover:border-2 py-4 px-5">
            <div className="flex justify-center items-center gap-x-3">
              <UserIcon className="w-6 h-6 fill-white" />
              <span className="text-lg text-white">
                {t("Download the resume")}
              </span>
            </div>
          </div>
        </Link>
        <div className="border border-[#6639ba] rounded hover:shadow-2xl hover:shadow-[#6639ba] hover:border-2 py-4 px-5 cursor-pointer">
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

      <div className="flex flex-col gap-y-10">
        <p className="text-[#6E7681] text-[16px] leading-[24px]">
          {t("What magic is made with")}
        </p>
        <div className="flex justify-start gap-x-10">
          <Chip label="HTML 5" icon={<HtmlLogo />} />
          <Chip label="CSS 3" icon={<CssLogo />} />
          <Chip label="Javascript" icon={<JavascriptLogo />} />
          <Chip label="ReactJS" icon={<ReactLogo />} />
        </div>
      </div>
    </div>
  );
};

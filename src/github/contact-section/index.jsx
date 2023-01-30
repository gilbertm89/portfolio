import { useTranslation } from "react-i18next";
import { Link } from "../../components/common/link";

import { ReactComponent as UserIcon } from "../../assets/icons/user-tie-solid.svg";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start gap-y-6 text-justify">
      <h1 className="text-[96px] text-white leading-[100px] font-semibold">
        {t("I am Gilbert")}
      </h1>
      <p className="text-[32px] text-[#8B949E] leading-[44px]">{t("cover")}</p>

      <div className="flex justify-start mt-10">
        <Link href="http://localhost:3000/resume-gilbert.pdf">
          <div className="border border-[#6639ba] rounded hover:shadow-2xl hover:shadow-[#6639ba] hover:border-2 w-full py-4 px-5">
            <div className="flex justify-center items-center gap-x-3">
              <UserIcon className="w-6 h-6 fill-white" />
              <span className="text-lg text-white">
                {t("Download the resume")}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

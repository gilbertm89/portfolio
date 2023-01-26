import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-headergray p-8 flex flex-col gap-y-4 justify-start">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold">
          {"Gilbert Adrian Mengana de la Fé"}
        </h1>
        <h6 className="text-md font-bold">Ssr Frontend Developer</h6>
      </div>
      <div>
        <p className="text-justify text-md">{t("cover")}</p>
      </div>
    </div>
  );
};

/*<div className="flex flex-row justify-between items-center">
      <div className="inline-flex gap-x-2 items-center cursor-pointer">
        <EmailIcon className="h-6 w-6" />
        <span>gilbertmdlf@gmail.com</span>
      </div>
      <div className="flex flex-row justify-end gap-x-4">
        <div>Works</div>
        <a
          className="inline-flex gap-x-2 items-center cursor-pointer"
          href="http://localhost:3000/resume-gilbert.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
          <ResumeIcon className="h-6 w-6" />
        </a>
        <div>Shelf</div>
      </div>
    </div> */

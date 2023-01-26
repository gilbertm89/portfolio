import React from "react";
import { ReactComponent as LinkedinIcon } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../../assets/icons/github.svg";
import { Link } from "../../common/link";
import { ReactComponent as EmailIcon } from "../../../assets/icons/envelope-solid.svg";
import { ReactComponent as CellIcon } from "../../../assets/icons/mobile-solid.svg";

const icons = "h-6 w-6 fill-white";
const row = "flex flex-row gap-x-3 items-center";
const span = "truncate w-w200";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-y-6 text-white">
      <div className={row}>
        <EmailIcon className={icons} />
        <span className={span}>{"gilbertmdlf@gmail.com"}</span>
      </div>
      <div className={row}>
        <CellIcon className={icons} />
        <span className={span}>{"+59899953178"}</span>
      </div>

      <Link
        href="https://www.linkedin.com/in/gilbert-adrian-mengana-de-la-f%C3%A9-0ba065146/"
        className={row}
      >
        <LinkedinIcon className={icons} />
        <span className={span}>
          {
            "https://www.linkedin.com/in/gilbert-adrian-mengana-de-la-f%C3%A9-0ba065146/"
          }
        </span>
      </Link>

      <Link href="https://github.com/gilbertm89" className={row}>
        <GithubIcon className={icons} />
        <span className={span}>{"https://github.com/gilbertm89"}</span>
      </Link>
    </div>
  );
};

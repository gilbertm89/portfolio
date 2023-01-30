import { ReactComponent as ContactIcon } from "../../assets/icons/address-card-solid.svg";
import { ContactSection } from "../contact-section";

export const Layout = () => {
  return (
    <div className="flex px-[100px] py-[100px]">
      <div className="flex flex-col justify-center items-center gap-y-7 w-20">
        <div className="w-[3px] h-[300px] rounded-full bg-gradient-to-b from-[#6639ba] to-[#be90fb]" />
        <ContactIcon className="w-6 h-5 rounded-md shadow-3xl fill-white bg-[#472f5a]" />
        <div className="w-[3px] h-[300px] rounded-full bg-gradient-to-b from-[#c99cfc] via-[#5a6e8c] to-[#54d062]" />
      </div>
      <div className="flex grow px-12">
        <ContactSection />
      </div>
    </div>
  );
};

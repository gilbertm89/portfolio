import { Link } from "../../components/common/link";
import { Gallery } from "./gallery";

const assets = [
  {
    src: require("../../assets/todobienes/todobienes.png"),
    id: 1,
    alt: "todobienes",
  },
  {
    src: require("../../assets/todobienes/crestate.png"),
    id: 2,
    alt: "crestate",
  },
  {
    src: require("../../assets/todobienes/advertise.png"),
    id: 3,
    alt: "advertise",
  },
];

export const Todobienes = () => {
  return (
    <div className="flex justify-end gap-x-6">
      <div className="flew flex-col basis-1/2 p-14 items-center">
        <p className="text-[24px] text-[#EBF5FF80] text-justify font-medium leading-[32px]">
          <span className="text-white">Todobienes.</span>
          <br />
          <br /> Professional platform specialized in searching the real estate
          market. Formed by three different websites one for commercial
          properties, another for residential properties and other where the
          brokers can post and manage the properties.
        </p>
        <div className="mt-8">
          <Link href="https://www.todobienes.com/">
            <span className="text-[20px] text-white">{"Go to website"}</span>
          </Link>
        </div>
      </div>
      <div className="basis-1/2">
        <Gallery assets={assets} />
      </div>
    </div>
  );
};

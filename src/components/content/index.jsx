import { Button } from "../common/button";
import { ReactComponent as Resume } from "../../assets/icons/address-card-solid.svg";

export const Content = () => {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-8 px-10 py-16">
      <Button icon={<Resume />} label={"Download resume"} />
      {/* <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button> */}
    </div>
  );
};

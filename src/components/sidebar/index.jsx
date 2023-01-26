import React from "react";
import { Avatar } from "./avatar";
import { Contact } from "./contact/contact";
import { Divider } from "./divider";

export const Sidebar = () => {
  return (
    <div className="bg-darkgreen h-h100vh flex flex-col py-8 items-center gap-y-4">
      <Avatar />
      <Contact />
      <Divider className="my-6" />
    </div>
  );
};

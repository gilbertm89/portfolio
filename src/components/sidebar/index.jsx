import React from "react";
import { Avatar } from "./avatar";
import { Contact } from "./contact/contact";
import { Divider } from "./divider";
import { Language } from "./language";

export const Sidebar = () => {
  return (
    <div className="bg-darkgreen h-h100vh flex flex-col py-8 items-center gap-y-4">
      <Avatar />
      <Contact />
      <Divider className="my-6" />
      <Language />
    </div>
  );
};

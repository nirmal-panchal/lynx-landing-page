"use client";
import {
  Image,
  MessageSquare,
  PanelsTopLeft,
  Plus,
  UsersRound,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-24 bg-[#F5F7FB] h-screen flex flex-col items-center">
      <div className="py-8">
        <PanelsTopLeft size={24} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="p-2.5 w-fit">
          <div className="rounded-full p-2.5 bg-[#305EFF]">
            <Plus size={16} color="white" />
          </div>
        </div>
        <div className="px-2.5 bg-[#5379FF2E]">
          <div className="p-2.5 gap-1 flex flex-col items-center justify-center">
            <Image size={16} />
            <span className="font-medium text-sm">Mr.Lynx</span>
          </div>
        </div>
        <div className="px-2.5">
          <div className="p-2.5 gap-1 flex flex-col items-center justify-center">
            <MessageSquare size={16} />
            <span className="font-medium text-sm">Chats</span>
          </div>
        </div>
        <div className="px-2.5">
          <div className="p-2.5 gap-1 flex flex-col items-center justify-center">
            <UsersRound size={16} />
            <span className="font-medium text-sm">Groups</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

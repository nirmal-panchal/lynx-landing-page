"use client";
import React from "react";
import MainIcon from "./mainIcon";
import {
  SearchIcon,
  SparklesIcon,
  MicIcon,
  SendIcon,
  Box,
} from "@razorpay/blade/components";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <MainIcon />
      <h1 className="font-semibold text-[40px] leading-[46px] mb-8">
        {" "}
        Hey, Let me help you find the perfect expert!
      </h1>
      <div className="w-full max-w-[720px] border border-[#B1C1D2] rounded-full relative">
        <SearchIcon
          size="large"
          position="absolute"
          left="spacing.7"
          top="spacing.6"
          color="surface.icon.gray.subtle"
        />
        <MicIcon
          size="large"
          position="absolute"
          right="60px"
          top="spacing.6"
          color="surface.icon.gray.subtle"
        />
        <SendIcon
          size="large"
          position="absolute"
          right="spacing.7"
          top="spacing.6"
          color="interactive.icon.primary.normal"
        />
        <input
          type="text"
          placeholder="Search or ask anything from Mr. Lynx"
          className="w-full border border-[#B1C1D2] py-[18px] bg-[#F1F5FA] pl-[52px] rounded-full placeholder:text-[#768EA7]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
        <Box
          borderColor="surface.border.primary.muted"
          maxWidth="232px"
          gap="25px"
          display="flex"
          flexDirection="column"
          borderWidth="thick"
          padding="18px"
          borderRadius="large"
        >
          <SparklesIcon color="surface.icon.primary.normal" />
          How do I connect with potential investors for my EV startup?
        </Box>
        <Box
          borderColor="surface.border.primary.muted"
          maxWidth="232px"
          gap="25px"
          display="flex"
          flexDirection="column"
          borderWidth="thick"
          padding="18px"
          borderRadius="large"
        >
          <SparklesIcon color="surface.icon.primary.normal" />
          How do I connect with potential investors for my EV startup?
        </Box>
        <Box
          borderColor="surface.border.primary.muted"
          maxWidth="232px"
          gap="25px"
          display="flex"
          flexDirection="column"
          borderWidth="thick"
          padding="18px"
          borderRadius="large"
        >
          <SparklesIcon color="surface.icon.primary.normal" />
          How do I connect with potential investors for my EV startup?
        </Box>
        <Box
          borderColor="surface.border.primary.muted"
          maxWidth="232px"
          gap="25px"
          display="flex"
          flexDirection="column"
          borderWidth="thick"
          padding="18px"
          borderRadius="large"
        >
          <SparklesIcon color="surface.icon.primary.normal" />
          How do I connect with potential investors for my EV startup?
        </Box>
      </div>
    </div>
  );
};

export default Landing;

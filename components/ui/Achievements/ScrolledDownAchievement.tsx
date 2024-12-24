"use client";
import React from "react";
import Achievement from "@/components/ui/Achievements/Achievement";
import { AchievementType } from "@/components/ui/Achievements/Achievement";
interface IScrolledDownAchievement {
  title?: string;
  description?: string;
  // duration of achievement in ms
  duration?: number;
}

const ScrolledDownAchievement = (
  { title, description, duration }: IScrolledDownAchievement,
) => {
  return (
    <Achievement
      onShow={() => (
        (window.innerHeight + Math.round(window.scrollY)) >=
          document.body.offsetHeight
      )}
      title={title}
      duration={duration}
      imageSource={"https://steamuserimages-a.akamaihd.net/ugc/576736399930252495/C071E065DFBE4DDD1F82AE7B9FE5FC979BED7FFD/"}
      description={description}
    />
  );
};

export default ScrolledDownAchievement;

import React from "react";
import { BaseContent } from "./BaseContent";
import image1 from "../../assets/images/1.png";

export const Content1 = () => {
  return (
    <BaseContent id="content-1"
      imagePosition="right"
      width="100%"
      tag="get started"
      contentCount="01"
      contentTitle="what level of hiker are you?"
      content="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
      buttonLabel="read more"
      imageUrl={image1}
    />
  );
};

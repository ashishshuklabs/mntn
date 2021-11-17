import React from "react";
import { BaseContent } from "./BaseContent";
import image3 from "../../assets/images/3.png";

export const Content3 = () => {
  return (
    <BaseContent
      imagePosition="right"
      width="100%"
      tag="where you go is the key"
      contentCount="03"
      contentTitle="Understand Your Map & Timing"
      content="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
      buttonLabel="read more"
      imageUrl={image3}
    />
  );
};

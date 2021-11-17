import React from "react";
import { BaseContent } from "./BaseContent";
import image2 from "../../assets/images/2.png";

export const Content2 = () => {
  return (
    <BaseContent
      imagePosition="left"
      width="100%"
      tag="hiking essentials"
      contentCount="02"
      contentTitle="Picking the right Hiking Gear!"
      content="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
          Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
      buttonLabel="read more"
      imageUrl={image2}
    />
  );
};

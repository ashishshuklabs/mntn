import styled from "styled-components";
import mg from "../../../assets/images/MG.png";
import hg from "../../../assets/images/HG.png";
import vg from "../../../assets/images/VG.png";
import bgContent from "../../../assets/images/BG-Content.png";
import { TagWithLine } from "../../tag/TagWithLine";
import { Button } from "../../form/button/Button";
import { DownArrow } from "../../icon/DownArrow";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
export const HeroSection = () => {
  const contentRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [windowScroll, setWindowScroll] = useState<null | number>(null);
  const [scrollValue, setScrollValue] = useState({
    bannerScrollY: 0,
    mgScrollY: 0,
    vgScrollY: 0,
    hgScrollY: 0,
    bannerOpacity: 1,
  });

  useLayoutEffect(() => {
    contentRef.current = document.querySelector<HTMLElement>("#content-1"); //This is for button click event, just so something happens onClick.
    containerRef.current = document.querySelector<HTMLElement>("header"); //Needed for calculating scrolling bounds
    setWindowScroll(window.pageYOffset); //Initialize
    //attach to the scroll event right after layout setup, before loading page
    const onScroll = (): void => {
      const scroll = window.pageYOffset; //scroll value
      setWindowScroll(scroll);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scroll = windowScroll ? windowScroll : 0; //scroll value
      const containerHeight =
        containerRef.current?.getBoundingClientRect().height;
      //trigger only when within the container bounds
      if (scroll && containerHeight && scroll < containerHeight) {
        setScrollValue({
          bannerScrollY: -(scroll * 6.25) / 100,
          mgScrollY: -(scroll * 6.25) / (2 * 100),
          vgScrollY: -(scroll * 6.25) / (3 * 100),
          hgScrollY: -(scroll * 6.25) / 100,
          bannerOpacity: 1 - scroll / containerHeight,
        });
      }
    };
    onScroll();
  }, [windowScroll]);
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Banner
        style={{
          transform: `translateY(${scrollValue.bannerScrollY}%)`,
          opacity: `${scrollValue.bannerOpacity}`,
        }}
      >
        <div className="header-tag">
          <TagWithLine title="a hiking guide" />
        </div>
        <h1 className="title">Be prepared for the Mountains and beyond!</h1>
        <div className="btn-wrapper">
          <Button
            onClick={onClick}
            withIcon
            title="scroll down"
            color="tertiary"
            svgIcon={
              <DownArrow
                style={{ marginTop: ".3rem", width: "1rem", height: "1rem" }}
                color="tertiary"
              />
            }
          />
        </div>
      </Banner>
      <img
        style={{ transform: `translateY(${scrollValue.mgScrollY}%)` }}
        className="mg"
        src={mg}
        alt="mg"
      />
      <img
        style={{ transform: `translateY(${scrollValue.hgScrollY}%)` }}
        className="hg"
        src={hg}
        alt="hg"
      />
      <img
        style={{ transform: `translateY(${scrollValue.vgScrollY}%)` }}
        className="vg"
        src={vg}
        alt="vg"
      />
      <img className="bg-content" src={bgContent} alt="break" />
      <div className="hero-gradient"></div>
    </Container>
  );
};
const Banner = styled.div`
  position: fixed;
  top: 25%;
  max-width: 120rem;
  width: 100%;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .header-tag {
    width: 100%;
    padding: 0 25%;
  }
  .title {
    color: white;
    flex-wrap: wrap;
    padding: 0 25%;
    @media (max-width: 991px) {
      font-size: 4rem;
    }
    @media (max-width: 767px) {
      font-size: 3.5rem;
    }
  }
  .btn-wrapper {
    width: 100%;
    margin: 0 25%;
  }
`;
const Container = styled.header`
  background: linear-gradient(
    330.24deg,
    rgba(11, 29, 38, 0) 31.06%,
    #0b1d26 108.93%
  );
  position: relative;
  height: 100%;
  img {
    position: absolute;
    width: 100%;
  }
  .hero-gradient {
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    opacity: 0.6;
    background-image: linear-gradient(135deg, #0b1d26, transparent 87%);
    width: 100%;
    height: 100vh;
  }
  .hg {
    top: 0rem;
    left: 0%;
    height: 70rem;
  }
  .mg {
    top: 29rem;
    left: 0%;
    z-index: 1;
    height: 89rem;
    /* object-fit: scale-down; */
  }

  .vg {
    top: 48rem;
    left: 0%;
    height: 58rem;
    z-index: 50;
    /* object-fit: scale-down; */
    object-fit: cover;
  }
  .bg-content {
    position: absolute;
    top: 75rem;
    left: 0;
    height: 43rem;
    z-index: 50;
    background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 61.38%);
  }
`;

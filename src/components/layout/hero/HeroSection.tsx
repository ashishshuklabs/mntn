import styled from "styled-components";
import mg from "../../../assets/images/MG.png";
import hg from "../../../assets/images/HG.png";
import vg from "../../../assets/images/VG.png";
import bgContent from "../../../assets/images/BG-Content.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { TagWithLine } from "../../tag/TagWithLine";
import { Button } from "../../form/button/Button";
import { DownArrow } from "../../icon/DownArrow";

export const HeroSection = () => {
  const { scrollYProgress } = useViewportScroll();
  const hgY = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-60%"]);
  const mgY = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-30%"]);
  const vgY = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-10%"]);
  const bannerY = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-60%"]);
  const bannerOpacity = useTransform(scrollYProgress, [0.1, 0.5], ["1", "0"]);

  return (
    <Container>
      <Banner style={{ y: bannerY, opacity: bannerOpacity }}>
        <div className="header-tag">
          <TagWithLine title="a hiking guide" />
        </div>
        <h1 className="title">Be prepared for the Mountains and beyond!</h1>
        <div className="btn-wrapper">
          <Button
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
      <motion.img style={{ y: mgY }} className="mg" src={mg} alt="mg" />
      <motion.img style={{ y: hgY }} className="hg" src={hg} alt="hg" />
      <motion.img style={{ y: vgY }} className="vg" src={vg} alt="vg" />
      <img className="bg-content" src={bgContent} alt="break" />
      <div className="hero-gradient"></div>
    </Container>
  );
};
const Banner = styled(motion.div)`
  position: fixed;
  top: 25%;
  max-width: 120rem;
  width: 100%;
  z-index: -500;
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
    padding: 0 25%;
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
    object-fit: cover;
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
    top: 0%;
    left: 0%;
    height: 70rem;
  }
  .mg {
    top: 29rem;
    left: 0%;
    z-index: 1;
    height: 89rem;
  }

  .vg {
    top: 48rem;
    left: 0%;
    height: 58rem;
    z-index: 50;
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

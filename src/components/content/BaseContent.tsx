import styled from "styled-components";
import { Button } from "../form/button/Button";
import { TagWithLine } from "../tag/TagWithLine";
import { RightArrow } from "../icon/RightArrow";
interface ContentProps {
  imagePosition: "left" | "right";
  width: string;
  content: string;
  buttonLabel: string;
  imageUrl: string;
  tag: string;
  contentTitle: string;
  contentCount: string;
}
export const BaseContent = (props: ContentProps) => {
  const {
    width,
    imagePosition,
    content,
    buttonLabel,
    imageUrl,
    tag,
    contentTitle,
    contentCount,
  } = props;
  const Content = () => (
    <ContentWrapper colors="secondary">
      <div className="number">{contentCount}</div>
      <div className="content">
        <TagWithLine title={tag} />
        <h2 className="title">{contentTitle}</h2>
        <p className="description">{content}</p>
        <Button
          withIcon
          title={buttonLabel}
          color="secondary"
          svgIcon={
            <RightArrow
              style={{ marginTop: ".3rem", width: "1rem", height: "1rem" }}
              color="secondary"
            />
          }
        />
      </div>
    </ContentWrapper>
  );
  return (
    <Container>
      <GridWrapper>
        {imagePosition === "right" ? (
          <>
            <Content />
            <Image src={imageUrl} />
          </>
        ) : (
          <>
            <Image src={imageUrl} />
            <Content />
          </>
        )}
      </GridWrapper>
    </Container>
  );
};
const Container = styled.div`
  max-width: 90%;
  margin-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;

  @media (max-width: 991px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
  }
`;
const ContentWrapper = styled.article<{ colors: "primary" | "secondary" }>`
  background-color: inherit;
  color: white;
  font-size: 1rem;
  position: relative;

  width: 100%;
  .content {
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 991px) {
      align-items: center;
      justify-content: center;
    }
  }
  .number {
    position: absolute;
    left: -100px;
    top: 5%;
    opacity: 0.1;
    color: white;
    font-size: 15rem;
    font-weight: bold;
    @media (max-width: 991px) {
      left: 0;
    }
  }
  .title {
    flex-wrap: wrap;
    @media (max-width: 767px) {
      font-size: 3rem;
    }
  }
  .description {
    font-size: 1.125rem;
  }
  .icon {
    color: var(--ds-button-color-secondary);
  }
  @media (max-width: 991px) {
    order: 1;
  }
`;
const Image = styled.img`
  width: 470px;
  height: 680px;
  margin: 0 auto;
`;

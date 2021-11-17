import styled from "styled-components";

interface TagWithLineProps {
  title: string;
}
export const TagWithLine = (props: TagWithLineProps) => {
  return (
    <TagWrapper>
      <div className="tag">
        <div className="tag-line"></div>
        <h5 className="tag-heading">{props.title}</h5>
      </div>
    </TagWrapper>
  );
};
const TagWrapper = styled.div`
  .tag {
    display: flex;
    .tag-line {
      width: 4.5rem;
      border-bottom: 2px solid var(--ds-button-color-primary);
      height: 2px;
      margin-top: 0.65rem;
      margin-right: 1.5rem;
    }
    .tag-heading {
      text-transform: uppercase;
      font-size: 1.125rem;
      color: var(--ds-button-color-primary);
      flex-wrap: wrap;
    }
  }
  @media (max-width: 991px) {
    align-self: flex-start;
  }
`;

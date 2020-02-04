import styled from "styled-components";

export const CollectionPreviewContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 400px) {
    margin-left: -20px;
  }
`;

export const CollectionPreviewTitleStyles = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const CollectionPreviewStyles = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

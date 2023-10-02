import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const CategoryPreviewTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
  border-bottom: 1px solid darkgrey;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;
`;

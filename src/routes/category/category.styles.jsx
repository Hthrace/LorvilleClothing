import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
  border-bottom: 1px solid darkgrey;
`;
export const CategoryProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;
  margin-right: 200px;
  margin-left: 200px;

  @media screen and (max-width: 600px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`;

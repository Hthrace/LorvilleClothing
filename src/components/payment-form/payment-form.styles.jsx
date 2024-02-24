import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 600px) {
    height: 100px;
    min-width: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
`;

export const PaymentBtn = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 0px;
    margin-right: 0px;
    margin-left: 0px;
  }
`;

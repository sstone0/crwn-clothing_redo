import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 30px;
    background: #e9e9e9;
    padding: 1rem;
    border-radius: 5px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    button {
      width: calc(50% - 15px);
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

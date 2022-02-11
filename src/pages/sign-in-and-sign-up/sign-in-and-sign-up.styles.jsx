import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    padding: 0 15px;
  }
`;

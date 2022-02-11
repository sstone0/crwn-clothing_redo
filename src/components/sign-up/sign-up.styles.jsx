import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    background: #e9e9e9;
    padding: 1rem;
    border-radius: 5px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

import styled, { css } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  button[data-testid="rk-connect-button"] {
    /* Add your styles here */
    background-color: #ff007a;
    color: white;
    font-family: "Roboto Mono", monospace;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
  }
`;

export const LogoStyle = styled.div`
  color: #00E599;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  cursor: pointer;
  .img {
    width: 20px;
    height: auto;
  }
`;
export const ConnectButtonStyle = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 1.25rem;
  background: #00E599;
  font-weight: 600;
  font-size: 1rem;
  margin-left: -100px
`;

export const BodyStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  .cont {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .top {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-right: 0.75rem;
    .tablinks {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .setting {
      background: transparent;
    }
  }
  .cont {
    width: 95%;
  }

  @media (min-width: 500px) {
    .cont {
      width: 80%;
    }
    .top .tablinks {
      gap: 0.75rem;
    }
      @media (min-width: 767px) {
    .cont {
      width: 60%;
    }

    @media (min-width: 998px) {
    .cont {
      width: 40%;
    }
  }
`;

interface ITabLinkStyle {
  $isSelected: boolean;
}
export const TabLinkStyle = styled.button<ITabLinkStyle>`
  background: transparent;
  width: 80px;
  height: 35px;
  font-size: 1rem;
  border-radius: 1.25rem;
  color: rgb(155, 155, 155);
  ${(props) =>
    props.$isSelected &&
    css`
      background: rgb(27, 27, 27);
      color: #fff;
    `}
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 500px) {
    width: 70px;
    height: 30px;
  }
`;

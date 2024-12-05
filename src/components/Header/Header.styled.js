import styled from "@emotion/styled";

export const Headers = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background-color: var(--system-default-10);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media screen and (min-width: 1920px) {
  }
`;

export const HeaderNavMenu = styled.a`
  @media screen and (min-width: 1440px) {
    position: relative;
    color: var(--typography-bluedark);
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;

    &:hover::after,
    &:focus::after,
    &.active::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: var(--typography-bluedark, #1b3641);
    }
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const HeaderAddress = styled.a`
  display: flex;
  min-width: 156px;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  background: var(--background-bluedark);
  border-radius: 16px;
  color: var(--typography-white);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  transition: all 0.3s linear;

  &:hover,
  &:focus {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  @media screen and (min-width: 768px) {
    min-width: 161px;
    font-size: 15px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    min-width: 193px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    min-width: 260px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SvgMobileHeader = styled.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`;

export const ButtonMobileHeader = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;

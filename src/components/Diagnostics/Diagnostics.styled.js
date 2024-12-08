import styled from "@emotion/styled";

export const StyledSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const ImgSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: 40px;
  }
`;

export const MentorstvoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 688px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 628px;
    height: 324px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    height: 468px;
    align-items: flex-start;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    width: 332px;
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
    height: 316px;
  }

  @media screen and (min-width: 1920px) {
    gap: 16px;
    width: 828px;
    height: 392px;
    padding: 40px;
  }
`;

export const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
  color: var(--typography-black);

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 48px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 16px;
  }
`;

export const TitleH3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const TitleH3White = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media screen and (min-width: 1440px) {
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  &:not(:first-of-type) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;
    margin-bottom: 40px;

    &:not(:first-of-type) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    max-width: 828px;
    line-height: 28px;
  }
`;

export const StyledMentorButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 24px;
  color: var(--typography-bluedark);
  height: 56px;
  border-radius: 16px;
  background-color: var(--background-white);
  border: 1px solid var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  &:hover,
  &:focus {
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
    margin-bottom: 16px;
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 80px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 24px; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ForWHoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
    width: 332px;
    gap: 16px;
    height: 492px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
    height: 316px;
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    width: 828px;
    height: 392px;
    padding: 40px;
    gap: 24px;
    flex: 1 0 0;
  }
`;

export const StyledAboutUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const StyledForWhoUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  gap: 4px;
  width: auto;

  &::before {
    content: "\\2022";
    color: var(--primary-bluedark);
    display: inline-block;
    margin-left: 4px;
  }
`;

export const StyledLiWhite = styled.li`
  display: flex;
  gap: 8px;
  width: auto;

  &::before {
    content: "\\2022";
    display: inline-block;
    margin-left: 4px;
    color: var(--typography-white);
  }
`;

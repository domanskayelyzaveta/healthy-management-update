import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import diagnostics_1920 from "../../images/desktop/diagnostics_1920.webp";
import diagnostics_19202x from "../../images/desktop/diagnostics_1920@2x.webp";
import mobDiagnostics from "../../images/mobile/mob_diagnostics.webp";
import mobDiagnostics2x from "../../images/mobile/mob_diagnostics@2x.webp";
import diagnosticsTablet from "../../images/tablet/diagnostics_768.webp";
import diagnosticsTablet2x from "../../images/tablet/diagnostics_768@2x.webp";
import diagnostics_1440 from "../../images/desktop1440/diagnostics_1440.webp";
import diagnostics_14402x from "../../images/desktop1440/diagnostics_1440@2x.webp";

import {
  AboutWrapper,
  DescriptionWrapper,
  ForWHoWrapper,
  ImgSectionWrapper,
  MentorstvoWrapper,
  Paragraph,
  StyledAboutUl,
  StyledForWhoUl,
  StyledLi,
  StyledLiWhite,
  StyledMentorButton,
  StyledSection,
  TitleH2,
  TitleH3,
  TitleH3White,
} from "./Diagnostics.styled";

const Diagnostics = ({ handleSetLink }) => {
  return (
    <StyledSection id="diagnostics" className="container">
      <ImgSectionWrapper>
        <MediaQuery minWidth={1920}>
          <img
            srcSet={`${diagnostics_1920} 1x, ${diagnostics_19202x} 2x`}
            sizes="(min-width: 1920px) 1920px"
            src={diagnostics_1920}
            alt="Ольга Поліщук - ваш ментор в медичній галузі"
            loading="lazy"
          />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <img
            srcSet={`${mobDiagnostics} 1x, ${mobDiagnostics2x} 2x`}
            sizes="(max-width: 767px) 100vw"
            src={mobDiagnostics}
            alt="Ольга Поліщук - ваш ментор в медичній галузі"
            loading="lazy"
          />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1439}>
          <img
            srcSet={`${diagnosticsTablet} 1x, ${diagnosticsTablet2x} 2x`}
            sizes="(min-width: 768px) 768px"
            src={diagnosticsTablet}
            alt="Ольга Поліщук - ваш ментор в медичній галузі"
            loading="lazy"
          />
        </MediaQuery>
        <MediaQuery minWidth={1440} maxWidth={1919}>
          <img
            srcSet={`${diagnostics_1440} 1x, ${diagnostics_14402x} 2x`}
            sizes="(min-width: 1440px) 100vw (max-width: 1919px) 100vw"
            src={diagnostics_1440}
            alt="Ольга Поліщук - ваш ментор в медичній галузі"
            loading="lazy"
          />
        </MediaQuery>
        <MentorstvoWrapper>
          <TitleH2>Діагностика</TitleH2>
          <Paragraph>
            <b>Діагностика бізнес-процесів медичних бізнесів</b> - визначити
            поточний стан в точці «А», зрозуміти свої сильні та слабкі сторони,
            почути іншу думку, зрозуміти чи правильно обраний вектор розвитку,
            отримати поради з питань менеджменту, сервісу, внутрішніх
            комунікацій і медичного маркетингу
          </Paragraph>
          <StyledMentorButton
            onClick={(e) => handleSetLink("contact", e)}
            href="#contact"
            aria-label="Scroll to contacts form to have more info"
          >
            Дізнатися вартість
          </StyledMentorButton>
        </MentorstvoWrapper>
      </ImgSectionWrapper>
      <DescriptionWrapper>
        <AboutWrapper>
          <TitleH3>Процеси діагностики</TitleH3>
          <StyledAboutUl>
            <StyledLi>
              Аналіз поточних інструментів просування медичного закладу, клініки
            </StyledLi>
            <StyledLi>Аналіз портфелю послуг та продажів</StyledLi>
            <StyledLi>Аналіз шляху клієнта та клієнтської бази</StyledLi>
            <StyledLi>Аналіз роботи підрядників</StyledLi>
            <StyledLi>
              Аналіз сервісу: роботи контакт-центру та адміністраторів,
              комунікації з пацієнтами
            </StyledLi>
            <StyledLi>Аналіз роботи з МІС</StyledLi>
            <StyledLi>Аналіз організаційної структури</StyledLi>
            <StyledLi>
              Аналіз внутрішніх комунікацій, адаптації персоналу та
              вмотивованості команди
            </StyledLi>
          </StyledAboutUl>
        </AboutWrapper>
        <ForWHoWrapper>
          <div>
            <TitleH3White>Для кого?</TitleH3White>
            <StyledForWhoUl>
              <StyledLiWhite>Лідерам, які прагнуть змін</StyledLiWhite>
              <StyledLiWhite>
                Власникам, які хочуть отримати незалежну експертну думку
              </StyledLiWhite>
              <StyledLiWhite>
                Керівникам та маркетологам перед розробкою стратегії розвитку
              </StyledLiWhite>
            </StyledForWhoUl>
          </div>
          <div>
            <TitleH3White>Коли варто робити?</TitleH3White>
            <StyledForWhoUl>
              <StyledLiWhite>
                Маєте незадовільні фінансові показники бізнесу, низьку
                завантаженість та відсутність стратегії
              </StyledLiWhite>
              <StyledLiWhite>
                Перед масштабуванням або відкриттям нового відділення
              </StyledLiWhite>
              <StyledLiWhite>
                Перед розробкою стратегії бізнесу, маркетингу та сервісу
              </StyledLiWhite>
            </StyledForWhoUl>
          </div>
        </ForWHoWrapper>
      </DescriptionWrapper>
    </StyledSection>
  );
};

Diagnostics.propTypes = {
  handleSetLink: PropTypes.func.isRequired,
};

export default Diagnostics;

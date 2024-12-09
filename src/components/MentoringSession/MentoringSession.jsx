import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import sprite from "../../images/sprite.svg";
import {
  ArrowWrapper,
  MentorSessionWrapper,
  PersonalParagraph,
  PersonalSessionSectionWrapper,
  PersonalWrapper,
  ProHourParagraph,
  QuestionWrapper,
  StyledArrowSvg,
  StyledContainer,
  StyledOrderLink,
  StyledParagraph,
  StyledPersonalList,
  StyledPersonalListItem,
  StyledSection,
  StyledSessionParagraph,
  TitleH2,
  TitleH3,
} from "./MentorSession.styled";

const mentoring_arrow = [
  "Аналіз поточного стану компанії",
  "Зануритись в бізнес-процеси та зрозуміти, де є точки зростання",
  "Створення або адаптація бізнес-моделі медичного бізнесу",
  "Визначення візії, місії та цінностей",
  "Створення ціннісної пропозиції",
  "Визначення векторів розвитку",
  "Розробка позиціонування",
  "Створення нового продукту/послуг",
];

const MentoringSession = ({ handleSetLink }) => {
  return (
    <StyledSection className="container">
      <PersonalSessionSectionWrapper>
        <MentorSessionWrapper>
          <PersonalWrapper>
            <TitleH2>Проведення стратегічних сесій</TitleH2>
            <PersonalParagraph>
              Для медичних центрів, клінік та бізнесів
            </PersonalParagraph>
            <ProHourParagraph>від 4 годин</ProHourParagraph>
            <StyledOrderLink
              href="#contact"
              onClick={(e) => handleSetLink("contact", e)}
              aria-label="Scroll to contacts form"
            >
              Замовити послугу
            </StyledOrderLink>
          </PersonalWrapper>

          <QuestionWrapper>
            <TitleH3>Питання, з якими можете звернутися</TitleH3>
            <StyledPersonalList>
              {mentoring_arrow.map((topic, index) => (
                <StyledPersonalListItem key={index}>
                  {topic}
                </StyledPersonalListItem>
              ))}
            </StyledPersonalList>
          </QuestionWrapper>
        </MentorSessionWrapper>
        <StyledSessionParagraph>
          Шлях проведення менторської сесії
        </StyledSessionParagraph>
        <ArrowWrapper>
          {[
            "Заповнення брифу",
            "Діагностика ситуації",
            "Проведення сесії",
            "Рекомендації",
          ].map((step, index) => (
            <StyledContainer key={index}>
              <MediaQuery minWidth={330} maxWidth={767}>
                <StyledArrowSvg>
                  <use href={`${sprite}#icon-rectangle-mob`} />
                </StyledArrowSvg>
              </MediaQuery>
              <MediaQuery minWidth={768} maxWidth={1439}>
                <StyledArrowSvg>
                  <use href={`${sprite}#icon-rectangle-tab`} />
                </StyledArrowSvg>
              </MediaQuery>
              <MediaQuery minWidth={1440} maxWidth={1919}>
                <StyledArrowSvg>
                  <use href={`${sprite}#icon-rectangle-1440`} />
                </StyledArrowSvg>
              </MediaQuery>
              <MediaQuery minWidth={1920}>
                <StyledArrowSvg>
                  <use href={`${sprite}#icon-rectangle2`} />
                </StyledArrowSvg>
              </MediaQuery>
              <StyledParagraph>{step}</StyledParagraph>
            </StyledContainer>
          ))}
        </ArrowWrapper>
      </PersonalSessionSectionWrapper>
    </StyledSection>
  );
};

MentoringSession.propTypes = {
  handleSetLink: PropTypes.func.isRequired,
};

export default MentoringSession;

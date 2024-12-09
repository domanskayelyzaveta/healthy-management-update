import {
  ListItem,
  ListItemText,
  PrinciplesContentWrapper,
  PrinciplesDiv,
  PrinciplesList,
  PrinciplesText,
  PrinciplesTitle,
  SectionPrinciples,
  SvgDone,
} from "./WorkPrinciples.styled";
import sprite from "../../images/sprite.svg";
import MediaQuery from "react-responsive";
import { images, principlesData } from "./WorkPrinciplesData";

const WorkPrinciples = () => {
  return (
    <SectionPrinciples className="container">
      <PrinciplesDiv>
        <PrinciplesContentWrapper>
          <PrinciplesTitle>Принципи роботи</PrinciplesTitle>
          <PrinciplesText>
            Наші принципи роботи полягають у співдії з ціннісними брендами та
            командами, які готові до чесної співпраці, щоб сприяти досягненню
            поставлених цілей. Готові ділитись власним досвідом та створювати
            стратегії здорового менеджменту та розвитку, медичного маркетингу,
            сервісу для медичних центрів та бізнесів
          </PrinciplesText>
        </PrinciplesContentWrapper>
        <PrinciplesList>
          {principlesData.map((text, index) => (
            <ListItem key={index}>
              <SvgDone>
                <use href={`${sprite}#icon-done-yellow`}></use>
              </SvgDone>
              <ListItemText>{text}</ListItemText>
            </ListItem>
          ))}
        </PrinciplesList>
      </PrinciplesDiv>
      {images.map(({ minWidth, maxWidth, src1x, src2x }, index) => (
        <MediaQuery key={index} minWidth={minWidth} maxWidth={maxWidth}>
          <img
            srcSet={`${src1x} 1x, ${src2x} 2x`}
            src={src1x}
            alt="Ольга Поліщук - ваш ментор в медичній галузі"
            loading="lazy"
          />
        </MediaQuery>
      ))}
    </SectionPrinciples>
  );
};

export default WorkPrinciples;

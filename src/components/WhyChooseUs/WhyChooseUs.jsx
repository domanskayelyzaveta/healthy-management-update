import {
  ContentTitle,
  ContentWrapper,
  Div,
  DivSvg,
  Item,
  ItemTitle,
  List,
  SectionChoose,
  Svg,
  Text,
} from "./WhyChooseUs.styled";
import sprite from "../../images/sprite.svg";
import { dataWhyChooseUs } from "./DataWhyChooseUs";

const WhyChooseUs = () => {
  return (
    <SectionChoose className="container">
      <ContentWrapper>
        <ContentTitle>Чому обирають нас</ContentTitle>
        <List>
          {dataWhyChooseUs.map((item) => (
            <Item key={item.icon}>
              <DivSvg>
                <Svg>
                  <use href={`${sprite}#${item.icon}`}></use>
                </Svg>
              </DivSvg>
              <Div>
                <ItemTitle>{item.title}</ItemTitle>
                <Text>{item.text}</Text>
              </Div>
            </Item>
          ))}
        </List>
      </ContentWrapper>
    </SectionChoose>
  );
};

export default WhyChooseUs;

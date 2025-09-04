import {
  ListItem,
  SectionHero,
  SectionHeroDiv,
  SectionHeroText,
  SectionHeroTextUl,
  SectionHeroTitle,
} from "./Hero.styled";
import PropTypes from "prop-types";
import { listItems } from "./HeroData";
import SectionHeroLink from "./SectionHeroLink.jsx";

const Hero = ({ handleSetLink }) => {
  return (
    <SectionHero id="home">
      <div className="container">
        <SectionHeroTitle>
          Стратегічний архітектор здорового менеджменту у медицині
        </SectionHeroTitle>
        <SectionHeroText>
          Допомагаємо медичним брендам зростати системно:
        </SectionHeroText>
        <SectionHeroTextUl>
          {listItems.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </SectionHeroTextUl>
        <SectionHeroDiv>
          <SectionHeroLink
            type="contact"
            href="#contact"
            onClick={(e) => handleSetLink("contact", e)}
            aria-label="Scroll to contacts form"
          >
            Консультація
          </SectionHeroLink>
          <SectionHeroLink
            type="services"
            href="#services"
            onClick={(e) => handleSetLink("services", e)}
            aria-label="Scroll to services section form"
          >
            Послуги
          </SectionHeroLink>
        </SectionHeroDiv>
      </div>
    </SectionHero>
  );
};

Hero.propTypes = {
  handleSetLink: PropTypes.func.isRequired,
};

export default Hero;

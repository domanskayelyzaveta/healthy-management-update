import Carousel from "../Carousel/Carousel";
import {
  ExperienceTitle,
  ExperienceWrapper,
  Section,
} from "./Experience.styled";

const Experience = () => {
  return (
    <Section className="container">
      <ExperienceWrapper>
        <ExperienceTitle>Досвід співдії</ExperienceTitle>
        <Carousel />
      </ExperienceWrapper>
    </Section>
  );
};

export default Experience;

import { useScreenWidth } from "../../hooks/useScreenWidth";
import data from "./data";

import { useEffect, useState } from "react";
import {
  List,
  SectionWrapper,
  Title,
} from "../ProjectSection/ProjectSection.styled";
import ProjectSectionCard from "../ProjectSection/ProjectSectionCard/ProjectSectionCard";

const ExpertiseSection = ({ handleSetActiveLink }) => {
  const screenWidth = useScreenWidth();

  const [expertiseList, setExpertiseList] = useState(
    screenWidth === "mobile" || screenWidth === "tablet"
      ? [...data.slice(0, 3)]
      : [...data]
  );
  useEffect(() => {
    if (screenWidth === "mobile" || screenWidth === "tablet") {
      setExpertiseList([...data.slice(0, 3)]);
    } else {
      setExpertiseList([...data]);
    }
  }, [screenWidth]);

  return (
    <SectionWrapper id="expertise" className="container">
      <Title>Експертиза</Title>
      <List>
        {expertiseList.map((item) => (
          <ProjectSectionCard key={item.category} item={item} />
        ))}
      </List>
    </SectionWrapper>
  );
};

export default ExpertiseSection;

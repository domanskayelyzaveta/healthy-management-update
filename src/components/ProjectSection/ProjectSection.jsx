import { useScreenWidth } from "../../hooks/useScreenWidth";
import data from "./data";
import icon from "../../images/sprite.svg";

import {
  Title,
  List,
  ActionBtn,
  SectionWrapper,
  Icon,
} from "./ProjectSection.styled";
import ProjectSectionCard from "./ProjectSectionCard/ProjectSectionCard";
import { useEffect, useState } from "react";

const ProjectSection = ({ handleSetActiveLink }) => {
  const screenWidth = useScreenWidth();

  const [projectList, setProjectList] = useState(
    screenWidth === "mobile" || screenWidth === "tablet"
      ? [...data.slice(0, 3)]
      : [...data]
  );
  useEffect(() => {
    if (screenWidth === "mobile" || screenWidth === "tablet") {
      setProjectList([...data.slice(0, 3)]);
    } else {
      setProjectList([...data]);
    }
  }, [screenWidth]);
  const handleListChange = (e) => {
    if (projectList.length > 3) {
      setProjectList((prev) => prev.slice(0, 3));
      handleSetActiveLink("projects", e);
    } else {
      setProjectList([...data]);
    }
  };

  return (
    <SectionWrapper id="projects" className="container">
      <Title>Проєкти</Title>
      <List>
        {projectList.map((item) => (
          <ProjectSectionCard key={item.category} item={item} />
        ))}
      </List>
      {(screenWidth === "mobile" || screenWidth === "tablet") && (
        <ActionBtn onClick={handleListChange}>
          {projectList.length > 3 ? "Менше проєктів" : "Більше проєктів"}
          <Icon>
            <use
              href={
                icon +
                `${
                  projectList.length > 3 ? "#icon-arrowup" : "#icon-arrowdown"
                }`
              }
            ></use>
          </Icon>
        </ActionBtn>
      )}
    </SectionWrapper>
  );
};

export default ProjectSection;

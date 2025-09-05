import { useState } from "react";

import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { ListItem } from "../../ProjectSection/ProjectSectionCard/ProjectSectionCard.styled";

const ExpertiseSectionCard = ({ item }) => {
  const [isDetailInfoVisible, setisDetailInfoVisible] = useState(false);
  const screenWidth = useScreenWidth();

  const mobileOnDetailBtnClick = () => {
    if (screenWidth === "mobile") {
      setisDetailInfoVisible((prev) => !prev);
    }
  };
  return (
    <ListItem onClick={mobileOnDetailBtnClick}>
      <ListItemMarkup
        dataList={item}
        isDetailInfoVisible={isDetailInfoVisible}
        setisDetailInfoVisible={setisDetailInfoVisible}
      />
    </ListItem>
  );
};

export default ExpertiseSectionCard;

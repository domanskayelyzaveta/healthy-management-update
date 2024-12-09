import PropTypes from "prop-types";
import icon from "../../images/sprite.svg";
import {
  List,
  ListItem,
  Title,
  Icon,
  Comment,
  Wrapper,
  SvgWrap,
} from "./TickList.styled";

const TickList = ({
  title,
  about,
  comment,
  variant,
  additionalComment = false,
}) => {
  return (
    <Wrapper>
      <Title variant={variant}>{title}</Title>
      <List>
        {about?.map((item) => (
          <ListItem key={item} variant={variant}>
            <SvgWrap>
              <Icon>
                <use href={icon + "#icon-done"}></use>
              </Icon>
            </SvgWrap>
            {item}
          </ListItem>
        ))}
      </List>
      {comment && (
        <Comment additionalComment={additionalComment}>{comment}</Comment>
      )}
    </Wrapper>
  );
};

TickList.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.arrayOf(PropTypes.string),
  comment: PropTypes.string,
  variant: PropTypes.string.isRequired,
  additionalComment: PropTypes.bool,
};

export default TickList;

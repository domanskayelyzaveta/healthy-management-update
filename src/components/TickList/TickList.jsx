import icon from "../../images/sprite.svg";
import {
  List,
  ListItem,
  Title,
  Icon,
  Comment,
  Wrapper,
  SvgWrap,
  LinkA,
  LinkWrapper,
} from "./TickList.styled";
import AboutMeSvgIcon from "../AboutMe/AboutMeSvgIcon";

const TickList = ({
  title,
  about,
  comment,
  variant,
  additionalComment = false,
}) => {
  return (
    <Wrapper variant={variant}>
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
      {/* {comment && (
        <Comment additionalComment={additionalComment}>{comment}</Comment>
      )} */}

      {comment &&
        (typeof comment === "object" && comment.link ? (
          <LinkWrapper>
            <Comment additionalComment={additionalComment}>
              <LinkA
                href={comment.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {comment.text}
              </LinkA>
            </Comment>
            <AboutMeSvgIcon />
          </LinkWrapper>
        ) : (
          <Comment additionalComment={additionalComment}>{comment}</Comment>
        ))}
    </Wrapper>
  );
};

export default TickList;

import PropTypes from "prop-types";
import { useState } from "react";
import sprite from "../../images/icon-footer.svg";

import {
  ContactsFooter,
  FooterBg,
  FooterContainer,
  Instagram,
  Item,
  NavFooter,
  NavFooterBtn,
  Paragraph,
  Social,
  SocialItem,
  TeamBtn,
  TelEmail,
  Text,
} from "./Footer.styled";
import ModalWindowMarkup from "../ModalWindow/ModalWindowMarkup";
import { useMediaQuery } from "@react-hook/media-query";

const Footer = ({ handleSetActiveLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isTabletScreen = useMediaQuery(
    "(min-width: 1440px) and (max-width: 1919px)"
  );

  const currentDate = new Date();
  const year = currentDate.getFullYear();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FooterBg id="footer">
      <FooterContainer className="container">
        <a
          href="#home"
          onClick={(e) => handleSetActiveLink("home", e)}
          aria-label="Link to start"
        >
          <svg width="208" height="40">
            <use href={`${sprite}#logo-white`} />
          </svg>
        </a>
        {isTabletScreen ? (
          <>
            <NavFooter>
              <NavFooterBtn
                href="#home"
                onClick={(e) => handleSetActiveLink("home", e)}
              >
                Головна
              </NavFooterBtn>
              <NavFooterBtn
                href="#aboutUs"
                onClick={(e) => handleSetActiveLink("aboutUs", e)}
              >
                Про нас
              </NavFooterBtn>
              <NavFooterBtn
                href="#services"
                onClick={(e) => handleSetActiveLink("services", e)}
              >
                Послуги
              </NavFooterBtn>
              <NavFooterBtn
                href="#diagnostics"
                onClick={(e) => handleSetActiveLink("diagnostics", e)}
              >
                Діагностика
              </NavFooterBtn>
              <NavFooterBtn
                href="#projects"
                onClick={(e) => handleSetActiveLink("projects", e)}
              >
                Проєкти
              </NavFooterBtn>
              <NavFooterBtn
                href="#expertise"
                onClick={(e) => handleSetActiveLink("expertise", e)}
              >
                Експертиза
              </NavFooterBtn>
            </NavFooter>
            <TeamBtn onClick={handleOpenModal}>
              created by GoIT students
            </TeamBtn>
            <ModalWindowMarkup
              handleClose={handleCloseModal}
              isModalOpen={isModalOpen}
            />
          </>
        ) : (
          <>
            <TeamBtn onClick={handleOpenModal}>
              created by GoIT students
            </TeamBtn>
            <ModalWindowMarkup
              handleClose={handleCloseModal}
              isModalOpen={isModalOpen}
            />
            <NavFooter>
              <NavFooterBtn
                href="#home"
                onClick={(e) => handleSetActiveLink("home", e)}
              >
                Головна
              </NavFooterBtn>
              <NavFooterBtn
                href="#aboutUs"
                onClick={(e) => handleSetActiveLink("aboutUs", e)}
              >
                Про нас
              </NavFooterBtn>
              <NavFooterBtn
                href="#services"
                onClick={(e) => handleSetActiveLink("services", e)}
              >
                Послуги
              </NavFooterBtn>
              <NavFooterBtn
                href="#diagnostics"
                onClick={(e) => handleSetActiveLink("diagnostics", e)}
              >
                Діагностика
              </NavFooterBtn>
              <NavFooterBtn
                href="#projects"
                onClick={(e) => handleSetActiveLink("projects", e)}
              >
                Проєкти
              </NavFooterBtn>
              <NavFooterBtn
                href="#expertise"
                onClick={(e) => handleSetActiveLink("expertise", e)}
              >
                Експертиза
              </NavFooterBtn>
            </NavFooter>
          </>
        )}

        <ContactsFooter>
          <Social>
            <SocialItem
              href="https://www.facebook.com/olga.polishchuk.14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to open Facebook"
            >
              <svg width="32" height="32">
                <use href={`${sprite}#facebook`} />
              </svg>
            </SocialItem>
            <Instagram
              href="https://www.instagram.com/olga_healthm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to open Instagram"
            >
              <svg width="32" height="32">
                <use href={`${sprite}#instagram`} />
              </svg>
            </Instagram>
          </Social>
          <TelEmail>
            <Item href="mailto:healthy.managements@gmail.com">
              healthy.managements@gmail.com
            </Item>
          </TelEmail>
        </ContactsFooter>
      </FooterContainer>
      <Paragraph>
        <Text>
          © <span>{year}</span> healthy management. All rights reserved
        </Text>
      </Paragraph>
    </FooterBg>
  );
};

Footer.propTypes = {
  handleSetActiveLink: PropTypes.func.isRequired,
};

export default Footer;

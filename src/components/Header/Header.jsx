import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "../../images/sprite.svg";
import svgMobile from "../../images/svgMobileHeader/symbol-defs.svg";
import {
  HeaderAddress,
  Headers,
  HeaderDiv,
  HeaderNav,
  HeaderNavMenu,
  SvgMobileHeader,
  ButtonMobileHeader,
} from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import ModalMobaileMenu from "../ModalMobaileMenu/ModalMobaileMenu.jsx";
import { navItems } from "./HeaderData";

const Header = ({ handleSetActiveLink }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [shownModal, setShownModal] = useState(false);

  const isTabletSvg = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isMobailAndTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop1440 = useMediaQuery({ query: "(min-width: 1440px)" });

  const onModal = () => setShownModal(!shownModal);

  const handleScroll = () => {
    const sections = [
      "home",
      "aboutUs",
      "services",
      "diagnostics",
      "projects",
      "contact",
      "expertise",
    ];
    const currentSection = sections.find((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      }
      return sectionElement;
    });
    if (currentSection) {
      setActiveLink(currentSection);
    }
  };

  useEffect(() => {
    if (shownModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shownModal]);

  return (
    <Headers>
      <div className="container">
        <HeaderDiv>
          {(isMobailAndTablet || isDesktop1440) && (
            <a
              href="#home"
              onClick={(e) => handleSetActiveLink("home", e)}
              aria-label="Logo link Healthy Management"
            >
              {isDesktop1440 ? (
                <svg width={isDesktop1440 ? "260" : "40"} height="40">
                  <use href={`${logo}#logo-black`}></use>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={isDesktop1440 ? "260" : "40"}
                  height="40"
                  viewBox="0 0 66 40"
                  fill="none"
                >
                  <path
                    d="M60.0709 9.82186C57.567 9.82186 55.375 10.6567 53.4861 12.3329C52.7591 10.4386 51.7642 8.75134 50.4958 7.25461C49.2274 5.76337 47.7898 4.49021 46.1975 3.43732C44.5985 2.38333 42.8546 1.55401 40.9712 0.953771C39.0867 0.353534 37.1484 0.0352433 35.1519 0H29.2162V20.0237H15.8908V0H9.95507V20.0237C8.61419 20.0237 7.3326 20.2814 6.1213 20.7924C4.9078 21.3023 3.84695 22.0094 2.93985 22.9169C2.03275 23.8244 1.31343 24.8906 0.788499 26.112C0.262467 27.33 0 28.6296 0 30.0151C0 31.4006 0.262467 32.6452 0.788499 33.8611C1.31453 35.0825 2.02945 36.142 2.93985 37.0561C3.84476 37.9636 4.9078 38.6817 6.1213 39.2092C7.3348 39.7368 8.61419 40 9.95507 40H15.8908V25.9743H29.2162V39.9493H29.2228V40H35.153V25.9743H37.3329V25.9809H38.2554V20.0281H35.153V0.926237C37.5503 0.926237 39.6753 1.50885 41.5423 2.67518C43.4092 3.83601 44.9741 5.32724 46.2205 7.14888C47.4736 8.96611 48.429 10.9937 49.0824 13.2305C49.7314 15.4674 50.0598 17.6646 50.0598 19.8067H55.498C55.498 19.19 55.5705 18.3717 55.7155 17.3518C55.8604 16.3375 56.1185 15.3451 56.482 14.3815C56.8389 13.4167 57.3144 12.5885 57.8954 11.8979C58.4708 11.2085 59.1978 10.8604 60.0698 10.8604V39.9482H66V9.82186H60.0698H60.0709ZM9.95617 38.9603C9.22917 38.9603 8.58673 38.6795 8.02775 38.1189C7.46329 37.5528 7.03829 36.9636 6.74837 36.3413C6.2399 35.3941 5.88739 34.3677 5.68642 33.2586C5.57879 32.6661 5.50302 32.0813 5.4536 31.5053C5.37673 29.0878 6.39036 27.0162 8.06729 26.2661C8.44507 26.0965 9.07543 25.8972 9.95617 25.971V38.9592V38.9603Z"
                    fill="#062136"
                  />
                </svg>
              )}
            </a>
          )}

          {isDesktop1440 && (
            <HeaderNav>
              {navItems.map((item) => (
                <HeaderNavMenu
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeLink === item.id ? "active" : ""}
                  onClick={(e) => handleSetActiveLink(item.id, e)}
                >
                  {item.label}
                </HeaderNavMenu>
              ))}
            </HeaderNav>
          )}
          <HeaderAddress
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={(e) => handleSetActiveLink("contact", e)}
          >
            Контакт
          </HeaderAddress>

          {(isMobailAndTablet || isTabletSvg) && (
            <ButtonMobileHeader
              type="button"
              onClick={onModal}
              aria-label="Open mobile menu"
            >
              <SvgMobileHeader>
                <use
                  href={isTabletSvg ? "burger-tablet.svg" : "burger.svg"}
                ></use>
              </SvgMobileHeader>
            </ButtonMobileHeader>
          )}
        </HeaderDiv>
      </div>
      {isMobailAndTablet && shownModal && (
        <ModalMobaileMenu
          onClose={onModal}
          handleSetActiveLink={handleSetActiveLink}
        />
      )}
    </Headers>
  );
};

Header.propTypes = {
  handleSetActiveLink: PropTypes.func.isRequired,
};

export default Header;

import OlgaDesktopWebp19201x from "../../images/desktop/olga_picture@1x.webp";
import OlgaDesktopWebp19202x from "../../images/desktop/olga_picture@2x.webp";
import OlgaMobWebp1x from "../../images/mobile/mob_olga_picture@1x.webp";
import OlgaMobWebp2x from "../../images/mobile/mob_olga_picture@2x.webp";
import OlgaTabWebp1x from "../../images/tablet/olga_picture@1x.webp";
import OlgaTabWebp2x from "../../images/tablet/olga_picture@2x.webp";
import OlgaDesktop1440Webp1x from "../../images/desktop1440/olga_picture@1x.webp";
import OlgaDesktop1440Webp2x from "../../images/desktop1440/olga_picture@2x.webp";

export const mediaQueries = [
  {
    query: "(max-width: 767px)",

    imgData: {
      srcSet: `${OlgaMobWebp2x} 2x, ${OlgaMobWebp1x} 1x`,
      sizes: "(max-width: 767px) 100vw",
      src: OlgaMobWebp1x,
    },
  },
  {
    query: "(min-width: 768px) and (max-width: 1439px)",
    imgData: {
      srcSet: `${OlgaTabWebp2x} 2x, ${OlgaTabWebp1x} 1x`,
      type: "image/webp",
      sizes: "(min-width: 768px) 100vw (max-width: 1439px) 100vw",
      src: OlgaTabWebp1x,
    },
  },
  {
    query: "(min-width: 1440px) and (max-width: 1919px)",
    imgData: {
      srcSet: `${OlgaDesktop1440Webp2x} 2x, ${OlgaDesktop1440Webp1x} 1x`,
      type: "image/webp",
      sizes: "(min-width: 1440px) 100vw (max-width: 1919px) 100vw",
      src: OlgaDesktop1440Webp1x,
    },
  },
  {
    query: "(min-width: 1920px)",
    imgData: {
      srcSet: `${OlgaDesktopWebp19202x} 2x, ${OlgaDesktopWebp19201x} 1x`,
      type: "image/webp",
      sizes: "(min-width: 1920px) 100vw",
      src: OlgaDesktopWebp19201x,
    },
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/olga_healthm/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/olga.polishchuk.14",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/olga-polishchuk-83362140/",
  },
];

export const aboutMeListItems = [
  "Бізнес-консультантка, експертка з розвитку та трансформації бізнесу, стратег з медичного менеджменту та маркетингу",
  "20+ років в маркетингу та комунікаціях, 14 років в медичному, фармацевтичному бізнесі на керівних посадах та у бізнес- консалтингу",
  "15 + проєктів в медичному бізнес-консалтингу",
  "Ex-Head of marketing/СBDO R+ medіcal network, Ex-Head of marketing MDM Group",
  "Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)",
  "Експертка та тренерка в Центр Розвитку Громадського Здоров'я УКУ",
  "EX-ведуча подкастів «Відверто про медичний бізнес» спільно з DOC.UA",
  "Прихильниця процесного підходу та автоматизації",
  "MBA Healthcare management",
];

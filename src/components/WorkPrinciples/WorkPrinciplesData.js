import mobPrinciples from "../../images/mobile/mob_principles.webp";
import mobPrinciples2x from "../../images/mobile/mob_principles@2x.webp";
import principles_1920 from "../../images/desktop/principles_1920.webp";
import principles_19202x from "../../images/desktop/principles_1920@2x.webp";
import Tablet1x from "../../images/tablet/principles.webp";
import Tablet2x from "../../images/tablet/principles@2x.webp";
import principles_1440 from "../../images/desktop1440/principles_1440.webp";
import principles_14402x from "../../images/desktop1440/principles_1440@2x.webp";

export const principlesData = [
  "Більше 20 років досвіду в маркетингу та комунікаціях",
  "Глибоке розуміння бізнес-процесів медичних закладів",
  "Використання принципів доказової медицини",
];

export const images = [
  {
    minWidth: 375,
    maxWidth: 767,
    src1x: mobPrinciples,
    src2x: mobPrinciples2x,
  },
  { minWidth: 768, maxWidth: 1439, src1x: Tablet1x, src2x: Tablet2x },
  {
    minWidth: 1440,
    maxWidth: 1919,
    src1x: principles_1440,
    src2x: principles_14402x,
  },
  { minWidth: 1920, src1x: principles_1920, src2x: principles_19202x },
];

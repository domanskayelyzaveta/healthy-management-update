import {
  SectionAboutStudio,
  SectionAboutStudioTitle,
  SectionAboutStudioDiv,
  SectionAboutStudioText,
  SectionAboutStudioTextVan,
  SectionAboutStudioDivTitle,
  DivSection,
  SectionAboutStudioValues,
  DivSectionOurMission,
  SectionAboutStudioOurMission,
  SectionAboutStudioOurMissionP,
} from "./AboutStudio.styled";
import AboutStudioSvgIcon from "./AboutStudioSvgIcon";

const AboutStudio = () => {
  return (
    <SectionAboutStudio id="aboutUs" className="container">
      <div>
        <SectionAboutStudioTitle>Про студію</SectionAboutStudioTitle>
        <SectionAboutStudioDiv>
          <div>
            <SectionAboutStudioText>
              <b>Працюємо з тими, хто готовий до змін.</b> Допомагаємо медичним
              бізнесам проходити шлях від хаосу до системи, від інтуїтивних
              рішень - до зрозумілої стратегії. Ми співпрацюємо з медичними
              закладами, лікарями, власниками, керівниками та створюємо
              архітектуру змін та дії для ефективного просування та розвитку
              проєктів, використовуючи комплексний підхід.
            </SectionAboutStudioText>
          </div>
          <DivSectionOurMission>
            <SectionAboutStudioDivTitle>
              <AboutStudioSvgIcon
                fill="var(--background-white)"
                background="rgba(244, 244, 246, 0.2)"
              />

              <SectionAboutStudioOurMission>
                Наша місія
              </SectionAboutStudioOurMission>
            </SectionAboutStudioDivTitle>
            <SectionAboutStudioOurMissionP>
              Будуємо архітектуру трансформацій для медицини майбутнього
            </SectionAboutStudioOurMissionP>
          </DivSectionOurMission>
          <DivSection>
            <SectionAboutStudioDivTitle>
              <AboutStudioSvgIcon
                fill="var(--primary-bluedark)"
                background="rgba(27, 54, 65, 0.2)"
              />

              <SectionAboutStudioValues>Наші цінності</SectionAboutStudioValues>
            </SectionAboutStudioDivTitle>
            <SectionAboutStudioTextVan>
              Повага, довіра, партнерство та експертність. Будуємо нову культуру
              управління здоровим менеджментом у медичній галузі
            </SectionAboutStudioTextVan>
          </DivSection>
        </SectionAboutStudioDiv>
      </div>
    </SectionAboutStudio>
  );
};

export default AboutStudio;

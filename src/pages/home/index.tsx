// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey1">
              Always learning new technologies that help me deliver the best solutions!{" "}
            </Text>
            <Text type="body1" color="grey1">
            As a Full Stack Developer and teaching assistant at Kenzie Academy Brasil, 
            I combine my passion for technology and education to create and assist complex web applications
            using various tools and frameworks. At Kenzie Academy's bootcamp I learned how to use 
            JavaScript, TypeScript, React, Node.js, Express, Nest, Python, 
            Django, PostgreSQL, and other technologies to build and consume RESTful APIs, work with databases, 
            and apply object-oriented programming concepts.<br/><br/>
            Before switching to web development, I had a career in marketing and product management, 
            where I developed and structured product lines from market research to launch, managing development 
            schedules, profitability analysis, pricing, assortment, sales forecasting, and packaging design. 
            I also have a degree in communication and marketing from ESPM, 
            and I speak fluent English, having taken Business Administration course in Dublin.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="btLink" href="#projetos">
                Projects
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Techs
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Languages and Technologies
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Let's talk?
              </Text>
              <Text as="p" type="body1" color="grey4">
                I'm always sharing my thoughts and projects on LinkedIn, feel 
                free to reach out and connect!
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                My LinkedIn profile
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey4" css={{ marginBottom: "$2" }}>
                Projects
              </Text>
              <Text as="h3" type="heading2" color="grey4">
                Made with {" "}
                <Text as="span" color="brand1" type="heading2">
                  passion
                </Text>{" "}
                and dedication
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};

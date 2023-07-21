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
              Passionate about technology since I was a kid, I started learning programming in Kenzie Academy bootcamp.
              For the front-end my main stacks are [react, next, typescript, javascript] and for the back-end they are 
              [node, express, postgreSQL, typeORM, nest, python, django]
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

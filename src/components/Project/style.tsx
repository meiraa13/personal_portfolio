import { styled } from "../../styles/stitches.config";
import { Flex } from "../../styles/Global"
import { Text } from "../../styles/Text"

export const Project = styled("article", {
  marginTop: "4rem",
  border: "5px solid $grey3",
  padding: "1rem",
  borderRadius: "0.5rem",
  backgroundColor: "$grey4"
});

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",

});

export const ProjectStackTech = styled("span", {
  display: "flex",
  gap: "1rem",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover":{
    color: "$grey1"
  },

  [`& svg`]: {
    marginRight: "$1"
  }
});

import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaDocker, FaGit, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiPostgresql, SiDjango, SiNestjs, SiExpress } from "react-icons/si";

export const stackData = [
  { title: "HTML", img: imgHTML },
  { title: "CSS", img: imgCSS },
  { title: "JS", img: imgJS },
  { title: "TypeScript", img: SiTypescript },
  { title: "Node.js", img: imgNode },
  { title: "Styled Components", img: imgStyled },
  { title: "React", img: imgReact },
  { title: "Next.js", img: SiNextdotjs },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Nest.js", img: SiNestjs },
  { title: "Express.js", img: SiExpress },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  { title: "Django", img: SiDjango },
  { title: "Docker", img: FaDocker },
];

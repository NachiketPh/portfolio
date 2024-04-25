import {
  FaCalculator,
  FaDiagramProject,
  FaEnvelope,
  FaFirstOrder,
  FaGithub,
  FaHouse,
  FaInstagram,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  Randompassword,
  AgeCalculator,
  calculator,
  covid,
  tiptop,
  recommendation,
  shoe,
  nature,
  webapp} from "../assets";

export const Socials = [
  {
    id: `Instagram`,
    Icon: FaInstagram,
    uri: "https://www.instagram.com/nachii_phalak?igsh=MXg3NnVmNmZ5cnpleQ==",
    color: "#1877F2",
  },
  {
    id: `linkedin-`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/nachiket-phalak-37809528a",
    color: "#0072b1",
  },
  {
    id: `github`,
    Icon: FaGithub,
    uri: "https://github.com/NachiketPh",
    color: "#fff",
  },
  {
    id: `youtube`,
    Icon: FaYoutube,
    uri: "",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Age Calculator",
    imgSrc: AgeCalculator,
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Random Password Generator",
    imgSrc:Randompassword,
  },
  {
    id: `openai-${Date.now()}`,
    name: "Simple Calculator",
    imgSrc: calculator,
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Covid-19 Analysis using Power BI",
    imgSrc: covid,
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Simple Game",
    imgSrc: tiptop,
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Movie Recommendation using ML",
    imgSrc: recommendation,
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "Simple Shoe UI Build",
    imgSrc: shoe,
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Simple UI Nature",
    imgSrc: nature,
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "UI For Music App",
    imgSrc: webapp,
  },
];

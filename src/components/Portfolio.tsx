import "../styles/portfolio.css";
import { useState } from "react";
import { IPortfolioDetails } from "../types/interfaces/portfolio.interface";
import armyInventoryImage from "../assets/ArmyInventory.png";
import findMyItemImage from "../assets/FindMyItem.png";
import codeStormImage from "../assets/CodeStorm.png";
import connectRentImage from "../assets/CodeStorm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const portfolio: IPortfolioDetails[] = [
  {
    media: armyInventoryImage,
    title: "Army Inventory",
    description:
      "An inventory management app for managing sales and manage reports.",
    websiteLink: "",
    githubLink: "https://github.com/samirkhanalofficial/army_inventory",
  },
  {
    media: findMyItemImage,
    title: "Find My Item",
    websiteLink: "https://findmyitem.samirk.com.np/",
    githubLink: "https://github.com/samirkhanalofficial/findmyitem",
    description:
      "Platform for listing and searching lost & found items intending to return the items to their owners.",
  },
  {
    media: codeStormImage,
    title: "Nebula Care",
    websiteLink: "https://code-storm.vercel.app/",
    githubLink: "https://github.com/samirkhanalofficial/CodeStorm",
    description:
      "App addressingn mental health of people which provides therapist's booking and video call sessions with chat feature.",
  },
  {
    media: connectRentImage,
    title: "Connect Rent",
    websiteLink: "",
    githubLink: "https://github.com/itsbib/connect-rent",
    description:
      "Property renting platform that uses blockchain for smart contract that assures security.",
  },
];
export default function Portfolio() {
  const [pointer, setPointer] = useState<number>(0);

  const handleNext = () => {
    setPointer((prevPointer) =>
      Math.min(prevPointer + 1, portfolio.length - 3)
    );
  };

  const handlePrev = () => {
    setPointer((prevPointer) => Math.max(prevPointer - 1, 0));
  };

  const PortfolioCard = (portfolios: IPortfolioDetails) => (
    <>
      <img className="portfolioCardImage" src={portfolios.media} alt="" />
      <div className="portfolioCardTiltleSection">
        <h1 className="portfolioCardTitle">{portfolios.title}</h1>
        <a
          className="portfolioCardIcons"
          href={portfolios.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosGlobe />
        </a>
        <a
          className="portfolioCardIcons"
          href={portfolios.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="portfolioCardDesc">{portfolios.description}</div>
    </>
  );

  return (
    <div id="Portfolio" className="portfolio">
      <h1 className="portfolioHeader">My Works</h1>
      <div className="portfolioCardSection">
        <FontAwesomeIcon
          className="arrowIcon"
          icon={faAnglesLeft}
          onClick={handlePrev}
          aria-disabled={pointer === 0}
        />
        <div className="portfolioCards">
          {portfolio.slice(pointer, pointer + 3).map((portfolioItem, index) => (
            <div className="portfolioCard" key={index}>
              <PortfolioCard {...portfolioItem} />
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          className="arrowIcon"
          icon={faAnglesRight}
          onClick={handleNext}
          aria-disabled={pointer === portfolio.length - 3}
        />{" "}
      </div>
    </div>
  );
}

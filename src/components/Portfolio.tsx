import "../styles/portfolio.css";
import { IPortfolioDetails } from "../types/interfaces/portfolio.interface";
import armyInventoryImage from "../assets/ArmyInventory.png";
import findMyItemImage from "../assets/FindMyItem.png";
import codeStormImage from "../assets/CodeStorm.png";
import connectRentImage from "../assets/CodeStorm.png";

const portfolio: IPortfolioDetails[] = [
  {
    media: armyInventoryImage,
    title: "Army Inventory",
    depLink: "",
    githubLink: "https://github.com/samirkhanalofficial/army_inventory",
  },
  {
    media: findMyItemImage,
    title: "Find My Item",
    depLink: "https://findmyitem.samirk.com.np/",
    githubLink: "https://github.com/samirkhanalofficial/findmyitem",
  },
  {
    media: codeStormImage,
    title: "Code Storm",
    depLink: "https://code-storm.vercel.app/",
    githubLink: "https://github.com/samirkhanalofficial/CodeStorm",
  },
  {
    media: connectRentImage,
    title: "Connect Rent",
    depLink: "",
    githubLink: "https://github.com/itsbib/connect-rent",
  },
];
export default function Portfolio() {
  const PortfolioCard = (portfolios: IPortfolioDetails) => (
    <>
      <img className="portfolioCardImage" src={portfolios.media} />
      <h1 className="portfolioCardTitle">{portfolios.title}</h1>
      <div className="portfolioCardDesc">
        <a
          href={portfolios.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Github</button>
        </a>
        <a href={portfolios.depLink} target="_blank" rel="noopener noreferrer">
          <button>Deploy</button>
        </a>
      </div>
    </>
  );
  return (
    <div id="Portfolio">
      <h1 className="portfolioHeader">Projects</h1>
      <div className="portfolioCardSection">
        {portfolio.map((portfolios) => (
          <div className="portfolioCard">
            <PortfolioCard {...portfolios} />
          </div>
        ))}
      </div>
    </div>
  );
}

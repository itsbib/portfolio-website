import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { GrAnnounce } from "react-icons/gr";
import { SiWeb3Dotjs } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

import { IServicesDetails } from "../types/interfaces/services.interface";

const services: IServicesDetails[] = [
  {
    media: <FontAwesomeIcon icon={faLaptopCode} />,
    title: "Full Stack Development",
    desc: "Transforming concepts into functional back-end systems. I specialize in server-side programming, database management, and ensuring seamless communication between the server and the front-end.",
  },

  {
    media: <FontAwesomeIcon icon={faCode} />,
    title: "UI/UX Design",
    desc: "Shaping user experiences through thoughtful design. I specialize in creating intuitive user interfaces, enhancing usability, and focusing on the overall user journey to optimize digital interactions.",
  },

  {
    media: <SiWeb3Dotjs />,
    title: "Web3 Development",
    desc: "Pioneering the future of the web. I specialize in blockchain technology, smart contracts, and decentralized applications (DApps). Building innovative solutions that leverage the power of decentralized networks for a more secure and transparent digital environment.",
  },
  // {
  //   media: <GrAnnounce />,
  //   title: "Digital Marketing",
  //   desc: "Elevating your online presence and engagement. My digital marketing expertise includes strategic planning, social media management, SEO optimization, and data-driven campaigns to help you reach and connect with your target audience.",
  // },
];

const Services = () => {
  const ServicesCard = (service: IServicesDetails) => (
    <>
      <div className="servicesCardHeader">
        <span className="serviceCardIcon"> {service.media}</span>
        <p className="serviceCardTitle">{service.title}</p>
      </div>
      <p className="serviceCardDesc">{service.desc}</p>
    </>
  );

  return (
    <div id="Services" className="services">
      <h1 className="servicesHeader">My Services !</h1>
      <div className="serviceCardSection">
        {services.map((service) => (
          <div className="servicesCard">
            <ServicesCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

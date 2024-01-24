import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Bizzlink's Benefits",
  image: benefitOneImg,
  bullets: [
    {
      title: "Time Savings",
      desc: "Streamlined processes and a user-friendly platform save time for both sellers and buyers in completing business transactions.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Wider Reach",
      desc: "Sellers can showcase their businesses to a broader audience, increasing the chances of finding suitable buyers.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Diverse Opportunities",
      desc: "Buyers gain access to a diverse range of businesses, allowing them to explore various industries and investment opportunities.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Verified Listings",
      desc: "The platform's verification process ensures the accuracy of information, promoting transparency and building trust between parties.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Reviews and Feedback",
      desc: "A feedback system allows users to leave reviews, contributing to the credibility of sellers and the overall trustworthiness of the platform.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export {benefitOne};

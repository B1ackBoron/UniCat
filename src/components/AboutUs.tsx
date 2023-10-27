import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import aboutUs from "../images/aboutImages/aboutUs.svg";
import aboutBreed from "../images/aboutImages/aboutBreed.svg";
import faq from "../images/aboutImages/faq.svg";
import reviews from "../images/aboutImages/reviews.svg";

type Props = {};

const AboutUs = (props: Props) => {
  const aboutUsItems = [
    { label: `About us`, url: `/about-us`, img: aboutUs },
    { label: `About breed`, url: `/about-us/breed`, img: aboutBreed },
    { label: `Reviews`, url: `/about-us/reviews`, img: faq },
    { label: `FAQ`, url: `/about-us/faq`, img: reviews },
  ];

  return (
    <div className="absolute top-[98px] flex flex-row items-center justify-center w-full">
      <div className="flex items-start w-full">
        {aboutUsItems.map(({ url, label, img }, index) => (
          <Link
            key={index}
            href={url}
            className={` w-full h-[240px] inline-flex items-center justify-center gap-6 ${
              index === 0
                ? "bg-secondary1400"
                : index === 1
                ? "bg-bgLightColor"
                : index === 2
                ? "bg-secondary1200"
                : "bg-secondary1100"
            }`}
          >
            <Image
              className="w-[85px] h-[83px] rounded-[85px]"
              src={img}
              alt={label}
            />
            <span className=" text-textLightMode font-zilla text-4xl not-italic font-normal">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

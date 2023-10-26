import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import aboutUs from "../images/aboutImages/aboutUs.svg";

type Props = {};

const AboutUs = (props: Props) => {
  const aboutUsItems = [
    { label: `About us`, url: `/about-us`, img: aboutUs },
    { label: `About breed`, url: `/about-us/breed` },
    { label: `Reviews`, url: `/about-us/reviews` },
    { label: `FAQ`, url: `/about-us/faq` },
  ];

  const pathname = usePathname();
  return (
    <div className="absolute top-[98px]">
      {aboutUsItems.map(({ url, label, img }, index) => (
        <Link
          key={index}
          href={url}
          className={`hover:text-white ${
            url === pathname ? "text-white font-semibold" : "text-gray-500"
          }`}
        >
          <Image src={img} alt={label} />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default AboutUs;

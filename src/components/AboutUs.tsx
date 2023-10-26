import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const AboutUs = (props: Props) => {
  const aboutUsItems = [
    { label: `About us`, url: `/about-us` },
    { label: `About breed`, url: `/about-us/breed` },
    { label: `Reviews`, url: `/about-us/reviews` },
    { label: `FAQ`, url: `/about-us/faq` },
  ];
  const pathname = usePathname();
  return (
    <div className="absolute top-[98px]">
      {aboutUsItems.map(({ url, label }, index) => (
        <Link
          key={index}
          href={url}
          className={`hover:text-white ${
            url === pathname ? "text-white font-semibold" : "text-gray-500"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default AboutUs;

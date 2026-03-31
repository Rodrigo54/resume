import { links } from "database.json";
import Title from "@components/title";

const Links: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-[5px]">
      <Title>Links</Title>
      {links.map((link) => (
        <a
          key={link}
          href={`${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="[font-family:var(--font-body)] text-base font-medium leading-[1.2] break-keep text-[var(--text-color)] no-underline hover:text-[var(--color1-light)]"
        >
          <p>{link}</p>
        </a>
      ))}
    </section>
  );
};

export default Links;

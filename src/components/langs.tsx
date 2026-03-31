import { languages } from "database.json";
import Title from "@components/title";

const Languages: React.FC = () => {
  return (
    <section className="[font-family:var(--font-body)]">
      <Title>Idiomas</Title>
      {languages.map((lang) => (
        <p key={lang} className="[font-family:var(--font-body)] text-base font-medium">
          {lang}
        </p>
      ))}
    </section>
  );
};

export default Languages;

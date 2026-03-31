import { skills } from "database.json";
import { capitalize } from "lodash";
import Title from '@components/title';

const Skills: React.FC = () => {
  return (
    <section className="[font-family:var(--font-body)]">
      <Title>Habilidades</Title>
      {Object.entries(skills).map(([item, list]) => {
        return (
          <p key={item} className="leading-[1.3] my-[0.3rem] mx-auto text-base">
            <span className="[font-family:var(--font-title)] font-extrabold mr-[8px]">
              {capitalize(item)}:
            </span>
            <span className="[font-family:var(--font-body)] font-medium">
              {list.join(", ")}
            </span>
          </p>
        );
      })}
    </section>
  );
};

export default Skills;

import * as S from "./styles";
import { skills } from "database.json";
import { capitalize } from "lodash";
import Title from '@components/title';

const Skills: React.FC = () => {
  return (
    <S.ContentWrapper>
      <Title>Habilidades</Title>
      {Object.entries(skills).map(([item, list]) => {
        return (
          <S.SkillItem key={item}>
            <S.SkillName>{capitalize(item)}:</S.SkillName>
            <S.SkillList>{list.join(", ")}</S.SkillList>
          </S.SkillItem>
        );
      })}
    </S.ContentWrapper>
  );
};

export default Skills;

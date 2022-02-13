import * as S from "./styles";
import { skills } from "database.json";
import { capitalize } from "lodash";
import Title from '@components/title';

const Skills: React.FC = () => {
  return (
    <S.ContentWrapper>
      <Title>Habilidades</Title>
      {Object.entries(skills).map(([item, list], index) => {
        return (
          <S.SkillItem key={index}>
            <S.SkillName>{capitalize(item)}:</S.SkillName>
            <S.SkillList>{list.join(", ")}</S.SkillList>
          </S.SkillItem>
        );
      })}
    </S.ContentWrapper>
  );
};

export default Skills;

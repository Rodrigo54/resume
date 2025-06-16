import * as S from "./styles";
import { languages } from "database.json";
import Title from "@components/title";

const Languages: React.FC = () => {
  return (
    <S.ContentWrapper>
      <Title>Idiomas</Title>
      {languages.map((lang) => (
        <S.Item key={lang}>{lang}</S.Item>
      ))}
    </S.ContentWrapper>
  );
};

export default Languages;

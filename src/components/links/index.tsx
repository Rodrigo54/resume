import * as S from "./styles";
import { links } from "database.json";
import Title from "@components/title";

const Links: React.FC = () => {
  return (
    <S.ContentWrapper>
      <Title>Links</Title>
      {links.map((link, index) => (
        <S.Link
          key={index}
          href={`${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{link}</p>
        </S.Link>
      ))}
    </S.ContentWrapper>
  );
};

export default Links;

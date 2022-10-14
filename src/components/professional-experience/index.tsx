import React from "react";
import * as S from "./styles";
import { CalendarDays as Calendar } from '@styled-icons/fa-regular/CalendarDays';
import { HomeWork } from "@styled-icons/material-rounded/HomeWork";
import { Work } from "@styled-icons/material/Work";
import { jobs } from "database.json";
import { capitalize } from "lodash";
import Title from "@components/title";
import Blockquote from "@components/blockquote";
import extenso from 'extenso';

const ProfessionalExperience: React.FC = () => {
  function dateFormat(date?: string) {
    if (date) {
      const dateObj = new Date(date);
      const stringDate = Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "long",
      }).format(dateObj);
      return <time dateTime={date}>{capitalize(stringDate)}</time>;
    } else {
      return <span>Até o momento</span>;
    }
  }

  return (
    <S.ContentWrapper>
      <Title>Experiências Profissionais</Title>
      {jobs
        .sort((a, b) => b.duration.init.localeCompare(a.duration.init))
        .slice(0, 4)
        .map((item, index) => {
          return (
            <S.WorkWrap key={index}>
              <S.InfoWrap>
                <S.InfoName>
                  <Work size={12} /> {item.job}
                </S.InfoName>
                <S.InfoDate>
                  <Calendar size={12} />
                  {dateFormat(item.duration.init)} -
                  {dateFormat(item.duration.end)}
                </S.InfoDate>
                <S.InfoLocale>
                  <HomeWork size={12} /> {item.locale}
                </S.InfoLocale>
              </S.InfoWrap>
              <Blockquote>{item.description}</Blockquote>
            </S.WorkWrap>
          );
        })}
      <S.InfoFooter>E mais outras {extenso(jobs.length - 4)} experiências profissionais.</S.InfoFooter>
    </S.ContentWrapper>
  );
};

export default ProfessionalExperience;

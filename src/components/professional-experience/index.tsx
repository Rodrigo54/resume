import React from "react";
import * as S from "./styles";
import { CalendarDays as Calendar } from '@styled-icons/fa-regular/CalendarDays';
import { HomeWork } from "@styled-icons/material-rounded/HomeWork";
import { Work } from "@styled-icons/material/Work";
import { jobs } from "database.json";
import Title from "@components/title";
import Blockquote from "@components/blockquote";
import { formatDistance, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import DateFormat from '@components/date-format';

const ProfessionalExperience: React.FC = () => {
  return (
    <S.ContentWrapper>
      <Title>Experiências Profissionais</Title>
      {jobs
        .toSorted((a, b) => b.duration.init.localeCompare(a.duration.init))
        .slice(0, 3)
        .map((item) => {
          const initDate = parse(item.duration.init, 'yyyy-MM-dd', new Date());
          const endDate = item.duration.end ? parse(item.duration.end, 'yyyy-MM-dd', new Date()) : new Date();
          const duration = formatDistance(initDate, endDate, { locale: ptBR });

          return (
            <S.WorkWrap key={`${item.locale}-${item.position}`}>
              <S.InfoWrap>
                <S.InfoName>
                  <HomeWork size={12} /> {item.locale}
                </S.InfoName>
                <S.InfoLocale>
                  <Work size={12} /> {item.position}
                </S.InfoLocale>
                <S.InfoDate>
                  <Calendar size={12} />
                  <DateFormat date={item.duration.init} />
                  {' - '}
                  <DateFormat date={item.duration.end} />
                  {' • '}
                  <span>{duration}</span>
                </S.InfoDate>
              </S.InfoWrap>
              <Blockquote>{item.description}</Blockquote>
            </S.WorkWrap>
          );
        })}
      <S.InfoFooter>E mais outras {jobs.length - 3} experiências profissionais.</S.InfoFooter>
      <S.InfoFooter>Veja no Linkedin todas as experiências profissionais.</S.InfoFooter>
    </S.ContentWrapper>
  );
};

export default ProfessionalExperience;

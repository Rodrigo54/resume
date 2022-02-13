import Title from '@components/title';
import Blockquote from '@components/blockquote';
import { CalendarAlt as Calendar } from '@styled-icons/fa-regular/CalendarAlt';
import { University } from '@styled-icons/fa-solid/University';
import { UserGraduate } from '@styled-icons/fa-solid/UserGraduate';
import { formation } from 'database.json';
import { capitalize } from 'lodash';
import React from 'react';

import * as S from './styles';

const AcademicFormation: React.FC = () => {
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
      <Title>Formação Acadêmica</Title>
      {formation
        .sort((a, b) => b.duration.init.localeCompare(a.duration.init))
        .map((work, index) => {
          return (
            <S.FormationWrap key={index}>
              <S.InfoWrap>
                <S.InfoName>
                  <UserGraduate size={12} /> {work.name}
                </S.InfoName>
                <S.InfoLocale>
                  <University size={12} /> {work.locale}
                </S.InfoLocale>
                <S.InfoDate>
                  <Calendar size={12} />
                  {dateFormat(work.duration.init)} -
                  {dateFormat(work.duration.end)}
                </S.InfoDate>
              </S.InfoWrap>
              <Blockquote>{work.description}</Blockquote>
            </S.FormationWrap>
          );
        })}
    </S.ContentWrapper>
  );
};

export default AcademicFormation;

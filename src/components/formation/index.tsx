import Title from '@components/title';
import Blockquote from '@components/blockquote';
import { CalendarDays as Calendar } from '@styled-icons/fa-regular/CalendarDays';
import { BuildingColumns as University } from '@styled-icons/fa-solid/BuildingColumns';
import { UserGraduate } from '@styled-icons/fa-solid/UserGraduate';
import { formation } from 'database.json';
import DateFormat from '@components/date-format';
import React from 'react';

import * as S from './styles';


const AcademicFormation: React.FC = () => {


  return (
    <S.ContentWrapper>
      <Title>Formação Acadêmica</Title>
      {formation
        .toSorted((a, b) => b.duration.init.localeCompare(a.duration.init))
        .map((work) => {
          return (
            <S.FormationWrap key={work.name}>
              <S.InfoWrap>
                <S.InfoName>
                  <UserGraduate size={12} />
                  <span>{work.name}</span>
                  <S.InfoChip>{work.level}</S.InfoChip>
                </S.InfoName>
                <S.InfoLocale>
                  <University size={12} /> {work.locale}
                </S.InfoLocale>
                <S.InfoDate>
                  <Calendar size={12} />
                  <DateFormat date={work.duration.init} /> -
                  <DateFormat date={work.duration.end} />
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

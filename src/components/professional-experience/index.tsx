import React from 'react';
import * as S from './styles';
import { CalendarAlt as Calendar } from '@styled-icons/fa-regular/CalendarAlt';
import { HomeWork } from '@styled-icons/material-rounded/HomeWork';
import { Work } from '@styled-icons/material/Work';
import { jobs } from 'database.json';
import { capitalize } from 'lodash';

const ProfessionalExperience: React.FC = () => {
  function dateFormat(date?: string) {
    if (date) {
      const dateObj = new Date(date);
      const stringDate = Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long',
      }).format(dateObj);
      return <time dateTime={date}>{capitalize(stringDate)}</time>;
    } else {
      return <span>Até o momento</span>;
    }
  }

  return (
    <S.ContentWrapper>
      <S.Title>Experiências Profissionais</S.Title>
      {jobs.sort((a, b) => b.duration.init.localeCompare(a.duration.init)).slice(0, 4).map(
        (item, index) => {
          return (
            <S.WorkWrap key={index}>
              <S.InfoWrap>
                <S.InfoName>
                  <Work color='rgba(0,0,0,0.6)' size={16} /> {item.job}
                </S.InfoName>
                <S.InfoLocale>
                  <HomeWork color='rgba(0,0,0,0.6)' size={16} /> {item.locale}
                </S.InfoLocale>
                <S.InfoDate>
                  <Calendar color='rgba(0,0,0,0.6)' size={16} />
                  {dateFormat(item.duration.init)} -
                  {dateFormat(item.duration.end)}
                </S.InfoDate>
              </S.InfoWrap>
              <S.Description>{item.description}</S.Description>
            </S.WorkWrap>
          );
        }
      )}
    </S.ContentWrapper>
  );
};

export default ProfessionalExperience;

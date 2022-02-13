import { courses } from 'database.json';
import { capitalize } from 'lodash';
import React from 'react';
import Title from '@components/title';

import * as S from './styles';

const Courses: React.FC = () => {
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

  function numberFormat(number: number) {
    const stringNumber = Intl.NumberFormat("pt-BR").format(number);
    return <span>{stringNumber} Horas/Aulas</span>;
  }

  return (
    <S.ContentWrapper>
      <Title>Cursos</Title>
      {courses
        .sort((a, b) => b.year.localeCompare(a.year))
        .map((course, index) => {
          return (
            <S.CourseWrap
              key={index}
              href={course.link}
              title={course.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.InfoWrap>
                <S.InfoName>{course.name}</S.InfoName>
                <S.InfoDate>
                  {numberFormat(course.duration)}{" "}
                  {course.online ? "( Online )" : "( Presencial )"}
                </S.InfoDate>
                <S.InfoLocale>
                  <span>{course.locale}</span> -
                  <span>
                    Ano: <time>{course.year}</time>
                  </span>
                </S.InfoLocale>
              </S.InfoWrap>
            </S.CourseWrap>
          );
        })}
    </S.ContentWrapper>
  );
};

export default Courses;

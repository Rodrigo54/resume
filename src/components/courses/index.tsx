import { courses } from "database.json";
import React from "react";
import Title from "@components/title";

import * as S from "./styles";

const Courses: React.FC = () => {
  function numberFormat(number: number) {
    const stringNumber = Intl.NumberFormat("pt-BR").format(number);
    return <span>{stringNumber} Horas/Aulas</span>;
  }

  return (
    <S.ContentWrapper>
      <Title>Cursos</Title>
      <S.ListWrapper>
        {courses
          .toSorted((a, b) => b.year.localeCompare(a.year))
          .map((course) => {
            return (
              <S.CourseWrap
                key={course.name}
                href={course.link}
                title={course.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.InfoWrap>
                  <S.InfoName>{course.name}</S.InfoName>
                  <S.InfoDate>
                    {numberFormat(course.duration)}{" "}
                    {course.online ? "(Online)" : "(Presencial)"}
                  </S.InfoDate>
                  <S.InfoLocale>
                    <span>{course.locale}</span>
                    {' - '}
                    <span>
                      Ano: <time>{course.year}</time>
                    </span>
                  </S.InfoLocale>
                </S.InfoWrap>
              </S.CourseWrap>
            );
          })}
      </S.ListWrapper>
    </S.ContentWrapper>
  );
};

export default Courses;

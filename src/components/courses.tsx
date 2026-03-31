import { courses } from "database.json";
import React from "react";
import Title from "@components/title";

const Courses: React.FC = () => {
  function numberFormat(number: number) {
    const stringNumber = Intl.NumberFormat("pt-BR").format(number);
    return <span>{stringNumber} Horas/Aulas</span>;
  }

  return (
    <section className="flex flex-col">
      <Title>Cursos</Title>
      <section className="flex flex-col gap-[10px]">
        {courses
          .toSorted((a, b) => b.year.localeCompare(a.year))
          .map((course) => {
            return (
              <a
                key={course.name}
                href={course.link}
                title={course.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col text-[var(--text-color)] no-underline hover:text-[var(--color1-light)]"
              >
                <div className="flex flex-col gap-[3px]">
                  <h3 className="flex flex-row flex-nowrap items-center gap-[10px] [font-family:var(--font-title)] leading-[1.2] font-normal text-base">
                    {course.name}
                  </h3>
                  <p className="flex flex-row flex-nowrap items-center gap-[5px] leading-none font-extralight text-base [font-family:var(--font-body)]">
                    {numberFormat(course.duration)}{" "}
                    {course.online ? "(Online)" : "(Presencial)"}
                  </p>
                  <p className="flex flex-row flex-nowrap items-center gap-[5px] [font-family:var(--font-body)] leading-none font-light text-base text-left">
                    <span>{course.locale}</span>
                    {' - '}
                    <span>
                      Ano: <time>{course.year}</time>
                    </span>
                  </p>
                </div>
              </a>
            );
          })}
      </section>
    </section>
  );
};

export default Courses;

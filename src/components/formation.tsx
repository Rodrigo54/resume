import Title from '@components/title';
import Blockquote from '@components/blockquote';
import { CalendarDays as Calendar } from '@styled-icons/fa-regular/CalendarDays';
import { BuildingColumns as University } from '@styled-icons/fa-solid/BuildingColumns';
import { UserGraduate } from '@styled-icons/fa-solid/UserGraduate';
import { formation } from 'database.json';
import DateFormat from '@components/date-format';
import React from 'react';

const AcademicFormation: React.FC = () => {
  return (
    <section className="[font-family:var(--font-body)] flex flex-col gap-[5px]">
      <Title>Formação Acadêmica</Title>
      {formation
        .toSorted((a, b) => b.duration.init.localeCompare(a.duration.init))
        .map((work) => {
          return (
            <section key={work.name} className="flex flex-col">
              <div className="flex flex-col gap-[5px]">
                <h3 className="flex flex-row flex-nowrap items-center gap-[10px] [font-family:var(--font-title)] leading-none font-medium text-base">
                  <UserGraduate size={12} />
                  <span>{work.name}</span>
                  <span
                    className="text-[0.9rem] rounded-[5px] text-[var(--color1-shade)] p-[5px]"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color1-light), white 60%)' }}
                  >
                    {work.level}
                  </span>
                </h3>
                <p className="flex flex-row flex-nowrap items-center gap-[10px] [font-family:var(--font-body)] leading-none font-extralight text-base">
                  <University size={12} /> {work.locale}
                </p>
                <p className="flex flex-row flex-nowrap items-center gap-[10px] [font-family:var(--font-body)] leading-none font-extralight text-base">
                  <Calendar size={12} />
                  <DateFormat date={work.duration.init} /> -
                  <DateFormat date={work.duration.end} />
                </p>
              </div>
              <Blockquote>{work.description}</Blockquote>
            </section>
          );
        })}
    </section>
  );
};

export default AcademicFormation;

import React from "react";
import { CalendarDays as Calendar } from '@styled-icons/fa-regular/CalendarDays';
import { HomeWork } from "@styled-icons/material-rounded/HomeWork";
import { Work } from "@styled-icons/material/Work";
import { jobs } from "database.json";
import Title from "@components/title";
import Blockquote from "@components/blockquote";
import { formatDistance, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import DateFormat from '@components/date-format';

const infoRow = "flex flex-row flex-nowrap items-center gap-[10px] [font-family:var(--font-body)] leading-none font-extralight text-base";

const ProfessionalExperience: React.FC = () => {
  return (
    <section className="[font-family:var(--font-body)] flex flex-col gap-[5px]">
      <Title>Experiências Profissionais</Title>
      {jobs
        .toSorted((a, b) => b.duration.init.localeCompare(a.duration.init))
        .slice(0, 3)
        .map((item) => {
          const initDate = parse(item.duration.init, 'yyyy-MM-dd', new Date());
          const endDate = item.duration.end ? parse(item.duration.end, 'yyyy-MM-dd', new Date()) : new Date();
          const duration = formatDistance(initDate, endDate, { locale: ptBR });

          return (
            <section key={`${item.locale}-${item.position}`} className="flex flex-col">
              <div className="flex flex-col gap-[5px]">
                <h3 className="flex flex-row flex-nowrap items-center gap-[10px] [font-family:var(--font-title)] text-[var(--text-color)] leading-none font-medium text-base">
                  <HomeWork size={12} /> {item.locale}
                </h3>
                <p className={infoRow}>
                  <Work size={12} /> {item.position}
                </p>
                <p className={infoRow}>
                  <Calendar size={12} />
                  <DateFormat date={item.duration.init} />
                  {' - '}
                  <DateFormat date={item.duration.end} />
                  {' • '}
                  <span>{duration}</span>
                </p>
              </div>
              <Blockquote>{item.description}</Blockquote>
            </section>
          );
        })}
      <p className={infoRow}>E mais outras {jobs.length - 3} experiências profissionais.</p>
      <p className={infoRow}>Veja no Linkedin todas as experiências profissionais.</p>
    </section>
  );
};

export default ProfessionalExperience;

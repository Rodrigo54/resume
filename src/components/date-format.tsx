import { ptBR } from 'date-fns/locale';
import { format, parse } from 'date-fns';
import { capitalize } from 'lodash';
import React from 'react';

const DateFormat: React.FC<{ date?: string }> = ({ date }) => {
  if (date) {
    const dateObj = parse(date, 'yyyy-MM-dd', new Date());
    const stringDate = format(dateObj, `MMMM 'de' yyyy`, { locale: ptBR });
    return <time dateTime={date}>{capitalize(stringDate)}</time>;
  } else {
    return <span>Até o momento</span>;
  }
}

export default DateFormat;

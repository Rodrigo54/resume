import React from 'react';

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2 className="[font-family:var(--font-title)] text-[var(--color1)] break-words tracking-[0.01rem] leading-none font-extrabold text-[1.3rem] my-[6px]">
    {children}
  </h2>
);

export default Title;

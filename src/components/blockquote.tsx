import React from 'react';

const Blockquote: React.FC<React.PropsWithChildren> = ({ children }) => (
  <blockquote className="border-l-[0.3rem] border-l-[var(--color1-light)] border-solid py-0 px-[15px] my-[8px] mx-[4px] [font-family:var(--font-body)] leading-[1.2] font-extralight text-base italic text-justify whitespace-normal hyphens-auto indent-4">
    {children}
  </blockquote>
);

export default Blockquote;

import type { FC } from 'react';

interface CardProps {
  data: {
    title: string;
    description: string;
    backgroundColor: string;
  };
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className={`${data.backgroundColor} p-4 rounded-[16px] min-h-[200px]`}>
      <h3 className="leading-[32.78px] text-[24px] font-bold text-white">{data.title}</h3>
      <p className="leading-[20.43px] text-[12px] font-medium text-white mt-4">{data.description}</p>
    </div>
  );
};

export default Card;
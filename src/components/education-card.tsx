import React from "react";

interface Props {
  name: string;
  major: string;
  year: string;
  description: string;
  bgColor?: string; // opsional, using "?"
}

const EducationCard = (props: Props) => {
    const { name, major, year, description, bgColor } = props;

    return (
      <div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
        <div className="flex flex-row justify-between">
          <label>{name}</label>
          <div>{year}</div>
        </div>
        <p className="text-justify">{major}</p>
        <p className="text-justify">{description}</p>
      </div>
    );
};

export default EducationCard;

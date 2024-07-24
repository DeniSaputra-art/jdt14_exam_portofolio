import Avatar from "../../assets/tupai2.webp";
import EducationCard from "../../components/education-card";
import ProjectCard from "../../components/project-card";
import { useState } from "react";

interface Projects {
  name: string;
  year: string;
  description: string;
}

interface Education {
  name: string;
  year: string;
  major: string;
  description: string;
}

const LandingPage = () => {
  const [increment, setIncrement] = useState<number>(0);

  const [toggle, setToggle] = useState<boolean>(false);

  const projects: Projects[] = [
    {
      name: "Project A",
      year: "2019 - 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      name: "Project B",
      year: "2021 - 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      name: "Project C",
      year: "2022 - 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
  ];

  const educations: Education[] = [
    {
      name: "SMAN 1 SUKOHARJO",
      major: "IPA",
      year: "2016 -2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
    },
    {
      name: "GUNADARMA UNIVERSITY",
      major: "Informaticts",
      year: "2019 - 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat."
    }
  ]

  const handleIncrement = () => {
    setIncrement((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setIncrement((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <p>{increment} Increment</p>
        <div className="flex flex-row gap-5">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        {toggle ? <div>show hide component</div> : <></>}
        
        <button onClick={handleToggle}>{toggle ? "hide" : "show"}</button>
      </div>

      <section className="flex flex-row justify-around items-center m-5">
        <div className="flex flex-col">
          <h1>Hello World !</h1>
          <p className="font-semibold">My Name Squirrel</p>
        </div>
        <img src={Avatar} alt="Tupai" className="w-96 rounded-md" />
      </section>

      <section className="flex flex-col px-5 py-10 bg-gray-100 gap-5">
        <label className="font-semibold text-lg">Summary</label>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="font-semibold text-lg">Projects</label>
        {projects.map((item: Projects, index: number) => (
          <ProjectCard
            key={index}
            name={item.name}
            year={item.year}
            description={item.description}
            bgColor={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
          />
        ))}
      </section>

      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="font-semibold text-lg">Educations</label>
        {educations.map((item: Education, index: number) => (
          <EducationCard
            key={index}
            name={item.name}
            year={item.year}
            major={item.major}
            description={item.description}
            bgColor={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
          />
        ))}
      </section>
    </div>
  );
};

export default LandingPage;

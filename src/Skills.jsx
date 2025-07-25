import React from "react";
import CircularProgressBar from "./CircularProgressBar";
import styles from "./Skills.module.css";

function Skills() {
  const skillData = [
    { label: "HTML", percent: 98, lastWeek: "35%", lastMonth: "70%" },
    { label: "CSS", percent: 95, lastWeek: "30%", lastMonth: "68%" },
    { label: "Bootstrap5", percent: 93, lastWeek: "25%", lastMonth: "55%" },
    { label: "Javascript", percent: 80, lastWeek: "29%", lastMonth: "60%" },
    { label: "React.js", percent: 88, lastWeek: "26%", lastMonth: "57%" },
    { label: "MySql", percent: 87, lastWeek: "34%", lastMonth: "69%" },
  ];

  return (
    <section
      id="skills"
      className={styles.skillsSection}
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-delay="700"
    >
      <div className="container py-1">
        <h6 className={`text-center ${styles.subHeading}`}>SKILLS</h6>
        <h2 className={`text-center fw-bold ${styles.heading}`}>My Skills</h2>
        <p className={`text-center mb-5 ${styles.description}`}>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {skillData.map((skill, index) => (
            <div className="col" key={index}>
              <CircularProgressBar
                percent={skill.percent}
                label={skill.label}
                lastWeek={skill.lastWeek}
                lastMonth={skill.lastMonth}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

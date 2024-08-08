import React from "react";
import { TimeLine, TimeLineItem } from "../utils/ExpTimeLine";

const Experience = () => {
  return (
    <TimeLine>
      <TimeLineItem active>
        <TimeLineItem.Title>
          <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
            System Engineer at Tata Consultancy Services
          </span>{" "}
          • <span className="text-neutral-200">Jan 2024 - Present</span>
        </TimeLineItem.Title>
        <TimeLineItem.Description>
          Working as a Test Analyst/Functional Consultant For EDF Energy UK in
          IFS Erp Solutions.Tech Stack Learned: Jira,React,Postman
        </TimeLineItem.Description>
      </TimeLineItem>

      <TimeLineItem last>
        <TimeLineItem.Title>
          <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
            Assistant System Engineer at Tata Consultancy Services
          </span>{" "}
          • <span className="text-neutral-200">Dec 2021 - Dec 2023</span>
        </TimeLineItem.Title>
        <TimeLineItem.Description>
          Worked as Support Executive for EDF Energy UK,Learned Tech Stacks:Jira
          Zephyr, Agile Methodology, Best Practices,Team Management.
        </TimeLineItem.Description>
      </TimeLineItem>
    </TimeLine>
  );
};

export default Experience;

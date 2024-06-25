/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "src/images/uzh-background-citiy-campus.jpg";

const imageAltText = "View of the city campus of the University of Zurich";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "PhD student in political science investigating the potential for emission reduction in the context of academic aviation.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Political Science",
  "Evaluation",
  "Academic Aviation",
  "Carbon Taxes",
  "RStudio",
  "RMarkdown",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Till Roost studied political science and sociology at the University of Zurich. Before completing his bachelor's degree in 2019, he worked as a tutor at the Department of Political Science at the chairs of Comparative Politics and Political Methodology. After an excursion into market research, he did his master’s degree at ETH Zurich at the Center for Comparative and International Studies. During his studies, he worked as a research assistant for the Swiss Job Market Monitor at the Department of Sociology of the University of Zurich. After graduating in 2022, he worked at the Academic Department of Military Sociology at the Military Academy at ETH Zurich and is co-author of the study «Security 2023». Since February 2024, he is a doctoral candidate at the chair of Prof. Dr. Thomas Widmer.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

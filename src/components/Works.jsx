import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import MyButton from "../components/MyButton";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div onClick={() => window.open(demo_link, "_blank")}>
          <MyButton>{demo_link}</MyButton>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // Slider settings with responsiveness
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3, // Default to 3 slides
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280, // Large screen (desktops)
        settings: {
          slidesToShow: 3, // Show 3 slides on large screens
        },
      },
      {
        breakpoint: 1025, // Devices from 1025px to 1210px (larger tablets, medium screens)
        settings: {
          slidesToShow: 1, // Show 2 slides on medium-sized devices
          centerMode: false, // Disable center mode for better fitting
        },
      },
      {
        breakpoint: 768, // Mobile and small tablets
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          centerMode: false, // Disable centering on mobile
        },
      },
      {
        breakpoint: 480, // Small mobile phones
        settings: {
          slidesToShow: 1, // 1 slide on small mobile devices
          centerMode: false, // Disable centering for better fitting
        },
      },
    ],
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I have led digital marketing campaigns, including SEO, SEM, and social media strategies, to boost online presence and engage audiences, working with Tamil influencers like Mermer and Idi Minnal Kadhal. I also managed brand promotions for clients such as Sravana Store Sathiya and Zooby Gold. As a Junior Tech Lead at Bliss Consultancy, I oversaw technical projects, ensuring smooth execution and compliance with industry standards. Additionally, I successfully managed the Ayushman Bharat Yojana project, leading a team to improve healthcare access across 27 panchayats. My experience also includes designing and optimizing websites, enhancing user experience, and ensuring responsive, user-friendly interfaces.
        </motion.p>
      </div>

      {/* Add a wrapper div around Slider */}
      <div className="mt-20 w-full">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

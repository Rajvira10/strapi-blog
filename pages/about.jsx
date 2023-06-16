import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <Layout text="/about">
      <div className="mt-10 text-black relative w-7/12 -right-2 top-10 lg:top-0 text-md font-normal">
        My name is Rajvir Ahmed Shuvo and I am a Fullstack Web Developer and
        Computer Science student in{" "}
        <Link href="https://www.bracu.ac.bd/" className="text-blue-600">
          Brac University
        </Link>{" "}
        from Dhaka, Bangladesh.
        <br /> I have worked as a freelancer on Fiverr for over a year and have
        worked on many projects for different clients with different tech stacks
        like PHP and NextJS.
      </div>
      <div className="mt-1 text-black relative w-7/12 -right-2 top-10 lg:top-0 text-md font-normal">
        I have also worked as a web developer for a local company for about 3
        months. After that, I started doing a remote internship for 2 months in
        a company called Meritspace in India and worked as a NextJS FullStack
        Developer. I enjoyed working there with NextJS and because of that, i
        pursued my interest in NextJS, GraphQL and TypeScript. I have also
        worked on many{" "}
        <Link href="/projects" className="text-blue-800">
          personal projects{" "}
        </Link>
        in the meantime. I then joined the{" "}
        <Link href="https://innovation.brac.net/" className="text-blue-800">
          Social Innovation Lab
        </Link>{" "}
        of the biggest NGO in the world, BRAC as a web developer intern and
        worked there for 6 months.
      </div>
      <div className="mt-1 mb-8 text-black relative w-7/12 -right-2 top-10 lg:top-0 text-md font-normal">
        Meanwhile, I am also pursuing a Bachelors in Computer Science from Brac
        University and working on my thesis on{" "}
        <span className="text-red-500">
          "Automatic Subtitle Generation from Bangla Audio"
        </span>
        . Alongside web development my interests are in the field of NLP and
        Computer Vision. I have worked with LLMs like GPT-3 and computer vision
        models like YOLOv8 for my personal projects.
      </div>

      <div className="mt-1 mb-16 text-black relative w-7/12 -right-2 top-10 lg:top-0 ">
        <span className="text-2xl font-bold">Important Links and Contacts</span>
        <ul className="ml-5 mt-2 flex flex-col">
          <Link
            href="https://www.linkedin.com/in/rajvir-ahmed-18509a207/"
            className="hover:scale-105 duration-500"
          >
            {" "}
            <span className="mr-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            LinkedIn
          </Link>
          <Link
            href="mailto:rajvirahmedshuvo10@gmail.com"
            className="hover:scale-105 duration-500"
          >
            {" "}
            <span className="mr-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            Email
          </Link>
          <Link
            href="https://github.com/rajvira10"
            className="hover:scale-105 duration-500"
          >
            {" "}
            <span className="mr-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            Github
          </Link>
        </ul>
      </div>
    </Layout>
  );
};

export default About;

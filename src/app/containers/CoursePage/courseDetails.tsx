import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Pareekshan2 from "../../../assets/images2/Pareekshan2.0.jpeg";
import Pareekshan1 from "../../../assets/images2/Pareekshan1.0.jpeg";
import EssayModule from "../../../assets/images2/EssayModuleNov21.jpg";

const SectionContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:flex-row
      md:m-20
      m-4
      mt-0
  `};
`;

const CourseWrapper = styled.div`
  ${tw`
  `};
`;


const CourseContainer = styled.div`
  ${tw`
      flex
      flex-col
      m-2
      md:m-10
      p-2
      md:p-4
      rounded-md
      bg-blue-50
      shadow-md

  `};
`;

const ThumbnailContainer = styled.div`
//   widht: 100%
  height: 35em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NameContainer = styled.h3`
  ${tw`
        md:text-2xl
        text-xl
        text-center
        font-bold
        text-black
        mt-1
        mb-1
    `};
`;

const InfoTextContainer = styled.h6`
  ${tw`
       text-gray-800
       md:text-lg
       text-center
       mt-3
    `};
`;

export function CoursesInDetails() {
  return (
    <SectionContainer>
        <CourseWrapper> 
      <CourseContainer>
        <NameContainer>PAREEKSHAN 1.0</NameContainer>
        <ThumbnailContainer>
          <img src={Pareekshan1} alt="pareekshan1.0" />
        </ThumbnailContainer>
        <InfoTextContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eligendi labore, molestiae, nobis corporis reiciendis maiores eveniet
          dolore id libero est sunt culpa, fuga facere iure non quidem voluptas
          debitis!
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>

      <CourseWrapper>
      <CourseContainer>
        <NameContainer>PAREEKSHAN 2.0</NameContainer>
        <ThumbnailContainer>
          <img src={Pareekshan2} alt="Pareekshan2.0" />
        </ThumbnailContainer>
        <InfoTextContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eligendi labore, molestiae, nobis corporis reiciendis maiores eveniet
          dolore id libero est sunt culpa, fuga facere iure non quidem voluptas
          debitis!
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>

        <CourseWrapper>
      <CourseContainer>
        <NameContainer>Essay Module</NameContainer>
        <ThumbnailContainer>
          <img src={EssayModule} alt="EssayModule" />
        </ThumbnailContainer>
        <InfoTextContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eligendi labore, molestiae, nobis corporis reiciendis maiores eveniet
          dolore id libero est sunt culpa, fuga facere iure non quidem voluptas
          debitis!
        </InfoTextContainer>
      </CourseContainer>
      </CourseWrapper>

    </SectionContainer>
  );
}

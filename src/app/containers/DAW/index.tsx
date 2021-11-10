import React from "react";
import { NavBar } from "../../components/navbar";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { TopSection } from "../HomePage/topSection";
import { allQueAndComponentArray } from "./allQueAnsArray";
import { FeedbackAndAnswers } from "./feedbackAns";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import * as Scroll from "react-scroll";
import { Button } from "../../components/button";

const PageContainer = styled.div`
  ${tw`
w-full
h-full
flex
flex-col
items-center
// overflow-x-hidden
`}
`;

const SectionContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:flex-row
  `};
`;

const QueContainer = styled.div`
  ${tw`
      w-full
      md:w-3/5
      lg:w-3/5
      flex
      flex-col
      p-4
  `};
`;

const QueDayContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
      // shadow-md
      hover:bg-yellow-100
      cursor-pointer
      m-3
      rounded-md
`};
`;

const QueIndividualContainer = styled.div`
  ${tw`
      p-2
      font-semibold
      text-base
      text-gray-600
      ml-4
`};
`;

const DayTitleContainer = styled.div`
  ${tw`
      pt-2
      text-center
      font-bold
      text-lg
      text-red-500
`};
`;

const FeedBackContainer = styled.div`
  ${tw`
      w-full
      md:w-2/5
      flex
      flex-col
      p-4
      // mt-24
  `};
`;

const ButtonContainer = styled.div`
  ${tw`
    w-full
    text-center
`};
`;

export function DAW() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [showAns, setShowAns] = React.useState(false);
  const [day, setDay] = React.useState("");

  var Element = Scroll.Element;
  var scroller = Scroll.scroller;

  const handleShow = (el: any) => {
    setDay(el.Day);
    setShowAns(true);
    isMobile &&
      scroller.scrollTo("myScrollToElement", {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 0,
      });
  };

  const goToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  return (
    <PageContainer>
      <NavBar />
      <SectionContainer>
        <QueContainer>
          {allQueAndComponentArray.map((el) => {
            return (
              <QueDayContainer onClick={() => handleShow(el)}>
                <DayTitleContainer>{el.Day}</DayTitleContainer>

                <QueIndividualContainer>{el.Question}</QueIndividualContainer>
              </QueDayContainer>
            );
          })}
        </QueContainer>

        <FeedBackContainer>

        <Element name="myScrollToElement">
            {showAns && <FeedbackAndAnswers day={day} />}
        </Element>
        </FeedBackContainer>

      </SectionContainer>

      {isMobile && (
        <ButtonContainer onClick={goToTop}>
          <Button text="Back To Top" />
        </ButtonContainer>
      )}

      <Footer />
    </PageContainer>
  );
}

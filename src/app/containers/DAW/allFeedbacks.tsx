import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionContainer = styled.div`
  ${tw`
flex
flex-col
items-center
justify-center
`}
`;

const Title = styled.h1`
  ${tw`
        text-center
        text-black
        text-xl
        mt-6
        mb-8
        md:text-2xl
        font-medium
        md:font-black
        md:leading-normal
    `};
`;

const ListContainer = styled.ul`
  ${tw`
            flex
            flex-col
            mb-7
            list-decimal
            list-inside
            
        `};
`;

const ListItem = styled.li`
  ${tw`
        // mb-3
    `};
`;

const GeneralTextContainer = styled.li`
  ${tw`
        text-base
        list-none
        mb-5
        tracking-wide
        font-semibold
    `};
`;

const ReqNotReqContainer = styled.li`
  ${tw`
        text-base
        text-red-500
        list-none
        mb-5
        tracking-wide
        font-semibold
    `};
`;



export function FeedbackDayOne() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          Dont give obvious start. Try to draw broader picture and context of
          the question in the beginning.
        </ListItem>
        <ListItem>
          Provide updated data. Most of you were providing 2011 census data
          which is almost 10 years old. Refer the data published by NITI AAYOG,
          NFHS-4/5 etc.
        </ListItem>
        <ListItem>
          Read question carefully. Question asks to write reasons for adverse
          sex ratio on prosperous states. Dont write general causes for low sex
          ratio. Stick to the demand of the question.
        </ListItem>
        <ListItem>
          Read the instructive word of the question. Here it is “Give
          Arguments”. Don’t just list them down. Elaborate each point in 20-25
          words
        </ListItem>
        <ListItem>
          Give a proper optimistic conclusion as per the requirement of the
          question.
        </ListItem>
        <ListItem>
          Include examples, case studies, diagrams, maps, charts etc. in your
          answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDayTwo() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          While writing data regarding social aspects, try to provide Indian
          sources. Data from international sources like FAO for feminisation of
          agriculture sound very distant one. Indian organisations can measure
          ground reality accurately.
        </ListItem>
        <ListItem>
          Many of you have mentioned data which shows families headed by women.
          But it is not the requirement of the question. Mention data related to
          feminisation of agriculture only.
        </ListItem>
        <ListItem>
          Migration and poverty have direct relation with the economic aspect.
          Dont categorised them into socio-cultural aspects.
        </ListItem>
        <ListItem>
          Updated aspects like COVID-19 can be added to your answer.
        </ListItem>
        <ListItem>
          Dont write unnecessary information like problems faced by women due to
          feminisation of agriculture
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDayThree() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was trickier one. After reading the question in the
        first instance it sounds very easy one. But once you start writing the
        answer many of you might have faced the mental blockade. Welcome to UPSC
        guys!!! <br /> Unfortunately not a single answer met all the
        requirements of the question. Above posted answers are somewhat closer
        to comprehensive answer. <br />
        While attempting core society based questions, content is never a
        problem for the candidate. Almost everyone had enough content to write
        an answer which can fetch good marks. The key lies in the structuring
        part. <br /> Use of proper headings and subheadings play deciding factor
        in such question. So I’ll suggest you to take some time to frame a
        structure for your answers before writing them down. You can use the
        following structure for this question:- <br />
        Here is some more afterthought : <br />
        You can simply mention that, in older times joint families were
        preferred as economics of family used to revolve around the agriculture
        and agriculture needs labours and has less mobility and hence there were
        emphasis on having joint family. But with changing time dependence of
        agriculture is rapidly declining. Job mobility through transfers has
        increase and this changed economic scenario has led to the end of life
        cycle of joint family.
        <br /> While giving conclusion, you can say that:- Though economics has
        compelled us to shift towards nuclear families we still cherish the
        ethos of joint family due to our social values. For example, we still
        have occasional get togethers during festivals, marriages and other
        family events. We are always in touch with our family members through
        technology. In short roots of joint family system are still there, they
        have changed from conventional to virtual ones.
      </GeneralTextContainer>
      <ListContainer>
        <ListItem>
          Economic factors determining the life cycle of Joint family (dont just
          list them down, DISCUSS them) 50-60 words
        </ListItem>
        <ListItem>
          Social factors determining the life cycle of joint family (restrict it
          to 20-30 words
        </ListItem>
        <ListItem>
          State the reason why economic factors outweigh social factors ( This
          is the most important link in this question and is missing in all
          answer) 15-25 words
        </ListItem>
        <ListItem>Conclude accordingly 20-30 words</ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDayFour() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          Still many of you are starting your answer with the definition of
          poverty or population. Avoid it.
        </ListItem>
        <ListItem>
          Dont write causes of poverty and population growth. It is not asked.
          Link between poverty and population is asked in the question.
        </ListItem>
        <ListItem>
          Dont write unnecessary information regarding causes and solutions to
          the poverty and population growth.
        </ListItem>
        <ListItem>
          Most of you have done the examine part well. But only 4 copies have
          understood the meaning of Critically.
        </ListItem>
        <ListItem>
          There is difference between ‘criticism’ and ‘critically’
        </ListItem>
        <ListItem>
          You can add flow chart, map to this question to get more marks. But
          very few of you have done that.
        </ListItem>
        <ListItem>Critically means give your opinion.</ListItem>
        <ListItem>
          Giving opinion does not mean to find the balance. You need to take a
          stand.
        </ListItem>
        <ListItem>
          Never give way forward, solution type conclusion to this type of
          question. Your opinion should be your conclusion.
        </ListItem>
        <ListItem>
          If you are not agreeing with the statement in the question then also
          it is fine with Critically type of question. Just you need to give
          satisfactory explanation.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDayFive() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          Give detailed elaborative explanation. It involves the the component
          of HOW and WHAT along with suitable examples.
        </ListItem>
        <ListItem>
          For example, in this question DESCRIBE Cultural elements which means
          HOW cultural elements bring on the diversity in India and give their
          examples.
        </ListItem>
        <ListItem>
          No need to go for positive/negative aspect of it. Keep it simple.
        </ListItem>
        <ListItem>
          Describe is the simplest directive word which required you tell the
          things without giving your opinion or criticism.
        </ListItem>
        <ListItem>
          RATE THE SIGNIFICANCE is the most crucial part of this question. It
          means you have to rate/rank the cultural elements in forging national
          identity.
        </ListItem>
        <ListItem>
          Its like you rate the product on Amazon. If you like the product you
          rate it more. Similarly if you think any particular aspect is more
          important over another rate it accordingly. But this does not mean
          that you should give ratings like 9/10 or 2/10.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDaySix() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          We always study economy from prelims point of view and never pay
          attention the writing aspect of it. This brings casual, vague and
          non-formal approach in our writing.
        </ListItem>
        <ListItem>
          Every subject of UPSC has separate demand and we need to understand
          that demand. Economy answers demand technical words in your answers
          along with latest data/facts. If you can bring in some graphs and
          charts as mentioned in Economic Survey then its always the best thing
          to do.
        </ListItem>
        <ListItem>
          Whenever UPSC asks direct question like “What is the meaning”, always
          start with the definition. And then provide data. These type of
          questions are the simplest one to answer.
        </ListItem>
        <ListItem>
          Question was divided into two halves. First half requires you to write
          about tax expenditure. Almost everyone has written well here. But dont
          just stop at the definition. As it is the half prt of the question,
          you need to write atleast 60-70 words about it.
        </ListItem>
        <ListItem>
          Second half is the most crucial part which demands you to write about
          how tax expenditure in housing sector impacts budgetary policies. Here
          you dont have to mention housing policies only. You need to throw
          light on some other budget sectors like investment, lending
          strategies, revenue expenditure etc.
        </ListItem>
        <ListItem>
          Provide conclusion in which you should not be criticising the
          tex-expenditure. It is for good only. You need to provide a solution
          in such way that your social sectors should get benefits without
          affecting the government tax revenues.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay7() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          While giving start to this question try to incorporate unemployment
          and growth related data simultaneously. Many of you are just giving
          one data and missing another. Context should be developed at the start
          with respect to both.
        </ListItem>
        <ListItem>
          Main body should contain status of joblessness in India and then
          reasons for joblessness. Many of you are just writing data on
          joblessness and have missed the second part.
        </ListItem>
        <ListItem>
          Reasons for jobless growth is the most important aspect of this
          question. Those who have written the reasons, many of them have failed
          to elaborate them.
        </ListItem>
        <ListItem>
          Instruction word here is ARGUE. Dont just list down the reasons, argue
          them. Argument means give statements, data, facts in support or in
          oppose of it. But here Jobless growth is the reality and its a
          absolute truth. So dont give opposing arguments to reality/absolute
          truths.
        </ListItem>
        <ListItem>
          Whenever you write any issue/problem in your answer always provide
          solution to it. Remember that we are going to be politicians whose job
          is to find flaws. We are going to be future bureaucrats and our job is
          going to give solution to problems. Thus, always give solution in the
          end if you see a problem.
        </ListItem>
        <ListItem>
          Question is DO YOU AGREE? Dont start with YES I AGREE. It gives very
          wrong impression. Generally we are supposed to make our opinions after
          deep analysis. Before analysing things if you are giving your opinion
          in the beginning itself, then it shows prejudiced mind of the a
          candidate. And UPSC looks for impartial minds. Such questions are
          there to judge your personality and thought process.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay8() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was asking you to give your opinion whether India can
        become a developed country without strong industrial base. We all know
        that we cannot become a developed nation unless we have strong
        foundations. <br /> But while writing answer you should give your
        opinion in a much milder way. Don’t say directly that NO, India cannot
        be a developed nation without industrial base. <br />
        Try to explore both the sides. There are nations who are developed
        without having strong industrial base, like Singapore, Switzerland. So
        you can mention in your conclusion that India can develop as we have
        seen other countries do. But these countries are comparatively smaller
        and are socio-economically homogenous. Hence development without
        industrial base can survive there. And looking at the India’s
        socio-economic landscape, to sustain the development, we need strong
        Industrial base. <br /> Always try to bring optimism and sense of
        non-extreme views in your conclusions. Many of you have missed this part
        and hence have lost one mark.
      </GeneralTextContainer>
    </SectionContainer>
  );
}

export function FeedbackDay9() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          Start the answer by giving greater context around the question.
        </ListItem>
        <ListItem>
          Your answer should be clearly divided into requirements and status of
          gender budgeting in India. Give equal weightage to both parts.
        </ListItem>
        <ListItem>
          Maintain the flow of the question in your answer, that is first
          mention requirements and then go for status. Generally flow of the
          questions should be followed.
        </ListItem>
        <ListItem>
          Many of you are facing the dilemma whether to write requirements or
          needs of gender budgeting. In exam also you will face such dilemmas.
          So rather than skipping this part, you can smartly use the heading
          like “Needs and requirements of gender budgeting in India”. Be smart.
        </ListItem>
        <ListItem>
          Always give full heading, don’t just write Needs, Requirements or
          Status
        </ListItem>
        <ListItem>
          After mentioning the status of gender budgeting throw some light on
          drawbacks and lacuna of gender budgeting in India. Or you can
          simultaneously provide data and find drawbacks of gender budgeting
          process.
        </ListItem>
        <ListItem>Don’t go into the details of factual data of budget</ListItem>
        <ListItem>Conclude accordingly with optimistic vision</ListItem>
      </ListContainer>
    </SectionContainer>
  );
}



export function FeedbackDay10() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ReqNotReqContainer>
            What was not required ? 
           </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Dont give definitions of protectionism, currency manipulation and
          macroeconomic stability
        </ListItem>
        <ListItem>
          Dont explain the protectionist and currency manipulative policies
          separately. Mention those policies while explaining their impact on
          Macroeconomic stability of India.
        </ListItem>
        <ListItem>
          Dont mention why these policy decisions are taken by countries.
        </ListItem>
        <ListItem>
          Dont give your opinion about these policies in the beginning. Show
          their impact on India and then only give your opinion after detail
          analysis.
        </ListItem>
        <ListItem>
          Focus on MACROECONOMIC stability of India. Dont write general impacts
          on India. It wont give you any marks.
        </ListItem>
        <ListItem>
          Whenever you are talking about impacts, mention postitive impacts
          first.
        </ListItem>
        <ListItem>
          Question is about other countries’ policies on India and not on
          India’s protectionist policies on India.
        </ListItem>
        <ListItem>
          Dont entirely focus on China and USA. Give diversified examples like
          BREXIT, RCEP, multilateral to bilateral shift, failure of WTO etc.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer> 
            What should be the approach ? 
      </ReqNotReqContainer>

      <ListContainer>
        <ListItem>
          Start with giving the greater context around the question, which is
          anti-globalisation wave and trade wars.
        </ListItem>
        <ListItem>
          In main body, mention positive and negative impacts of global
          protectionist and currency manipulative practices on macroeconomic
          stability of India. You can divide impacts into short term-long term
          as well. But not both. (We’ll share model answers. You can get the
          content from there).
        </ListItem>
        <ListItem>
          Dont go on listing the impacts. Explain those impacts. UPSC never
          gives mark for big lists. Reduce you points to 4/5 but give quality
          and to the point precise explanation.
        </ListItem>
        <ListItem>
          Conclude accordingly as per you analysis. Generally these policies are
          harmful for India in longer run. So in conclusion mention how are we
          going to face it. Schemes like Atmanirbhar Bharat are right steps in
          right direction.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay11() {
    return (
      <SectionContainer>
        <Title>General Feedback</Title>
        <ListContainer>
          <ListItem></ListItem>
        </ListContainer>
      </SectionContainer>
    );
  }

export function FeedbackDay12() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay13() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay14() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay15() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay16() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay17() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay18() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay19() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay20() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay21() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay22() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay23() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay24() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay25() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay26() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay27() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay28() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay29() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay30() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay31() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay32() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay33() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay34() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay35() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay36() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay37() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay38() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay39() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay40() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay41() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay42() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay43() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay44() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay45() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay46() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay47() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay48() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay49() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay50() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay51() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay52() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay53() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay54() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay55() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay56() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay57() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay58() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay59() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay60() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay61() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay62() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay63() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay64() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay65() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay66() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay67() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay68() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay69() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay70() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay71() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay72() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay73() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay74() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay75() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay76() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay77() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay78() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay79() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay80() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay81() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay82() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay83() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay84() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay85() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay86() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay87() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay88() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay89() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay90() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay91() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay92() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay93() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

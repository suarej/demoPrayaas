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
      <ReqNotReqContainer>What was not required ?</ReqNotReqContainer>
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

      <ReqNotReqContainer>What should be the approach ?</ReqNotReqContainer>

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
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>No need to define pink revolution. </ListItem>
        <ListItem>
          No need to mention any other revolutions unnecessarily. 10 markers
          require precise and crisp use of words. So dont waste your words in
          mentioning green and white revolution.
        </ListItem>
        <ListItem>No need to explain about food industry.</ListItem>
        <ListItem>
          No need to explain positive and negatives of pink revolution.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>

      <ListContainer>
        <ListItem>
          Start the answer with the context around the question. In this
          question context was revolving around nutrition and health. So your
          start should link nutrition and health to pink revolution.
        </ListItem>
        <ListItem>
          Pink revolution has multiple meanings. Here it was related to meat
          revolution. (In case if you cannot figure it out then use your common
          sense. Pink revolution can be used for onion also but how the health
          and nutritional status of the country will be improved by eating just
          onions. Make intelligent guesses guys. Nobody knows everything, you
          have to make intelligent guesses in the final examination as well)
        </ListItem>
        <ListItem>
          CRITICALLY does not mean positive and negative all the time. It means
          give your opinion. It should be read with appending instruction word,
          which was elucidate here. The meaning of elucidate is to explain.
        </ListItem>
        <ListItem>
          Hence, in the main body you need to explain the status of pink
          revolution and its role in improving nutrition and health.
        </ListItem>
        <ListItem>
          This means your main body should contain Benefits, challenges and
          solution related to pink revolution. While mentioning benefits, you
          need to keep on linking nutrition and health with pink revolution.
        </ListItem>
        <ListItem>
          Now the main question arises how to fit in all these three sections
          into 150 words. And that is the skill. In such cases, cover one part
          as illustration and for rest of the parts give elaboration. (We’ll
          share model answer.)
        </ListItem>
        <ListItem>
          In the conclusion you need to give your opinion this means that you
          need to simply say that, Yes pink revolution is a promising thing but
          lot of lacunae are there in its implementation and to overcome those
          lacuna government need to take concrete measures and mention some
          measures/ schemes/initiatives accordingly.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay12() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on Agricultural Marketing in general and APMC
        in specific.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required..??</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Do not start your answer by mentioning that Agriculture is in state
          list and so. Whenever you write GS 3 answer, always keep the context
          within GS 3 itself. Mention of state list here gives impression of GS
          2. Strictly maintain this compartmentalisation.
        </ListItem>
        <ListItem>
          No need to mention significance/characteristics/objectives of APMC. It
          is not the requirement of the question.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required..??</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with giving the context around the question, that
          is, issues of agricultural marketing (especially APMC) and its impact.
          Dont just give details of APMC.
        </ListItem>
        <ListItem>
          In main body you need to mention how APMC has impeded the development
          of agriculture and how APMC has caused food inflation. (Dont talk
          about benefits of APMC here, it should came at the end of the main
          body)
        </ListItem>
        <ListItem>
          Divide your main body into two halves, one explaining how APMC has
          impeded agricultural growth and another explaining how APMC has caused
          the inflation.
        </ListItem>
        <ListItem>Question demands you to CRITICALLY EXAMINE.</ListItem>
        <ListItem>
          EXAMINE means, upto what extent statement given in the question are
          true. In this question, in examination part you need to say upto
          certain extent APMC has caused impediments to agricultural development
          and food inflation, but other factors are also responsible for this
          and just list down those factors (dont explain them).
        </ListItem>
        <ListItem>
          Now the most important part comes, that is, CRITICALLY. Critically
          demands you to give your opinion. Give clear cut opinion about role of
          APMCs in developing agriculture. And the general opinion should go
          against the APMC. You can say that, APMCs have certainly impeded the
          development of agriculture and caused food inflation but they are not
          flawed entirely. Certain corrections in their structuring can be a
          harbinger of new era in agricultural marketing.
        </ListItem>
        <ListItem>
          As you have examined as well as given your opinion, you can conclude
          by giving an optimistic solutions.
        </ListItem>
        <ListItem>
          Insertion of present farm bills suitably in your answer can be an
          icing on the cake.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay13() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was open ended and one can write an entire essay about
        E-Technology and its benefit to farmers. Almost everyone of you
        encountered the difficulty in managing your data within 150 words.
        <br />
        Today’s question is an excellent realisation for us that mad quest for
        the content can sometimes back fire. So collect limited but quality
        content, and learn to convert it into marks through answer writing
        practice.
        <br /> Today, rather than going for what was not required, we’ll look
        into what was required part.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>

      <ListContainer>
        <ListItem>
          Start your answer with precise and to the point context of the
          question. Context of today’s question was agriculture has certain
          problems and digital India can provide solution to those. Dont keep on
          writing about Digital India or agriculture only. You need to link
          both.
        </ListItem>
        <ListItem>
          Question was straight forward one. In main body firstly, it was
          expected from you to write, How Digital India can help farmers in
          improving the farm productivity and farm incomes? Whenever HOW type
          direct questions are asked, dont just enlist the features. You need to
          give bit elaboration as well.
        </ListItem>
        <ListItem>
          While mentioning points, arrange them priority-wise . For example,
          digital technology can help both marketing as well as weather
          forecasting. But in case of agriculture first priority should be given
          to weather forecasting.
        </ListItem>
        <ListItem>
          If you are able to set priorities then it becomes very easy to manage
          the content. You dont need to remember much data in that case. Just
          keep on hitting the basic. (Refer model answer for that)
        </ListItem>
        <ListItem>
          Second part of the main body requires you to write about Government
          steps in this regard. Here question is of WHAT type. In this type you
          just need to enlist the features. Dont elaborate them.
        </ListItem>
        <ListItem>
          Such open ended questions are comparatively easier to attempt and
          almost everyone writes these question in final exam. In this case,
          your marks will be decided on your content. More points you
          accommodate in your answer, more marks you’ll get.
        </ListItem>
        <ListItem>
          In conclusion part, dont repeat the solution/government measures part
          again, as you have already mentioned them in main body. Repetition
          must be avoided.
        </ListItem>
        <ListItem>
          You can conclude that, Digital India has great potential in
          transforming the rural agricultural landscape in India but it faces
          certain hurdles while realising its full potential. If we overcome
          these hurdles successfully then Digital India can definitely bring a
          new dawn in the field of farm productivity and farm incomes. (Mention
          2-3 basic issues of Digital India like digital divide, lack of access,
          lack of awareness etc)
        </ListItem>
        <ListItem>
          Don’t mention points like data safety, net neutrality etc. These
          points are important but at ground level agriculture has much more
          fundamental issues to address.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay14() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was straightforward one like yesterday, but it needs
        you to write specific answer. Many of you have hit the approach of the
        question correctly. So rather than going for what was not required part,
        we’ll directly throw light on the requirement of the question
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start directly with the definition of MSP. As we have already
          discussed during tax terrorism question, whenever question start with
          WHAT, always give the definition.
        </ListItem>
        <ListItem>
          For WHAT type questions, come to the point directly. Don’t waste your
          time, space and words in explaining the context of the question.
        </ListItem>
        <ListItem>
          WHAT part of the question must be answered within 40-50 words. Dont
          extend it beyond that.
        </ListItem>
        <ListItem>
          There is no good ready-made definition of MSP available anywhere. In
          such cases, you need to create definition based on your understanding
          and you need to put it in proper words. This is the skill and requires
          lot of practice.
        </ListItem>
        <ListItem>
          Read the question carefully guys. UPSC never use this words while
          framing questions just like that. Many of you have missed the track of
          Low Income Trap
        </ListItem>
        <ListItem>
          Definitely question is not asking you to write about low income trap
          but you need to link how benefits of MSP help in rescuing farmers from
          this trap. Hence just mentioning the benefits of MSP will not give you
          any marks.
        </ListItem>
        <ListItem>
          Some of you have tried to explain this aspect but have failed to give
          proper explanation regarding trap. Trap is the situation from which
          person cannot escape. And you need to throw some light on this aspect.
        </ListItem>
        <ListItem>
          Whenever UPSC ask direct questions like WHAT and HOW, generally don’t
          go against the statements given in the question. In short, in main
          body you have to support the statement that MSP is helpful in rescuing
          farmers from low income trap.
        </ListItem>
        <ListItem>
          In conclusion part, you need to balance the view by stating that MSP
          is definitely a good step towards welfare of the farmers but it has
          certain lacuna and drawbacks (mention few of those) and give solutions
          accordingly. This part should not go beyond 35 to 45 words.
        </ListItem>
        <ListItem>
          If you can add any current happenings, data, committee reports, it’ll
          definitely fetch good marks.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay15() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on livestock resources. It was a 15 marker
        question which means you need to elaborate certain aspects of the
        question to match the word as well as space limit. Today’s question has
        certain hidden aspects as well. So let’s discuss about today’s question.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>No need for definition of livestock resources.</ListItem>
        <ListItem>
          No need to trace back the history like, livestock has been an allied
          sector to agriculture since Harappan times. Keep your context
          contemporary.
        </ListItem>
        <ListItem>No need to explain all the benefits of livestock.</ListItem>
        <ListItem>
          No need to separate government measures and other measures. Many of
          you have written government measures under a separate heading and
          solutions to the problems of livestock resources under separate
          headings. Such a writing shows repetition of the same point and we
          need to avoid such a repetition
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer by creating broader context around the question. In
          this question, the context revolves around disguised unemployment in
          agricultural sector and low incomes in rural economy and livestock
          rearing can provide solution to these problems.
        </ListItem>
        <ListItem>
          While giving start, using data to substantiate your arguments is
          always the best thing to do. Please remember that whenever you use
          data in your answer, always mention the source of it. Otherwise it
          sounds vague.
        </ListItem>
        <ListItem>
          For 15 marker question restrict your start to 30-50 words.
        </ListItem>
        <ListItem>
          Your main body should be divided into potential benefits, challenges
          and measures.
        </ListItem>
        <ListItem>
          While mentioning potential benefits limit your arguments to Non-farm
          employment and incomes in rural areas. Don’t unnecessarily keep on
          exploring the facets like gender equality, social security, disaster
          preparedness etc. You can mention these other benefits through an
          illustration.
        </ListItem>
        <ListItem>
          Challenges part is not asked specifically in the question but it is
          required. Now many of you are confused about when to write challenges
          and when not to write. The simple rule is, whenever UPSC is asking you
          to mention measures you should always be mentioning challenges before
          writing measures or solutions.
        </ListItem>
        <ListItem>
          As challenge part is hidden in the question, you can mention those in
          your answer through illustration.
        </ListItem>
        <ListItem>
          After mentioning challenges go for suitable measures part which should
          include both general as well as specific government measures.
        </ListItem>
        <ListItem>
          In conclusion part, simply summarise your answer and give optimistic
          vision regarding livestock sector and its impact on rural economic
          landscape.
        </ListItem>
        <ListItem>
          Now many of you are worried about when to use illustration and how to
          use it. You can do one thing here, for things which are directly
          mentioned in the question, don’t use illustrations and for things
          which are not directly mentioned in the question, go for
          illustrations.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay16() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on food processing industries and supply
        chain management issues. This is the most neglected part of the entire
        GS-3. We don’t find this part in any particular book. It is very
        difficult to get precise material on internet as well. But since 2013,
        UPSC has been continuously asking at least one question on this topic.
        But unfortunately, we are very much used to spoon feeding and our
        preparation completely remains dependent on coaching notes and plethora
        of books. And that’s why many of you have decided not to try this
        question today. It is very painful for us to see that you people are
        participating in this initiative as per your convenience and such
        complacent attitude defeats the very purpose of this initiative. One
        reason may be that we are offering it at free of cost and thats why many
        of you do not care about the sanctity of PRAYAAS. We don’t know how are
        you going to run away from such kind of questions when you actually face
        them in your mains examination. If you are here just to collect model
        answers, then we are sorry to say dear friends, you have not understood
        UPSC at all. Let other’s do their karma and let us do our own. So let’s
        discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Context of the question was revolving around food processing
          industries, its benefits and impediments. Hence do not start your with
          the focus of e-commerce.
        </ListItem>
        <ListItem>
          No need to mention benefits of food processing industry
        </ListItem>
        <ListItem>
          No need to mention benefits of e-commerce in general. Question was
          very specific one and you need to throw light on how e-commerce helps
          food processing industry.
        </ListItem>
        <ListItem>
          No need to elaborate what supply chain is and how it is related to
          food processing industry.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the broader context of potential benefits of
          food processing industries and general impediments faced by it.
        </ListItem>
        <ListItem>
          In main body you directly need to mention about impediments. Here no
          need to talk about all the impediments faced by food processing
          industries in India. Just focus on marketing and supply chain
          management impediments.
        </ListItem>
        <ListItem>
          As the first part of the question contains WHAT, you directly need to
          jump to the topic without beating around the bush. WHAT needs specific
          and to the point answer.
        </ListItem>
        <ListItem>
          If there would have been discuss, examine, explain, comment part, then
          it is okay to write advantages of food processing industry in brief.
        </ListItem>
        <ListItem>
          In the next part of the main body, you need to talk about how commerce
          can help in overcoming this bottle neck.
        </ListItem>
        <ListItem>
          As this part starts with CAN, your arguments should be either
          e-commerce can help in overcoming or cannot.
        </ListItem>
        <ListItem>
          Of course, e-commerce can help in overcoming the impediments but you
          need to throw light on both the aspects. In short, you need to throw
          some light on lacuna of e-commerce.
        </ListItem>
        <ListItem>
          In conclusion part, try to summarise your answer and give optimistic
          vision in development of food processing industry in India.
        </ListItem>
        <ListItem>
          Many of you are worried about the word limit. Let us clear one thing
          here, even if you are writing one or two points less, try to cover all
          aspects of the question. Cut short the elaboration of other parts but
          cover all the angles asked in the question. Entire coverage of
          question gives you more marks than just explaining a single angle.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay17() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on land reforms, its role in the development
        of agriculture and factors behind its success. Friends, land reform is
        that part of syllabus which we neither read in history nor in geography.
        It is very vast as well. Hence whenever we come across any question
        based on it we find it difficult to answer. Let’s discuss about today’s
        question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to trace the history, strictly give post-independence
          reference of land reforms.
        </ListItem>
        <ListItem>
          No need to explain what land reforms are and what are its components.
        </ListItem>
        <ListItem>
          No need to mention benefits of land reforms. Benefits are different
          than role. Benefit is theoretically expected while roles are
          practically experienced.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the larger context around land related issues
          of agriculture and its impact on farmers. And mention how land reforms
          can give solution to this.
        </ListItem>
        <ListItem>
          While doing so you can mention some of the motives of land reforms.
          (But don’t exceed the word limit of 30 to 50 words in any case)
        </ListItem>
        <ListItem>
          In Main body, first talk about constructive role played by land
          reforms in agricultural development.
        </ListItem>
        <ListItem>
          As the question asks you to DISCUSS this means that you need to cover
          all the aspects of the issue. In this answer you need to mention one
          or two drawbacks of land reforms and challenges faced in their full
          implementation.
        </ListItem>
        <ListItem>
          In next part of your main body, you need to talk about factors behind
          the success of land reforms. This was the straightforward part of this
          answer.
        </ListItem>
        <ListItem>
          Although it is straightforward one, many of you have found it
          difficult to answer. This is mostly because, during our preparation we
          explore only one angle of the issue.
        </ListItem>
        <ListItem>
          In conclusion part try to give optimistic vision by providing
          solutions which can make land reform successful in India.
        </ListItem>
        <ListItem>
          Many of you have struggled in writing the role of land reforms because
          of huge content available around us. While dealing with such a vast
          content, we suggest you to stick to the basics.
        </ListItem>
        <ListItem>
          The basic of land reform is abolition of intermediaries, tenancy
          reforms, land ceiling, consolidation of farms,cooperative farming and
          Improved land record keeping. Hence while writing answers also, don’t
          think about anything else. Just keep on linking these six basic points
          to the question. For example link abolition of intermediaries to the
          development of agriculture, challenges faced while abolishing the
          intermediaries and how to overcome them.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay18() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on liberalisation and its impact on Indian
        companies. The question was straightforward one and didn’t have any
        complicated twists in it. But dealing with second part of the question
        is bit tricky here. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t trace the history of liberalisation. Give your start with
          contemporary references.
        </ListItem>
        <ListItem>
          No need to mention in detail about LPG reforms. You can mention them
          but no need to elaborate.
        </ListItem>
        <ListItem>No need for the components of liberalisation</ListItem>
        <ListItem>
          No need to compare today’s situation of Indian companies with pre-LPG
          situation.
        </ListItem>
        <ListItem>
          Don’t elaborate the impact of liberalisation on MNCs. Question
          strictly asks you to focus on Indian companies only.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the larger context around the question. And in
          this question context revolves around liberalisation and LPG reforms.
        </ListItem>
        <ListItem>
          First part of main body is very straight forward. Whenever UPSC asks
          about impacts you can either divide your answer into positive and
          negative impacts or short-term and long-term impacts. Choose your
          structure as per your convenience.
        </ListItem>
        <ListItem>
          If you are going for positive and negative impacts, always right
          positive impacts first. It is always good to find out the positivity
          (good things) before negativity (bad things)
        </ListItem>
        <ListItem>
          In second part of the main body, You need to give loud and clear
          opinion of yours.
        </ListItem>
        <ListItem>
          If UPSC is asking CAN type questions, answer should contain both
          angles can be and cannot be. But whenever UPSC is asking ARE Type
          questions you need to give firm one-sided opinion.
        </ListItem>
        <ListItem>
          For example, if somebody asks you the question ‘can you play the role
          of a boy in a drama?’ you can say I can or I cannot. But if someone is
          asking you, ‘are you a boy?’, you have to answer it by choosing either
          side.
        </ListItem>
        <ListItem>
          As long as you are giving proper justification to your stance, you can
          give your opinion in either way in this question. You can either say
          that Indian companies are competing satisfactorily or they are not.
          Just give proper justification to it
        </ListItem>
        <ListItem>
          Conclude your answer as per the stance taken by you. If your stance is
          that Indian companies are not performing satisfactorily, then provide
          optimistic solutions. And if your stance is that Indian companies are
          performing satisfactorily, then provide further steps need to be taken
          to consolidate their present status.
        </ListItem>
        <ListItem>
          There is difference between liberalisation and globalisation guys.
          Please go through the model answers and get your facts correct.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay19() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on a very common topic, that is green energy
        and conventional energy. First of all let us clear the thing that there
        is difference between green energy and green energy corridor. You can
        mention about green energy in the beginning but the question was asking
        you to focus on green energy corridor and not just green energy.
        Although question looked straightforward one, we have to cover multiple
        dimensions in it because it has asked to write a NOTE. Whenever UPSC
        asks you to WRITE A NOTE on a particular topic we need to cover multiple
        aspects of the issue. It is similar to that of making note for our
        studying purpose. For example, while studying green energy we prepare
        notes on, what green energy is, how it is produced, where it is
        produced, what are its benefits, what are the challenges/impediments and
        what are the solutions. So in NOTE type questions rather than looking
        for what was not required part, we need to look for what was required
        part.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the larger context around the question, that
          is, problems of conventional energy and how green energy can provide
          solution to it.
        </ListItem>
        <ListItem>
          While doing so you can provide some data/reports/facts. It will
          decorate your answer nicely.
        </ListItem>
        <ListItem>
          In Main body, first you need to talk about some problems of
          conventional energy. As this is not the context of the question, you
          don’t have to elaborate the problems, as we have discussed earlier,
          whenever we don’t need much elaboration, we can use illustrations to
          represent it.
        </ListItem>
        <ListItem>
          After that go for how Green energy corridor can alleviate the problems
          of conventional energy part. Here you can simply mention benefits of
          green energy corridor over conventional energy.
        </ListItem>
        <ListItem>
          While doing so one thing should be taken care of. You need to provide
          arguments in such a way that the problems which you are mentioning
          above should be addressed through your arguments. For example, if you
          are mentioning the problem of scarcity of resources in conventional
          energy part, you can say green energy is abundantly available and
          hence the scarcity aspect can be taken care of through seamless
          development of green energy corridors and energy grids.
        </ListItem>
        <ListItem>
          At the end of your answer, mention certain issues in harnessing the
          full benefit of green energy corridor. As it is not the core of your
          question, you can use illustration to represent it. No need to give
          elaboration for this part as well.
        </ListItem>
        <ListItem>
          In conclusion end your answer on optimistic note with providing steps
          taken by government towards green energy corridors and suggest
          optimistic vision for future roadmap.
        </ListItem>
        <ListItem>
          In short, your flow should be, problems of conventional energy, how
          green energy corridor can overcome these problems, issues or hurdles
          with green energy corridor and solution to those hurdles.
        </ListItem>
        <ListItem>
          Now it becomes very difficult to manage all these angles in your
          answer and that too within 150 words. As we have mentioned earlier,
          even if you are writing one or two points less it is okay but always
          try to cover all the angles of the question.
        </ListItem>
        <ListItem>
          Complete answer is always better than lopsided and imbalanced one.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay20() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was a straight forward one and was asking you to
        discuss the pros and cons of PPP model. The crucial part of today’s
        question was CRITICALLY DISCUSS. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required</ReqNotReqContainer>
      <ListContainer>
        <ListItem>No need to mention about PPP model.</ListItem>
        <ListItem>
          No need to discuss about various types of PPP models.
        </ListItem>
        <ListItem>
          This question contains leading statement which was, ‘adaptation of PPP
          model for infrastructure development of the country has not been free
          from criticism.’ The main question starts after the statement which is
          critically discuss the pros and cons of the PPP model. Friends,
          whenever UPSC gives leading statement in the question don’t go on
          explaining it. You can mention about that leading statement in the
          start but there was no need to mention it in the main body.
        </ListItem>
        <ListItem>
          In short, no need to mention criticism of PPP model separately.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question and
          leading statement. Here the context revolves around PPP and leading
          statement talks about the criticism of the model.
        </ListItem>
        <ListItem>
          So in the start, you can mention the need of PPP model in
          infrastructure and few of its criticisms.
        </ListItem>
        <ListItem>
          Addition of any current happenings in the beginning can always add a
          flavour to your answer. In this answer, you can mention ambitious
          National Infrastructure Pipeline Project. This project requires huge
          funding and PPP is the only viable option available in front of
          government.
        </ListItem>
        <ListItem>
          Main body of this question is the easiest one. In question itself UPSC
          has asked you to discuss the pros and cons of the model.
        </ListItem>
        <ListItem>
          Do not give headings like advantages and disadvantages. Although they
          have similar meanings, but it is always good to use the similar
          wordings as that of the question. So divide your answer into pros and
          cons of PPP model.
        </ListItem>
        <ListItem>
          There are multiple pros and cons. Don’t keep on listing them.
          Generally restrict your points to 5/6. If you have more points in your
          mind then try to merge similar points so that number of points won’t
          go beyond 5/6.
        </ListItem>
        <ListItem>
          Question asks you to CRITICALLY DISCUSS. As we have discussed earlier
          CRITICALLY means you need to give your clear-cut opinion.
        </ListItem>
        <ListItem>
          In this question you need to give your opinion whether adaptation of
          PPP model for infrastructure development is good or bad. Generally PPP
          model is good for infrastructure development but it has certain cons
          and lacunas and we need to overcome those.
        </ListItem>
        <ListItem>
          In conclusion give some solution to overcome those lacunas and cons.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay21() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was an open ended question. It demands you to discuss
        the achievements of India in the field of space science and technology.
        Also, it is asking you to link these achievements to socio economic
        development of the country. This question was a very general one, and
        one can write an entire essay on this particular topic. We often face
        challenges while dealing with such questions, due to lot of content
        availability. Hence, rather than going for what was not required, we
        will look directly into what was required part.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. In
          this question, you can create the context like, at the time of
          Independence, India had limited reach in space science as compared to
          other countries and from that position, we have leapfrogged and became
          a leading player in the field of space technology through multiple
          missions like SHAKTI-ASAT, GSLV, Chandrayaan, MOM etc.
        </ListItem>
        <ListItem>
          In the main body, first we need to talk about India’s achievements in
          the field of space science and technology. Here friends, do not
          separate space, science and technology. It is a combined thing here,
          and you need to talk about space related stuff only.
        </ListItem>
        <ListItem>
          Many of you, while writing the achievements of India, are simply
          listing down various space missions successfully undertaken by ISRO.
        </ListItem>
        <ListItem>
          Various missions is just one aspect of the achievement. India’s
          achievements are much larger than just launching the space missions.
          Here you need to pay more attention towards understanding the question
          rightly.
        </ListItem>
        <ListItem>
          Achievement is something which is unique in nature. There are many
          countries who have launched multiple missions. In that context,
          launching satellites cannot be attributed to be a great achievement of
          India. Our achievement lies in low-cost missions, large success rate
          and near zero failures, less dependency on other countries, high
          degree of reliability, using PSLV technology to successfully launch
          inter-planetary missions etc.
        </ListItem>
        <ListItem>
          This is the unique demand of this question. If you have just mentioned
          India’s missions, automatically you might have received the feedback
          that, your answer lacked depth and you need to do more brainstorming.
          Unfortunately, 99% of answers received today are lacking this aspect.
        </ListItem>
        <ListItem>
          Next part of the main body is comparatively an easier one. Here, you
          need to link the benefits of space technology to socio economic
          development of India. While writing this, you need to bring precision
          and specificity. For example, don’t just mention it will help
          agriculture. Rather you can write, space initiatives like BHUVAN,
          NADAMS, FASAL etc. can help in developing agriculture.
        </ListItem>
        <ListItem>
          In conclusion part of your answer, mention some of the challenges to
          the space sector and provide solutions to it. But, remember that these
          things should not go beyond 30 to 40 words.
        </ListItem>
        <ListItem>
          Now, many of you are getting confused about why challenges part needs
          to be written in the conclusion for this question. This has to be done
          because of the instruction word DISCUSS. In discuss part, 80% of your
          answer should go in support with the statement of the question and 20%
          should go in it’s opposition.
        </ListItem>
        <ListItem>
          Had it been EXAMINE, challenges should be mentioned much earlier and
          it should have occupied half part of the answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay22() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question is a straightforward and a technical one. It asked you
        to describe stem cell therapy and its advantages over other treatments.
        Friends, while preparing for economics and Science, we give more
        emphasis based on prelims exam perspective. But in mains examination,
        UPSC asks at least one technical question among these two topics of our
        syllabus. While dealing with such a technical questions, you cannot
        create content on your own. You have to be very precise in your answer
        while attempting such questions. This question was very precise and
        hence, rather than going for what was not required, we will discuss what
        was required in this question.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>

      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. The
          context here is Disease profile and how stem cells can provide
          solution to it.
        </ListItem>
        <ListItem>
          It is quite difficult to arrive at the context of this question. If
          you are facing such difficulties while deriving the context, you can
          simply start with the basics of the question. And here , basic is stem
          cells. In short, you could have started your answer by giving the
          reference of stem cells.
        </ListItem>
        <ListItem>
          Question was not about stem cells. It was about stem cell therapy. So
          don’t go on explaining what stem cells are, what are their types, what
          are their properties etc.
        </ListItem>
        <ListItem>
          Question contains a leading statement and your actual question starts
          from the word describe. As we have mentioned in our previous
          feedbacks, never explain the leading statement. You can use it for
          just reference purpose.
        </ListItem>
        <ListItem>
          Main part of the question demands you to DESCRIBE the stem cell
          therapy. The instruction word DESCRIBE needs you to cover what and
          how.
        </ListItem>
        <ListItem>
          Here ‘describe the stem cell therapy’ means you need to mention what
          is stem cell therapy and how it is done.
        </ListItem>
        <ListItem>
          Many of you have written big sentences while describing the therapy
          and ultimately it has become very complicated. Stem cell therapy is a
          process and whenever UPSC is asking you about any process, you can
          always represent it through the flowchart.
        </ListItem>
        <ListItem>
          Next part of the main body requires you to write about advantages of
          stem cell therapy over other treatments.
        </ListItem>
        <ListItem>
          Here question is not about advantages of stem cell therapy only. You
          need to compare stem cell therapy and other treatments and you have to
          show, how stem cell therapy is better than other treatments.
        </ListItem>
        <ListItem>
          In the conclusion part, you can mention issues and challenges
          revolving around stem cell therapy. Actually,, it is not asked in the
          question and it is not required as well. But, this aspect can balance
          your answer, which otherwise goes heavily favouring towards stem cell
          therapy.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay23() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question is again an open ended one and sky is the limit to
        write down the content in this answer. Today’s question was asking us to
        write how science is interwoven deeply with our lives and how it has
        triggered off agriculture. One can write an entire essay separately on
        these two topics. Hence, rather than going into what was not required
        part, we will jump to what was required aspect.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question.
          Context is very wide in this question. So multiple starts can be
          possible. But, the best way is to link the significance of science
          with various aspects of human life.
        </ListItem>
        <ListItem>
          In the first part of your main body, mention how science is interwoven
          deeply with human life. There is hardly any sphere of human life which
          has remained untouched from the scientific development. Thus, it
          becomes difficult to manage our content within stipulated world and
          space limit.
        </ListItem>
        <ListItem>
          Do not simply list down the points. It is very bad way of representing
          the things in UPSC. Rather, you can categorise similar things under
          common headings and then proceed accordingly.
        </ListItem>
        <ListItem>
          Here, you can divide interwoven part into either Social, Political,
          Economical spheres or into individual and social/public sphere part.
        </ListItem>
        <ListItem>
          This part is very wide and vague, and we need to touch as many as
          corners as we can, while framing our structure. Structure plays very
          crucial role in managing vast data.
        </ListItem>
        <ListItem>
          Next part of the main body is comparatively easier one. Mention what
          are the striking changes triggered of in agriculture by science-based
          technologies.
        </ListItem>
        <ListItem>
          Here while mentioning changes, you need to provide examples as well.
          But, remember that while doing so, always start with basic points
          first. For example do not go directly to satellite imagery, remote
          sensing techniques, aerial photographs etc. Mention High Yielding
          varieties first, as it lies at the core of the agricultural
          development.
        </ListItem>
        <ListItem>
          In conclusion, mention some of the issues or challenges raised by
          uncontrolled and unsustainable scientific advancements.
        </ListItem>
        <ListItem>
          Don’t restrict your conclusion to agriculture alone. The context of
          the question is very wide and it links the entire scientific
          development with human life. So provide wider context accordingly.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay24() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on nanotechnology. Every year UPSC asks one
        question based on either nanotechnology or biotechnology or robotics.
        Since 2013, pattern of asking questions on these topics has remained
        more or less similar. Hence, one time preparation for basic things about
        these technologies, along with some current aspects can give you enough
        content to tackle questions based on these topics. Let’s discuss about
        today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context is nanotechnology and its multiple benefits.
        </ListItem>
        <ListItem>
          If you are mentioning what nanoparticles are in the start, give proper
          definition. Some answers give definitions like, nanoparticles are the
          particles which are studied at subatomic and nano level. This
          definition does not make any sense, as it keeps on going in a loop.
          Obviously, nanoparticles deal with nanoscale. Give self explanatory
          definition.
        </ListItem>
        <ListItem>
          This question has three sub- questions and the main body of your
          answer should also get divided into three sub parts. Each subpart
          carries equal weightage and if you are missing any, you will lose
          marks.
        </ListItem>
        <ListItem>
          First part demands you to write why nanotechnology is one of the key
          technologies of the 21st century. Here focus on ‘one of the’. This
          means that, there are multiple key technologies in 21st century and
          nanotechnology is one among those. You can throw some light on other
          technologies in one or two sentences. But, major focus should be on
          nanotechnology only.
        </ListItem>
        <ListItem>
          Capturing such minute details creates an excellent impression upon the
          examiner.
        </ListItem>
        <ListItem>
          Next part of the main body asks you to describe the salient features
          of nano-mission. This was the easiest part of this question and you
          just need to list down the salient features of the mission.
        </ListItem>
        <ListItem>
          While writing down the features, don’t keep elaborating each and every
          feature. List down 4 to 5 major features of the mission.
        </ListItem>
        <ListItem>
          In the last part of the main body, you need to describe the scope of
          nano technology in the development process of the country. Here you
          can simply mention various applications of nanotechnology in
          developmental process.
        </ListItem>
        <ListItem>
          While writing down any application or feature of nanotechnology, you
          should always give specific examples and case studies. This adds a
          good flavour to your answer.
        </ListItem>
        <ListItem>
          In the conclusion part, mention some of the issues revolving around
          nanotechnology, just to balance out the answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay25() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was the most straightforward question we have faced on
        this platform. It was based on biotechnology, and was asking you to
        write how does it help in improving the living standards of farmers.
        There was no twist in the question, there was no instruction word in the
        question, and there was no hidden part in the question as well. Lets
        discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t keep on explaining what biotechnology is. You can mention it in
          the start, but don’t make it as a part of Main body.
        </ListItem>{" "}
        <ListItem>Don’t explain various types of biotechnology.</ListItem>{" "}
        <ListItem>
          Don’t compare how biotechnology is better than green Revolution.
          Actually, high yielding varieties are part of biotechnology and hence,
          green Revolution and biotechnology are closely related with each
          other.
        </ListItem>{" "}
        <ListItem>
          Don’t mention benefits or applications of biotechnology as question
          demands you not to just list their benefits but how these benefits are
          leading to the improvement of living standards of farmers.
        </ListItem>{" "}
        <ListItem>Don’t explain the problems of farmers.</ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. In
          this question, the context is, farmers condition is pitiable because
          of low agricultural production, low income from the agriculture, and
          biotechnology can provide solution to some of the issues related to
          agriculture. You can provide some data/facts here.
        </ListItem>{" "}
        <ListItem>
          In the main body, you need to mention how biotechnology improves the
          living standards of farmers. Here don’t just list down the benefits of
          biotechnology.
        </ListItem>{" "}
        <ListItem>
          You can write the benefits, but mention how those benefits are leading
          to the improvement of the living standard of the farmer.
        </ListItem>{" "}
        <ListItem>
          Many of you are giving focus only on crop improvement. Crop
          improvement is only one angle of improving the condition of farmer.
        </ListItem>{" "}
        <ListItem>
          You need to explore various other aspects as well while dealing with
          the condition of farmers. Livestock, farm fishery, dairy, apiculture,
          silviculture, poultry etc. are other sectors where biotechnology can
          be useful in improving the condition of farmers.
        </ListItem>{" "}
        <ListItem>
          If you have just focused on cropping, your answer will sound
          monotonous one. While dealing with such straightforward questions, you
          need to diversify your answer to get good marks.
        </ListItem>{" "}
        <ListItem>
          In the conclusion, you can mention some of the issues associated with
          biotechnology and their solution just to balance the answer, which
          otherwise may sound one-sided.
        </ListItem>{" "}
        <ListItem>
          It becomes very difficult to stretch such straightforward question up
          to 250 words. In this case, you can add on more examples and case
          studies. Just listing down 10-15 points will not give you much marks.
        </ListItem>{" "}
        <ListItem>
          Just to fill up the space, many of you are drawing unnecessary
          illustrations. Illustration is the thing which brings visibility to
          your answer and attract the attention of the examiner. If you’re not
          comfortable with illustration, then we will suggest not to draw it,
          otherwise it will create a negative impression and may ultimately
          reduce your marks even if you have written good content below it.
        </ListItem>{" "}
        <ListItem>
          Also, if you are drawing illustration, don’t explain it below and vice
          versa. If you are doing both, it sounds repetition and repetition of
          points is strictly unwarranted in answers.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay26() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was about environmental impact of coal-fired thermal
        plants. Although the question looks straight forward in the first
        instance, if you read it carefully, it is a very specific one and needs
        lot of brainstorming. Deciphering the question plays very crucial role
        in answering today’s question. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain the leading statement in your answer. Leading statement
          of this question focuses on environmental impact assessment and you
          don’t have to explain it beyond 20 to 25 words
        </ListItem>
        <ListItem>
          Don’t keep on explaining the other impacts of coal-fired thermal power
          plants than environmental one.
        </ListItem>
        <ListItem>
          Don’t explain environmental impact of coal-fired thermal power plants
          in general. Question here specifically demands to list down the
          impacts of those coal-fired thermal power plants which are located
          near coal pitheads.
        </ListItem>
        <ListItem>
          Question is not on environmental impact of coal mining, so don’t
          explore that angle.
        </ListItem>
        <ListItem>
          No need to explain how coal-fired thermal power plants are important
          and what are the benefits of their location near coal pitheads.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around coal-fired thermal power plants and their
          negative environmental externalities.
        </ListItem>
        <ListItem>
          You can give reference of leading statement, that is environment
          impact assessment, in the beginning. It is always advisable to make it
          clear to the examiner that, you have separated the leading statement
          and you’re not going to explain it any further in the starting
          paragraph itself.
        </ListItem>
        <ListItem>
          In the main body, discuss the environmental impacts of coal-fired
          thermal plants located near pitheads.
        </ListItem>
        <ListItem>
          Whenever UPSC is asking about impacts, you can always categorise into
          positive and negative ones. But in this case, coal-fired thermal power
          plants have negative externality only.
        </ListItem>
        <ListItem>
          Hence, if you’re not mentioning any positive impacts then also it is
          okay. And even if you are mentioning positive impacts, it won’t give
          you any edge over other answers. Certain things are inherently
          negative in nature and there is no need to explore positivity in
          those. You may find some positivity, but it will take a lot of time to
          brainstorm and we don’t get that much time in the final examination.
          Thus, while preparing itself try to figure out which things are
          negative in nature and which things are inherently positive in nature.
        </ListItem>
        <ListItem>
          In the main body, while mentioning the impacts of coal-fired thermal
          plants, keep on linking them to pitheads. Environmental impacts on
          coal-fired thermal power plants and other coal-fired thermal power
          plants are nothing different. You have to write the same points only,
          but using headings clearly mention it. This is just to let examiner
          know that you have understood the question well.
        </ListItem>
        <ListItem>
          Use such smart tricks guys. Nobody knows everything. How smartly you
          are putting your content without missing the track makes a lot of
          difference.
        </ListItem>
        <ListItem>
          In the conclusion part, provide way ahead to overcome these negative
          impacts.
        </ListItem>
        <ListItem>
          Here lies another key of this question friends. Many of you are
          writing, we need to shift to renewable energy and cleaner
          alternatives. Of course, we need to do that. But we should not forget
          that, we are a developing economy and shifting to costly renewable
          alternatives will not be beneficial for our growth perspective. If you
          are providing this solution, then your answer sounds superficial one.
        </ListItem>
        <ListItem>
          While providing solution in this case, we need to be practical. But at
          the same time we must not let environmental degradation go on. In
          short, we can mention, Coal fired thermal power plants cannot be
          completely eliminated from India looking at the growth perspective and
          hence to minimise its externality certain new technologies can be
          adopted to improve their efficiency.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay27() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was about interlinking of river, its advantages and
        environmental impacts. As compared to yesterday‘s question, today’s
        question is comparatively an easier and straightforward one.
        <br /> But, we have received less number of quality answers as compared
        to yesterday. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Do not explain the leading statement of the question. Do not stretch
          the history too much regarding interlinking of rivers.
        </ListItem>
        <ListItem>
          Don’t separately mention positive and negative environmental impacts
          of river linking project. We are already discussing advantages of the
          project in the first part of the question and if you are repeating the
          positive environmental impacts then it will sound repetitive.
        </ListItem>
        <ListItem>
          Don’t explain the obstacles or hurdles or challenges of interlinking
          of rivers.
        </ListItem>
        <ListItem>
          Don’t just focus on environmental advantages of river linking.
          Question demands you to mention general advantages but specific
          environmental impacts.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. The
          context of the question revolves around the hydro-meteorological
          disaster proneness of India and role of River linking in resolving it.
        </ListItem>
        <ListItem>
          In start para, you can give references with respect to the leading
          statement. But while doing so, don’t give erroneous information. Many
          of you are writing that river linking project was conceived in 1970.
          Actually, it was put forward for the first time by Britishers in late
          1830s but, eventually it got sidetracked due to development of
          Railways in 1853.
        </ListItem>
        <ListItem>
          In the main body, first talk about advantages of river linking
          project. While mentioning the advantages, don’t just keep on listing
          them down. Give suitable examples to your points.
        </ListItem>
        <ListItem>
          For example, if you are mentioning river linking project can help in
          flood controlling, you can write in the following way, Flood control:-
          interlinking of river transfers surplus water to water deficit basins,
          and helps in controlling flood peaks. e.g. Kosi-Mechhi interlinking
          project will transfer surplus water of Kosi into Mechhi and Mahananda
          River
        </ListItem>
        <ListItem>
          Write four or five points in this manner, but mention them
          elaborately.
        </ListItem>
        <ListItem>
          While mentioning such case studies and examples, it is always
          advisable to use maps. Many of you are not drawing maps at all.
          Remember guys, whenever you are mentioning any spatial aspect in your
          answer always represent it through map.
        </ListItem>
        <ListItem>
          Many of you are worried about how to draw the map of entire India
          representing all river linking projects. Practically it is not
          possible to remember all the links and it is very time and space
          consuming on final day of exam as well. Hence, we need to draw maps on
          smaller scale.
        </ListItem>
        <ListItem>
          After mentioning advantages of river linking project, go into
          discussing the negative environmental impacts (no need to go for
          positive impacts as it is already merged into advantages). Here also,
          you need to give examples, case studies and small maps.
        </ListItem>
        <ListItem>
          Almost everybody has mentioned about Ken Betwa river linking project.
          And the same example is getting repeated in the answer again and
          again, due to lack of content. Never repeat the same example in the
          same answer. Diversify your answer with multiple examples. If you
          don’t have multiple examples, then don’t use it at all. Under any
          circumstances, repetition should not be there in your answer.
        </ListItem>
        <ListItem>
          In the conclusion part, you can provide long-term sustainable
          solutions to river linking projects. Many of you are just giving
          solution to negative environmental impacts through engineering
          solutions and government measures. Here we need a lot of
          brainstorming. Environmental impacts can be reduced by promoting
          rainwater harvesting, traditional water conservation techniques and
          nature-based solutions.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay28() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was on much debated topic, that is climate change and
        its impact on India in general and Himalayan and coastal states in
        particular.
        <br />
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to explain the leading statement, which says, climate change
          is a global problem.
        </ListItem>
        <ListItem>Don’t mention the causes of climate change.</ListItem>
        <ListItem>
          Don’t go on explaining the components of climate change.
        </ListItem>
        <ListItem>
          Don’t explore the positive impacts of climate change on India. Climate
          change has both positive and negative impacts. But its positive
          impacts are mostly confined to temperate regions. India is a tropical
          country and climate change is going to affect India very badly. If you
          are exploring positive aspect in this answer, then it shows lack of
          conceptual clarity.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context lies around climate change and its global impact in
          general and impacts on India in particular.
        </ListItem>
        <ListItem>
          Rather than defining climate change in the beginning, you can provide
          data/facts/reports to substantiate that climate change is the reality
          and it is affecting various parts of the globe as well as India.
        </ListItem>
        <ListItem>
          First part of the main body asks you to explain how climate change
          affects India. Don’t confine your points just to environmental
          impacts. Question demands you to mention general impacts of climate
          change on India.
        </ListItem>
        <ListItem>
          You can divide those impacts into social impacts, political impacts,
          environmental impacts and economical impacts. If you are just
          exploring environmental impacts and it’s increasing disaster
          proneness, this means that you are just analysing the one side of the
          issue.
        </ListItem>
        <ListItem>
          First part of the question demands you to portray a vast canvas and
          you need to touch various aspects of climate change. Points like
          climatic refugee, forced migrations, disaster displacements will
          certainly give an edge to your answer.
        </ListItem>
        <ListItem>
          In the next part of the main body, you need to mention how climate
          change affects Himalayan and coastal states separately. Don’t merge
          them under a single heading as both will suffer differently.
        </ListItem>
        <ListItem>
          Many of you are in dilemma that, we have already mentioned the impacts
          of climate change on India in the first part of the answer and now
          what to write in second part. It may sound repetition. And here lies
          the key guys, you have to mention points in such a way that they
          shouldn’t sound repeated one. This skill is going to be tested by UPSC
          in this particular answer.
        </ListItem>
        <ListItem>
          To avoid repetition, you can use specific case studies and examples in
          second part of your answer. On the other hand, in first part you can
          just mention general issues without mentioning specific examples and
          case studies. In first part of your answer, you can draw the entire
          map of India while in second part of your answer you can draw
          small-scale maps.
        </ListItem>
        <ListItem>
          Conclude your answer by giving solutions to climate change and how
          India should withstand amidst climate change events. This is
          comparatively easier part of this answer.
        </ListItem>
        <ListItem>
          Many of you are not giving examples/case studies/maps in your answers.
          Whenever you come across any geography and environment related
          question, always try to include at least one spatial aspect, that is
          map in your answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay29() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was on issues pertaining to disposal of solid waste and
        removal of toxic waste from the environment. In short, it was all about
        waste management.
        <br />
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t describe what solid waste is and what are the components of
          solid waste.
        </ListItem>
        <ListItem>
          No need to explain the causes of generation of solid waste
        </ListItem>
        <ListItem>
          No need to mention the impact of solid waste. Question was on
          impediments and not on impacts. Read the question carefully.
        </ListItem>
        <ListItem>
          No need to separate various types of toxic wastes in the environment.
          Many of you have divided toxic waste into E-waste, biomedical waste,
          nuclear waste etc. If you are going to divide it in such a way, then
          your answer will become very lengthy.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. The
          context in this question lies around the generation of solid waste and
          its poor management. Rather than giving definition of solid waste, you
          can provide concrete facts or data in the beginning.
        </ListItem>
        <ListItem>
          Many of you are just providing data and not linking the data to the
          context of the question. For example, many answers are starting with,
          ‘India generates 62 million tonnes of solid waste per year’. There is
          nothing wrong in providing this data. But, this data doesn’t make any
          sense here. Solid waste generation is not an issue, rather its poor
          disposal and poor management is the real issue. And your start must
          reflect this.
        </ListItem>
        <ListItem>
          Hence you can start like, India generates 62 million tonnes of solid
          waste per year but out of which only 70% is collected and 10% is
          treated. Start like this creates greater context around the question.
        </ListItem>
        <ListItem>
          . In the first part of your main body, write about the impediments in
          disposing the solid waste. This is comparatively an easier part in
          this question.
        </ListItem>
        <ListItem>
          To make your answer unique, you can use some data/facts/case
          studies/illustrations in this part. But always remember, whenever you
          are using any data in your answer, always substantiate it by giving
          sources, otherwise your answer sounds vague.
        </ListItem>
        <ListItem>
          Next part of the main body requires you to suggest measures to remove
          toxic waste from the environment. Many of you have not focused on
          toxic waste part of this sub-question.
        </ListItem>
        <ListItem>
          Read the question carefully guys. Many of you are giving suggestions
          like recycling, reuse, public awareness etc. How are you going to
          recycle and reuse the toxic waste? Is public awareness enough to deal
          with the problem of toxic waste? How are you going to create energy
          from toxic waste, as many of you are giving solution to set up
          waste-to-energy plants?
        </ListItem>
        <ListItem>
          This means we need specific technological interventions in this. You
          can reuse or recycle the toxic waste, but for that also, you need to
          take the help of technology. Therefore, this particular part of the
          question needs technological solutions first and then you can write
          general points.
        </ListItem>
        <ListItem>
          You can provide some sustainable general solutions in conclusion part.
          These solutions need not to be restricted to toxic waste alone, you
          can expand them to overall solid waste management. Here you can
          suggest solutions like, set up waste to energy plants, circular
          economy, 4 Rs etc.
        </ListItem>
        <ListItem>
          It is always advisable to touch the core aspect of the solution. Solid
          waste management rules-2016 is the only best thing happened towards
          this, in India. Hence, your answer must have the reference of these
          rules. You don’t have to explain them in detail, just use them as a
          reference anywhere in your answer smartly.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay30() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was the most difficult question we have ever faced in
        our daily answer writing initiative. Like we often see in cricket match,
        length delivery is followed by bouncer and vice versa. Similarly,
        yesterday was a full toss and today it was a ferocious bouncer. While
        facing the full toss, you have lot of options available to play your
        shots. But for bouncers, you should be knowing what not to do. Otherwise
        you will end up in throwing your wicket away. And 99% of answers
        received today have thrown their wicket away.<br/> Let’s discuss about
        today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain the impacts and benefits of developmental projects.
        </ListItem>
        <ListItem>
          Don’t explain why rehabilitation is important during development of
          project.
        </ListItem>
        <ListItem>
          Don’t explain what should be done during rehabilitation.
        </ListItem>
        <ListItem>
          Don’t explain the issues involved in rehabilitation process.
        </ListItem>
        <ListItem>
          Don’t explain the reasons and objectives of rehabilitation.
        </ListItem>
        <ListItem>Don’t explain the rehabilitation policy.</ListItem>
        <ListItem>
          Don’t explain how environment plays an important role in
          rehabilitation process.
        </ListItem>
        <ListItem>
          Don’t unnecessarily link rehabilitation to urbanisation. Urbanisation
          is mostly happening in India because of out-migration from rural
          areas. Rehabilitation of human settlement doesn’t account for reasons
          behind the urbanisation
        </ListItem>
        <ListItem>
          Don’t explain controversies associated with rehabilitation process and
          associated developmental activities.
        </ListItem>
        <ListItem>
          Don’t explain environmental impacts of developmental projects.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. The
          context of this question revolves around the rehabilitation due to
          developmental projects and its consequences.
        </ListItem>
        <ListItem>
          While mentioning start, you can always provide a substantiated data
          regarding number of rehabilitations or status of rehabilitation in
          India. You can cite some examples here.
        </ListItem>
        <ListItem>
          First part of the main body is the most crucial one for this answer.
          If you read the question carefully you will see that first part of the
          question is actually a leading statement. As we have discussed it
          earlier we are not going to explain it.
        </ListItem>
        <ListItem>
          Because of that, many of you have directly started writing the
          mitigation measures. But if you carefully brainstorm on the flow of
          the answer, you’ll come to know that, before providing solutions, we
          need to find the problems first.
        </ListItem>
        <ListItem>
          Now the problem arises, how to explore the issues? For this, you need
          to take the reference of leading statement. Leading statement clearly
          mentions that rehabilitation of human settlement has certain
          environmental impacts and due to which rehabilitation process always
          attracts the controversy.
        </ListItem>
        <ListItem>
          Hence we need to explain the adverse environmental impacts arising due
          to rehabilitation process and then we need to provide specific
          solution to these issues.
        </ListItem>
        <ListItem>
          If you are mentioning general issues arising during rehabilitation
          process then your answer becomes vague and it does not meet the
          requirement of the question.
        </ListItem>
        <ListItem>
          Read the question carefully guys. Although we are not going to explain
          the leading statement, this does not mean that we should be completely
          ignoring it. Using leading statement tried to create the holistic
          content around the question.
        </ListItem>
        <ListItem>
          In questions like these examiner doesn’t look much for the content as
          well as your start and conclusion. She simply looks whether you have
          understood the question and have hit the demand. Even if you are
          writing just 70-80 words for this answer but with proper approach then
          you will end up in getting 4+ marks.
        </ListItem>
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

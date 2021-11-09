import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 90%;
  // min-height: 27.2em;
  // maem;x-height: 27.2
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-yellow-200
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;

const CarThumbnail = styled.div`
  widht: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `};
`;

const PricesContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `};
`;

const DailyPrice = styled.h5`
  ${tw`
        text-red-500
        font-bold
        text-sm
        mr-3
    `};
`;

const MonthlyPrice = styled.h5`
  ${tw`
        text-gray-500
        font-bold
        text-sm
    `};
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-400
        text-sm
        mr-1
    `};
`;

const CarDetailsContainer = styled.div`
  ${tw`
       flex
       w-full
       justify-between
    `};
`;

const CarDetail = styled.span`
  ${tw`
       flex
       items-center
    `};
`;

const CarInfo = styled.h6`
  ${tw`
       text-gray-400
       text-xs
    `};
`;

const Separator = styled.div`
min-width:100%
min-height:1px;
    ${tw`
       flex
       bg-gray-300
       mt-2
       mb-2
    `};
`;

const RentButton = styled(Button)`
  ${tw`
       min-w-full
    `};
`;

const SmallText = styled.p`
  color: inherit;
  font-size: 11px;
  ${tw`
        inline-flex
        font-thin
    `};
`;

export function Car(props: ICarProps) {
  const { thumbnailSrc, name, info } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        {/* <img src={thumbnailSrc} /> */}
        <iframe src={thumbnailSrc}
    // width="640" height="360"
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='video'
    />

      </CarThumbnail>
      <CarName>{name}</CarName>
      {/* <PricesContainer>
        <SmallText>
          {info}
        </SmallText>
      </PricesContainer> */}

      {/* <CarDetailsContainer>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faTachometerAlt}/>
                    </SmallIcon>
                    <CarInfo>
                        ABC
                    </CarInfo>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faTachometerAlt}/>
                    </SmallIcon>
                    <CarInfo>
                        ABC
                    </CarInfo>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faTachometerAlt}/>
                    </SmallIcon>
                    <CarInfo>
                        ABC
                    </CarInfo>
                </CarDetail>
            </CarDetailsContainer> */}
    </CarContainer>
  );
}

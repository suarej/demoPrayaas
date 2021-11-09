import React from "react";
import { Footer } from "../../../components/footer";
import { NavBar } from "../../../components/navbar";
import styled from 'styled-components';
import tw from "twin.macro";
import { PareekshanTwoDetails } from "./Pareekshan2";


const PageContainer = styled.div`${tw`
w-full
h-full
flex
flex-col
items-center
overflow-x-hidden
`}
`;

export function PareekshanTwo () {
    return (
        <PageContainer> 
        <NavBar/>
        <PareekshanTwoDetails/>
        <Footer/>
        </PageContainer>
    )
}
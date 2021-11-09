import React from "react";
import { Footer } from "../../../components/footer";
import { NavBar } from "../../../components/navbar";
import styled from 'styled-components';
import tw from "twin.macro";
import { PareekshanOneDetails } from "./PareekshanOne";

const PageContainer = styled.div`${tw`
w-full
h-full
flex
flex-col
items-center
overflow-x-hidden
`}
`;

export function PareekshanOne () {
    return (
        <PageContainer> 
        <NavBar/>
            <PareekshanOneDetails/>
        <Footer/>
        </PageContainer>
    )
}
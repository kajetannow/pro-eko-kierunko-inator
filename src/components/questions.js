import React, { Component } from 'react';
import styled from "styled-components"

import * as questionsStyle from "./questionsStyle.module.css"
import Answers from "./answers.js"
const ContainerH = styled.div`
  display: flex;
  justify-content: center;
`

const ContainerV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Question = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin-top:10px;
`

export default function pageStructure( props ) {
    return (
        <div className={questionsStyle.background}>
            <ContainerH>
                    <ContainerV>
                        <Question>{props.question}</Question>
                        <Answers anwsers={props.anwsers}>

                        </Answers>
                        { props.children }
                    </ContainerV>
            </ContainerH>
        </div>
    )
}
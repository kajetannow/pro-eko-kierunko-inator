import React, { Component } from 'react';
import styled from "styled-components"
import { navigate } from "gatsby"

import * as questionsStyle from "./questionsStyle.module.css"

const ContainerH = styled.div`
  display: flex;
  justify-content: center;
`

const ContainerV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Buttons = styled.li`
  display: flex;
  justify-content: center;
`
export default function pageStructure( props ) {
    return (
        <div className={questionsStyle.background}>
            <ContainerH>
                    <ContainerV>
                    <Buttons>
                      {props.anwsers.map((answer) =>
                        <button onClick={()=>{navigate(`${answer.desc}`)}}>{answer.desc}</button>
                      )}
                    </Buttons>
                    
                    </ContainerV>
                </ContainerH>
        </div>
    )
}
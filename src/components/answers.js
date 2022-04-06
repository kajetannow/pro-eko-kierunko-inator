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
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const Div = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
`
export default function pageStructure( props ) {
  const dodajPunkt=(e, id)=>{
    //props.wynik[0]
 }

      return (
        <div>
            <ContainerH>
                    <ContainerV>
                    <Buttons>
                      {props.answers.map((answer, id) =>
                        <Div key={id}>
                          <button onClick={()=>{navigate(`${answer.link}`)}}>{answer.desc}</button>
                        </Div>
                      )}
                    </Buttons>
                    
                    </ContainerV>
                </ContainerH>
        </div>
    )
}
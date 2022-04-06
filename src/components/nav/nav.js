import React, { Component } from 'react';
import styled from "styled-components"

import * as navStyle from "./navStyle.module.css"

const ContainerH = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

const ContainerV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

class nav extends Component {
    render() {
        return (
            <nav className={navStyle.background}>
                <ContainerH>
                    <ContainerV>
                        <h1 className={navStyle.text}>PUT:ECO</h1>
                        <h3 className={navStyle.text}>PRO-ECO KIERUNKO-INATOR</h3>
                    </ContainerV>
                </ContainerH>
            </nav>
        );
    }
}

export default nav;
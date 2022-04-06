import React, { useState } from 'react';
import Layout from "../components/Layout.js"
import Result from '../components/Result.js';
import { ENERGETYKA, AIR, BUDOWNICTWO, INFA, MECHATRONIKA, INZSR, TOZ } from '../utils/list.js';
import { ENERGY_QUESTIONS } from '../utils/questions.js';


const Energia = () => {
  const [showForm, setShowForm] = useState(true)
  const [answers, setAnswers] = useState([])
  const [points, setPoints] = useState({
    [AIR]: 0,
    [BUDOWNICTWO]: 0,
    [INFA]: 0,
    [MECHATRONIKA]: 0,
    [INZSR]: 0,
    [TOZ]: 0,
    [ENERGETYKA]: 0
  })

  const assignPoints = (arr, code) => {
    console.log(code)
    let temp = arr
      switch (code) {
        // PYTANIE 1.
        case "E0A0":
          temp[INFA] = temp[INFA]+1
          break;
        case "E0A1":
            temp[AIR] = temp[AIR]+1
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1
            break;
        case "E0A2":
            temp[ENERGETYKA] = temp[ENERGETYKA]+1
            break;
        case "E0A3":
              temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1
              temp[INZSR] = temp[INZSR]+1
              temp[TOZ] = temp[TOZ]+1
              break;
        // PYTANIE 2.
        case "E1A0":
          temp[INFA] = temp[INFA]+1
          break;
        case "E1A1":
            temp[AIR] = temp[AIR]+1
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1
            break;
        case "E1A2":
            temp[ENERGETYKA] = temp[ENERGETYKA]+1
            temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1
            break;
        case "E1A3":
              temp[INZSR] = temp[INZSR]+1
              temp[TOZ] = temp[TOZ]+1
              break;
        // PYTANIE 3.
        case "E2A0":
          temp[INZSR] = temp[INZSR]+1
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1
          break;
        case "E2A1":
            temp[ENERGETYKA] = temp[ENERGETYKA]+1
            break;
        case "E2A2":
            temp[TOZ] = temp[TOZ]+1
            temp[INFA] = temp[INFA]+1
            temp[AIR] = temp[AIR]+1
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1
            break;
        // PYTANIE 4.
        case "E3A0":
          temp[ENERGETYKA] = temp[ENERGETYKA]+1
          break;
        case "E3A1":
          temp[TOZ] = temp[TOZ]+1
          temp[INZSR] = temp[INZSR]+1
            break;
        case "E3A2": 
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1
            break;
        case "E3A3": 
          temp[INFA] = temp[INFA]+1
          temp[AIR] = temp[AIR]+1
          break;
        // PYTANIE 5.
        case "E4A0":
          temp[ENERGETYKA] = temp[ENERGETYKA]+1
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+
          break;
        case "E4A1":
          temp[INZSR] = temp[INZSR]+1
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1
          temp[TOZ] = temp[TOZ]+1
            break;
        case "E4A2":
            temp[INFA] = temp[INFA]+1
            temp[AIR] = temp[AIR]+1
            break;
        default:
          break;
      }
      return temp;
  }

  const calcResult = (e, finalAnswers) => {
    e.preventDefault()
    let temp = {}
      for(let i=0; i<finalAnswers.length; i++) {
        temp = assignPoints(points, finalAnswers[i])
      }
    setPoints(temp)
    console.log(temp)
    setShowForm(false)
  }

  const questions = ENERGY_QUESTIONS

  const handleChange=(e, id)=>{
    const temp = answers
    temp[id] = e.target.value
    console.log(answers)
    setAnswers(temp);
 }
  return (
    <Layout>
      <h1>Energia</h1>
      <form className={showForm ? "" : "hidden"}>
          {questions.map((el, elId)=>
          <div key={'question-'+elId} className="question-wrapper">
            <h2>{el.q}</h2>
            <div className="answer-wrapper">
              {el.ans.map((a, aId)=>
                <div key={'question-'+elId+'-a-'+aId} className="input-wrapper">
                  <input type="radio" value={`E${elId}A${aId}`} id={`E${elId}A${aId}`}
                  onChange={e => handleChange(e, elId)} name={`E${elId}`} />
                  <label htmlFor={`E${elId}A${aId}`}>{a}</label>
                </div>)
              }
            </div>
          </div>
        )}
        <button onClick={e => calcResult(e, answers)}>POKAŻ WYNIK</button>
      </form>
      <div className={showForm ? "hidden" : ""}>
        <Result points={points}>

        </Result>
      </div>
    
    </Layout>
  )
}

export default Energia

import React, { useState } from 'react';
import Layout from "../components/Layout.js"
import Result from '../components/Result.js';
import { AIR, BUDOWNICTWO, INFA, MECHATRONIKA, ICHIP, MATERIAL, MIBM, TOS, ZIIP, INZSR, ELEKTROMOBLINOSC, INZLOT, LOGISTYKA, LIK, MIBP, TRANSPORT, TOZ } from '../utils/list.js';
import { CONSTRUCTION_QUESTIONS, INDUSTRY_QUESTIONS, ORDER_QUESTIONS, TRANSPORT_QUESTIONS } from '../utils/questions.js';


const Energia = () => {
  const [showForm, setShowForm] = useState(true)
  const [answers, setAnswers] = useState([])
  const [points, setPoints] = useState({
    [AIR]: 0,
    [INFA]: 0,
    [ICHIP]: 0,
    [INZSR]: 0,
    [MIBP]: 0,
    [TOS]: 0,
    [MECHATRONIKA]: 0,
    [TOZ]: 0
  })

  const assignPoints = (arr, code) => {
    console.log(code)
    let temp = arr
      switch (code) {
        // PYTANIE 1.
        case "O0A0":
          temp[INZSR] = temp[INZSR]+1;
          temp[TOS] = temp[TOS]+1;
          temp[TOZ] = temp[TOZ]+1;
          break; 
        case "O0A1":
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          temp[AIR] = temp[AIR]+1;
          break; 
        case "O0A2":
          temp[INFA] = temp[INFA]+1;
          temp[ICHIP] = temp[ICHIP]+1;
          break; 

                  // PYTANIE 2.
        case "O1A0":
          temp[TOZ] = temp[TOZ]+1;
          break; 
        case "O1A1":
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          temp[AIR] = temp[AIR]+1;
          break; 
        case "O1A2":
          temp[INFA] = temp[INFA]+1;
          temp[INZSR] = temp[INZSR]+1;
          break; 
        case "O1A3":
          temp[ICHIP] = temp[ICHIP]+1;
          temp[TOS] = temp[TOS]+1;
          break; 

                  // PYTANIE 3.
          case "O2A0":
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            temp[AIR] = temp[AIR]+1;
            temp[INFA] = temp[INFA]+1;
            break; 
          case "O2A1":
            temp[TOZ] = temp[TOZ]+1;
            temp[TOS] = temp[TOS]+1;
            break; 
          case "O2A2":
            temp[INZSR] = temp[INZSR]+1;
            break; 
          case "O2A3":
            temp[ICHIP] = temp[ICHIP]+1;
            break; 

            
                  // PYTANIE 4.
          case "O3A0":
            temp[TOZ] = temp[TOZ]+1;
            temp[TOS] = temp[TOS]+1;
            break; 
          case "O3A1":
            temp[ICHIP] = temp[ICHIP]+1;
            break; 
          case "O3A2":
            temp[INZSR] = temp[INZSR]+1;
            break; 
          case "O3A3":
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            temp[AIR] = temp[AIR]+1;
            temp[INFA] = temp[INFA]+1;
            break; 

            
                  // PYTANIE 5.
            case "O4A0":
              temp[ICHIP] = temp[ICHIP]+1;
              temp[TOZ] = temp[TOZ]+1;
              temp[INZSR] = temp[INZSR]+1;
              break; 
            case "O4A1":
              temp[TOS] = temp[TOS]+1;
              break; 
            case "O4A2":
              temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
              temp[AIR] = temp[AIR]+1;
              temp[INFA] = temp[INFA]+1;
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

  const questions = ORDER_QUESTIONS

  const handleChange=(e, id)=>{
    const temp = answers
    temp[id] = e.target.value
    console.log(answers)
    setAnswers(temp);
 }
  return (
    <Layout>
      <h1>Porządek</h1>
      <form className={showForm ? "" : "hidden"}>
          {questions.map((el, elId)=>
          <div key={'question-'+elId} className="question-wrapper">
            <h2>{el.q}</h2>
            <div className="answer-wrapper">
              {el.ans.map((a, aId)=>
                <div key={'question-'+elId+'-a-'+aId} className="input-wrapper">
                  <input type="radio" value={`O${elId}A${aId}`} id={`O${elId}A${aId}`}
                  onChange={e => handleChange(e, elId)} name={`O${elId}`} />
                  <label htmlFor={`O${elId}A${aId}`}>{a}</label>
                </div>)
              }
            </div>
          </div>
        )}
        <button className='btn-show' onClick={e => calcResult(e, answers)}>POKAŻ WYNIK</button>
      </form>
      <div className={showForm ? "hidden" : ""}>
        <Result points={points}>

        </Result>
      </div>
    
    </Layout>
  )
}

export default Energia

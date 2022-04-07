import React, { useState } from 'react';
import Layout from "../components/Layout.js"
import Result from '../components/Result.js';
import { AIR, BUDOWNICTWO, INFA, MECHATRONIKA, ICHIP, MATERIAL, MIBM, TOS, ZIIP, INZSR, ELEKTROMOBLINOSC, INZLOT, LOGISTYKA, LIK, MIBP, TRANSPORT } from '../utils/list.js';
import { CONSTRUCTION_QUESTIONS, INDUSTRY_QUESTIONS, TRANSPORT_QUESTIONS } from '../utils/questions.js';


const Energia = () => {
  const [showForm, setShowForm] = useState(true)
  const [answers, setAnswers] = useState([])
  const [points, setPoints] = useState({
    [AIR]: 0,
    [ELEKTROMOBLINOSC]: 0,
    [INZLOT]: 0,
    [INFA]: 0,
    [LIK]: 0,
    [MIBM]: 0,
    [MIBP]: 0,
    [LOGISTYKA]: 0,
    [MECHATRONIKA]: 0,
    [TRANSPORT]: 0
  })

  const assignPoints = (arr, code) => {
    console.log(code)
    let temp = arr
      switch (code) {
        // PYTANIE 1.
        case "T0A0":
          temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
          temp[TRANSPORT] = temp[TRANSPORT]+1;
          temp[LOGISTYKA] = temp[LOGISTYKA]+1;
          break; 
        case "T0A1":
          temp[LIK] = temp[LIK]+1;
          temp[INZLOT] = temp[INZLOT]+1;
          break; 
        case "T0A2":
          temp[AIR] = temp[AIR]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          temp[MIBM] = temp[MIBM]+1;
          temp[MIBP] = temp[MIBP]+1;
          temp[INFA] = temp[INFA]+1;
          temp[LIK] = temp[LIK]+1;
          temp[INZLOT] = temp[INZLOT]+1;
          temp[LOGISTYKA] = temp[LOGISTYKA]+1;
          temp[TRANSPORT] = temp[TRANSPORT]+1;
          temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
          break; 

        // PYTANIE 2.
        case "T1A0":
          temp[AIR] = temp[AIR]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          temp[MIBM] = temp[MIBM]+1;
          temp[MIBP] = temp[MIBP]+1;
          temp[LOGISTYKA] = temp[LOGISTYKA]+1;
          temp[INFA] = temp[INFA]+1;
          temp[LIK] = temp[LIK]+1;
          temp[INZLOT] = temp[INZLOT]+1;
          temp[TRANSPORT] = temp[TRANSPORT]+1;
          break; 
        case "T1A1":
          temp[AIR] = temp[AIR]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          temp[MIBM] = temp[MIBM]+1;
          temp[MIBP] = temp[MIBP]+1;
          temp[LOGISTYKA] = temp[LOGISTYKA]+1;
          temp[INFA] = temp[INFA]+1;
          temp[LIK] = temp[LIK]+1;
          temp[INZLOT] = temp[INZLOT]+1;
          temp[TRANSPORT] = temp[TRANSPORT]+1;
          break; 
        case "T1A2":
          temp[AIR] = temp[AIR]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          temp[MIBM] = temp[MIBM]+1;
          temp[MIBP] = temp[MIBP]+1;
          temp[INFA] = temp[INFA]+1;
          temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
          break; 

          // PYTANIE 3.
          case "T2A0":
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            temp[INFA] = temp[INFA]+1;
            temp[AIR] = temp[AIR]+1;
            break; 
          case "T2A1":
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            temp[MIBM] = temp[MIBM]+1;
            temp[MIBP] = temp[MIBP]+1;
            temp[INZLOT] = temp[INZLOT]+1;
            break; 
          case "T2A2":
            temp[TRANSPORT] = temp[TRANSPORT]+1;
            temp[LOGISTYKA] = temp[LOGISTYKA]+1;
            break; 

             // PYTANIE 4.
          case "T3A0":
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            temp[LIK] = temp[LIK]+1;
            temp[INFA] = temp[INFA]+1;
            temp[AIR] = temp[AIR]+1;
            break; 
          case "T3A1":
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            temp[MIBM] = temp[MIBM]+1;
            temp[MIBP] = temp[MIBP]+1;
            temp[INZLOT] = temp[INZLOT]+1;
            break; 
          case "T3A2":
            temp[AIR] = temp[AIR]+1;
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            temp[MIBM] = temp[MIBM]+1;
            temp[MIBP] = temp[MIBP]+1;
            temp[INFA] = temp[INFA]+1;
            temp[LIK] = temp[LIK]+1;
            temp[INZLOT] = temp[INZLOT]+1;
            temp[LOGISTYKA] = temp[LOGISTYKA]+1;
            temp[TRANSPORT] = temp[TRANSPORT]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            break; 

                         // PYTANIE 5.
          case "T4A0":
            temp[LIK] = temp[LIK]+1;
            temp[TRANSPORT] = temp[TRANSPORT]+1;
            temp[LOGISTYKA] = temp[LOGISTYKA]+1;
            break; 
          case "T4A1":
            temp[INFA] = temp[INFA]+1;
            temp[MIBM] = temp[MIBM]+1;
            temp[MIBP] = temp[MIBP]+1;
            temp[INZLOT] = temp[INZLOT]+1;
            break; 
          case "T4A2":
            temp[AIR] = temp[AIR]+1;
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            break; 

                         // PYTANIE 6.
          case "T5A0":
            temp[LIK] = temp[LIK]+1;
            temp[INZLOT] = temp[INZLOT]+1;
            temp[MIBM] = temp[MIBM]+1;
            temp[MIBP] = temp[MIBP]+1;
            break; 
          case "T5A1":
            temp[LIK] = temp[LIK]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            break; 
          case "T5A2":
            temp[LIK] = temp[LIK]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            break; 

       // PYTANIE 7.
          case "T6A0":
            temp[LIK] = temp[LIK]+1;
            temp[TRANSPORT] = temp[TRANSPORT]+1;
            temp[LOGISTYKA] = temp[LOGISTYKA]+1;
            break; 
          case "T6A1":
            temp[INFA] = temp[INFA]+1;
            temp[AIR] = temp[AIR]+1;
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            break; 
          case "T6A2":
            temp[MIBM] = temp[MIBM]+1;
            temp[MIBP] = temp[MIBP]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            break; 
          case "T6A3":
            temp[INZLOT] = temp[INZLOT]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
              break; 

                   // PYTANIE 8.
          case "T7A0":
            temp[AIR] = temp[AIR]+1;
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
            temp[MIBM] = temp[MIBM]+1;
            temp[MIBP] = temp[MIBP]+1;
            temp[LIK] = temp[LIK]+1;
            temp[INZLOT] = temp[INZLOT]+1;
            temp[LOGISTYKA] = temp[LOGISTYKA]+1;
            temp[TRANSPORT] = temp[TRANSPORT]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            break; 
          case "T7A1":
            temp[INFA] = temp[INFA]+1;
            break; 
          case "T7A2":
            break; 

            // PYTANIE 8.
          case "T7A0":
            temp[LIK] = temp[LIK]+1;
            temp[INZLOT] = temp[INZLOT]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            break; 
          case "T7A1":
            temp[LOGISTYKA] = temp[LOGISTYKA]+1;
            temp[TRANSPORT] = temp[TRANSPORT]+1;
            temp[ELEKTROMOBLINOSC] = temp[ELEKTROMOBLINOSC]+1;
            temp[MIBM] = temp[MIBM]+1;
            temp[MIBP] = temp[MIBP]+1;
            break; 
          case "T7A2":
            temp[AIR] = temp[AIR]+1;
            temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
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

  const questions = TRANSPORT_QUESTIONS

  const handleChange=(e, id)=>{
    const temp = answers
    temp[id] = e.target.value
    console.log(answers)
    setAnswers(temp);
 }
  return (
    <Layout>
      <h1>Transport</h1>
      <form className={showForm ? "" : "hidden"}>
          {questions.map((el, elId)=>
          <div key={'question-'+elId} className="question-wrapper">
            <h2>{el.q}</h2>
            <div className="answer-wrapper">
              {el.ans.map((a, aId)=>
                <div key={'question-'+elId+'-a-'+aId} className="input-wrapper">
                  <input type="radio" value={`T${elId}A${aId}`} id={`T${elId}A${aId}`}
                  onChange={e => handleChange(e, elId)} name={`T${elId}`} />
                  <label htmlFor={`T${elId}A${aId}`}>{a}</label>
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

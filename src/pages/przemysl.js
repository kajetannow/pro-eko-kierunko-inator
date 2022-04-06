import React, { useState } from 'react';
import Layout from "../components/Layout.js"
import Result from '../components/Result.js';
import { AIR, BUDOWNICTWO, INFA, MECHATRONIKA, ICHIP, MATERIAL, MIBM, TOS, ZIIP } from '../utils/list.js';
import { INDUSTRY_QUESTIONS } from '../utils/questions.js';


const Energia = () => {
  const [showForm, setShowForm] = useState(true)
  const [answers, setAnswers] = useState([])
  const [points, setPoints] = useState({
    [AIR]: 0,
    [BUDOWNICTWO]: 0,
    [INFA]: 0,
    [MECHATRONIKA]: 0,
    [ICHIP]: 0,
    [MATERIAL]: 0,
    [MIBM]: 0,
    [TOS]: 0,
    [ZIIP]: 0
  })

  const assignPoints = (arr, code) => {
    console.log(code)
    let temp = arr
      switch (code) {
        // PYTANIE 1.
        case "I0A0":
          temp[MATERIAL] = temp[MATERIAL]+1;
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
          break;
        case "I0A1":
          temp[AIR] = temp[AIR]+1;
          temp[MIBM] = temp[MIBM]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          break;
        case "I0A2":
          temp[INFA] = temp[INFA]+1;
          temp[ICHIP] = temp[ICHIP]+1;
          break;
        case "I0A3":
          temp[ZIIP] = temp[ZIIP]+1;
          break;
        case "I0A4":
          temp[TOS] = temp[TOS]+1;
          break;

        // PYTANIE 2.
        case "I1A0":
          temp[ICHIP] = temp[ICHIP]+1;
          temp[ZIIP] = temp[ZIIP]+1;
          temp[TOS] = temp[TOS]+1;
          break;
        case "I1A1":
          temp[AIR] = temp[AIR]+1;
          temp[MIBM] = temp[MIBM]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          break;
        case "I1A2":
          temp[INFA] = temp[INFA]+1;
          break;
        case "I1A3":
          temp[ZIIP] = temp[ZIIP]+1;
          temp[MATERIAL] = temp[MATERIAL]+1;
          break;
        case "I1A4":
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
          temp[MATERIAL] = temp[MATERIAL]+1;
          break;

           // PYTANIE 3.
        case "I2A0":
          temp[ZIIP] = temp[ZIIP]+1;
          break;
        case "I2A1":
          temp[AIR] = temp[AIR]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          temp[INFA] = temp[INFA]+1;
          break;
        case "I2A2":
          temp[TOS] = temp[TOS]+1;
          temp[ICHIP] = temp[ICHIP]+1;
          break;
        case "I2A3":
          temp[MATERIAL] = temp[MATERIAL]+1;
          temp[MIBM] = temp[MIBM]+1;
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
          break;
        case "I2A4":
          temp[INFA] = temp[INFA]+1;
          break;

            // PYTANIE 4.
        case "I3A0":
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
          temp[MATERIAL] = temp[MATERIAL]+1;
          break;
        case "I3A1":
          temp[AIR] = temp[AIR]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          break;
        case "I3A2":
          temp[TOS] = temp[TOS]+1;
          temp[ZIIP] = temp[ZIIP]+1;
          break;
        case "I3A3":
          temp[MIBM] = temp[MIBM]+1;
          temp[INFA] = temp[INFA]+1;
          break;
        case "I3A4":
          temp[ICHIP] = temp[ICHIP]+1;
          temp[TOS] = temp[TOS]+1;
          break;

            // PYTANIE 5.
        case "I4A0":
          temp[AIR] = temp[AIR]+1;
          temp[MATERIAL] = temp[MATERIAL]+1;
          break;
        case "I4A1":
          temp[ZIIP] = temp[ZIIP]+1;

          break;
        case "I4A2":
          temp[TOS] = temp[TOS]+1;
          break;
        case "I4A3":
          temp[AIR] = temp[AIR]+1;
          temp[MECHATRONIKA] = temp[MECHATRONIKA]+1;
          temp[MIBM] = temp[MIBM]+1;
          temp[INFA] = temp[INFA]+1;
          break;
        case "I4A4":
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
          break;
        case "I4A5":
            temp[ICHIP] = temp[ICHIP]+1;
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

  const questions = INDUSTRY_QUESTIONS

  const handleChange=(e, id)=>{
    const temp = answers
    temp[id] = e.target.value
    console.log(answers)
    setAnswers(temp);
 }
  return (
    <Layout>
      <h1>Przemysł</h1>
      <form className={showForm ? "" : "hidden"}>
          {questions.map((el, elId)=>
          <div key={'question-'+elId} className="question-wrapper">
            <h2>{el.q}</h2>
            <div className="answer-wrapper">
              {el.ans.map((a, aId)=>
                <div key={'question-'+elId+'-a-'+aId} className="input-wrapper">
                  <input type="radio" value={`I${elId}A${aId}`} id={`I${elId}A${aId}`}
                  onChange={e => handleChange(e, elId)} name={`I${elId}`} />
                  <label htmlFor={`I${elId}A${aId}`}>{a}</label>
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

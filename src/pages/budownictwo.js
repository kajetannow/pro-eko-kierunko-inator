import React, { useState } from 'react';
import Layout from "../components/Layout.js"
import Result from '../components/Result.js';
import { AIR, BUDOWNICTWO, INFA, MATERIAL, INZSR } from '../utils/list.js';
import { CONSTRUCTION_QUESTIONS } from '../utils/questions.js';


const Energia = () => {
  const [showForm, setShowForm] = useState(true)
  const [answers, setAnswers] = useState([])
  const [points, setPoints] = useState({
    [AIR]: 0,
    [BUDOWNICTWO]: 0,
    [INFA]: 0,
    [MATERIAL]: 0,
    [INZSR]: 0,
  })

  const assignPoints = (arr, code) => {
    console.log(code)
    let temp = arr
      switch (code) {
        // PYTANIE 1.
        case "C0A0":
          temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
          break;
        case "C0A1":
          temp[MATERIAL] = temp[MATERIAL]+1;
          temp[INZSR] = temp[INZSR]+1;
          break;
        case "C0A2":
          temp[INFA] = temp[INFA]+1;
          temp[AIR] = temp[AIR]+1;
          break;  

          // PYTANIE 2.
          case "C1A0":
            temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
            break;
          case "C1A1":
            temp[MATERIAL] = temp[MATERIAL]+1;
            temp[INZSR] = temp[INZSR]+1;
            break;
          case "C1A2":
            temp[INFA] = temp[INFA]+1;
            temp[AIR] = temp[AIR]+1;
            break;  

              // PYTANIE 3.
          case "C2A0":
            temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
            break;
          case "C2A1":
            temp[MATERIAL] = temp[MATERIAL]+1;
            temp[INZSR] = temp[INZSR]+1;
            break;
          case "C2A2":
            temp[INFA] = temp[INFA]+1;
            temp[AIR] = temp[AIR]+1;
            break;  
            
              // PYTANIE 4.
          case "C3A0":
            temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
            break;
          case "C3A1":
            temp[INZSR] = temp[INZSR]+1;
            break;
          case "C3A2":
            temp[MATERIAL] = temp[MATERIAL]+1;
            temp[INFA] = temp[INFA]+1;
            temp[AIR] = temp[AIR]+1;
            break;  


              // PYTANIE 5.
          case "C4A0":
            temp[INZSR] = temp[INZSR]+1;
            temp[MATERIAL] = temp[MATERIAL]+1;
            break;
          case "C4A1":
            temp[BUDOWNICTWO] = temp[BUDOWNICTWO]+1;
            break;
          case "C4A2":
            temp[INFA] = temp[INFA]+1;
            temp[AIR] = temp[AIR]+1;
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

  const questions = CONSTRUCTION_QUESTIONS

  const handleChange=(e, id)=>{
    const temp = answers
    temp[id] = e.target.value
    console.log(answers)
    setAnswers(temp);
 }
  return (
    <Layout>
      <h1>Budownictwo</h1>
      <form className={showForm ? "" : "hidden"}>
          {questions.map((el, elId)=>
          <div key={'question-'+elId} className="question-wrapper">
            <h2>{el.q}</h2>
            <div className="answer-wrapper">
              {el.ans.map((a, aId)=>
                <div key={'question-'+elId+'-a-'+aId} className="input-wrapper">
                  <input type="radio" value={`C${elId}A${aId}`} id={`C${elId}A${aId}`}
                  onChange={e => handleChange(e, elId)} name={`C${elId}`} />
                  <label htmlFor={`C${elId}A${aId}`}>{a}</label>
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

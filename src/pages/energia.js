import React, { useState } from 'react';
import Layout from "../components/Layout.js"

// dane


// markup
const Energia = () => {
  const [answers, setAnswers] = useState([])

  const questions = [
    {
      q: "Pytanko",
      ans: [
        "Odpowiedz 1",
        "Odpowiedz 2",
        "Odpowiedz 3",
      ]
    },
    {
      q: "Pytanko2",
      ans: [
        "Odpowiedz 1",
        "Odpowiedz 2",
        "Odpowiedz 3",
      ]
    }
  ]

  const handleChange=(e, id)=>{
    const temp = answers
    temp[id] = e.target.value
    console.log(answers)
    setAnswers(temp);
 }
  return (
    <Layout>
      <h1>Energia</h1>
      <form>
          {questions.map((el, elId)=>
          <div key={'question-'+elId}>
            <h2>{el.q}</h2>
            {el.ans.map((a, aId)=>
            <div key={'question-'+elId+'-a-'+aId}>
              <input type="radio" value={`E${elId}A${aId}`} id={`E${elId}A${aId}`}
              onChange={e => handleChange(e, elId)} name={`E${elId}`} />
              <label htmlFor={`E${elId}A${aId}`}>{a}</label>
            </div>)
            }
            
          </div>
        )}
      </form>
    </Layout>
  )
}

export default Energia

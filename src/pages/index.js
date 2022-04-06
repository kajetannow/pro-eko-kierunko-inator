import * as React from "react"
import Layout from "../components/Layout.js";
import Answers from "../components/answers.js"

// dane
//const question1 = " Pierwsze Pytanie warte zadania";
const answers = [
  {
    link: "energia",
    desc: "Energia",
  },
  {
    link: "transport",
    desc: "Transport",
  },
  {
    link: "budownictwo",
    desc: "Budownictwo",
  },
  {
    link: "przemysl",
    desc: "Przemysł",
  },
 /* {
    link: "uprawy",
    desc: "Uprawy",
  },*/
  {
    link: "porzadek",
    desc: "Porządek",
  },
]
/*

      <div className="answer-wrapper">
          {answers.map((el, id)=><Link key={id} to={el.link} className="btn">{el.desc}</Link>)}
      </div>
      */

// markup
const IndexPage = () => {
  return (
    <Layout>
      <p>Z pasją godną dr. Dundersztyca stworzyliśmy poradnik do wyboru pro-eko kierunku na Politechnice Poznańskiej</p>
      <h1 className="h-font">Jaki sektor wariacie?</h1>
      <Answers answers={answers}>

      </Answers>

    </Layout>
  )
}

export default IndexPage

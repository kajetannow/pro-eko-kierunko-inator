import * as React from "react"
import Layout from "../components/Layout.js";
import PageStructure from "../components/pageStructure.js"
import Answers from "../components/answers.js"
import { Link } from "gatsby";

// dane
//const question1 = " Pierwsze Pytanie warte zadania";
const answers = [
  {
    link: "energia",
    desc: "energia",
  },
  {
    link: "./mojastrona2/",
    desc: "Odpowiedz 2",
  },
  {
    link: "./mojastrona3/",
    desc: "Odpowiedz 3",
  },
  {
    link: "./mojastrona4/",
    desc: "Odpowiedz 4",
  },
  {
    link: "./mojastrona4/",
    desc: "Odpowiedz 4",
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
      <h1 className="h-font">Jaki sektor wariacie?</h1>

      <Answers answers={answers}>

      </Answers>

    </Layout>
  )
}

export default IndexPage

import * as React from "react"
import Layout from "../components/Layout.js";
import PageStructure from "../components/pageStructure.js"
import Answers from "../components/answers.js"

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

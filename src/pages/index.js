import * as React from "react"
import Layout from "../components/Layout.js";
import PageStructure from "../components/pageStructure.js"
import Questions from "../components/questions.js"

// dane
const question1 = " Pierwsze Pytanie warte zadania";
const answers = [
  {
    link: "./mojastrona/",
    desc: "Odpowiedz 1",
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
      <Questions question={question1} anwsers={answers}>
          
      </Questions>
    </Layout>
  )
}

export default IndexPage

import * as React from "react"
import PageStructure from "../components/pageStructure.js"

// dane
const question1 = " Pierwsze Pytanie warte zadania";
const anwsers1 = [
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
    <PageStructure question={question1} anwsers={anwsers1}>
      
    </PageStructure>
  )
}

export default IndexPage

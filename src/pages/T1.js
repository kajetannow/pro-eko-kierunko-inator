import * as React from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/Layout.js";
import PageStructure from "../components/pageStructure.js"
import Answers from "../components/answers.js"

// dane
const wynik2=[
  {
    punkt: "0",
  },
  {
    punkt: "1",
  },
  {
    punkt: "5",
  },
];
const question1 = "Jaki rodzaj transportu Cię interesuje?";
const answers = [
  {
    link: "energia",
    desc: "Lądowy",
  },
  {
    link: "./mojastrona2/",
    desc: "Powietrzny",
  },
  {
    link: "./mojastrona3/",
    desc: "Jak mi dadzą to biorę!",
  },
]

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1 className="h-font">Jaki sektor wariacie?</h1>
      <Answers question={question1} answers={answers}>

      </Answers>
      <Link
      to={`/wynik/`}
      state={{ wynik: wynik2 }}
    >
      Zobacz wynik
    </Link>
    </Layout>
  )
}

export default IndexPage

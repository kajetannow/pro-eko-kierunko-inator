import * as React from "react"
import Layout from "../components/Layout.js";
import { Link, navigate } from "gatsby"

import PageStructure from "../components/pageStructure.js"
import Answers from "../components/answers.js"

// dane
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
const IndexPage = ({location}) => {
  return (
    <Layout>
      <h1 className="h-font">Wynik</h1>
      {location.state.wynik.punkt}
      {
      location.state.wynik.map((answer) =>
          <button onClick={()=>{navigate(`${answer.punkt}`)}}>{answer.punkt}</button>
      )}
    </Layout>
  )
}

export default IndexPage

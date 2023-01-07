import Greet, { Name } from "../components/Greet";

import React, { useState } from 'react'
import CatDropdown from "../components/form/Dropdown";
import '../css/Dropdown.css'

function Home() {

  const options = [{ label: "React JS", value: "ReactJS" },
  { label: "Anguler JS", value: "AngulerJS" },
  { label: "Vue JS", value: "Vue" },
  { label: "Jquery", value: "Jquery" },
  { label: "Javascript", value: "Javascript" },
  { label: "Typescript", value: "Typescript" }]

  const [selected, setSelected] = useState('')
  return (
    <div>
      <CatDropdown options={options}
        selected={selected}
        setSelected={setSelected}
        initialValue={"Choose one"} />
      <div>
        <p>Test Text</p>
      </div>
    </div >
  )
}

export default Home
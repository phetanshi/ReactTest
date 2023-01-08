import React, { useState, useEffect, useRef } from 'react'
import CatDropdown from "../components/form/Dropdown";
import '../css/Dropdown.css'
import { Autocomplete } from "../components/form/Autocomplete";
import axios from "axios";

function Home() {

  const [options, setOptions] = useState([])
  const [selected, setSelected] = useState('')
  const [autoSelected, setAutoSelected] = useState("")

  const autoRef = useRef()

  // useEffect(() => {
  //   axios.get("./sampledata/autoCompleteData.json")
  //     .then(response => {
  //       setOptions(response.data);
  //     })
  //     .catch(error => console.log(error));
  // }, [])

  const searchItems = (searchTerm) => {
    if (searchTerm.length >= 2) {
      axios.get("./sampledata/autoCompleteData.json")
        .then(response => {
          var opts = filterData(response.data, searchTerm);
          setOptions(opts);
        })
        .catch(error => console.log(error));
    }
    else {
      setOptions([]);
    }
  }

  const filterData = (options, searchTerm) => {
    return options.filter(x => {
      return x.value.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return (
    <>
      <CatDropdown options={options}
        selected={selected}
        setSelected={setSelected}
        initialValue={"Choose one"} />

      <div style={{ padding: "20px 40px" }}>
        <Autocomplete ref={autoRef}
          searchItems={searchItems}
          minSearchlength={2}
          label="technology"
          placeholder="select"
          options={options}
          selected={autoSelected}
          setSelected={setAutoSelected} />
      </div>
    </>
  )
}

export default Home
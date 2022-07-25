import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange (e){
    setFirstName(e.target.value);
    console.log(e.target.value)
  }

  function handleLastNameChange(e){
    setLastName(e.target.value);
    console.log(e.target.value)
  }

  return (
    <form>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange}  type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
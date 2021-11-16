// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  
  // this finds the local storage value and adds it to the variable EVERYTIME
  initialName = window.localStorage.getItem('name')
  const [name, setName] = React.useState(initialName)

  // 🐨 Here's where you'll use `React.useEffect`.
  React.useEffect(function() {
    // The callback should set the `name` in localStorage.
    window.localStorage.setItem('name', name)
    console.log(window.localStorage)
  })

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App

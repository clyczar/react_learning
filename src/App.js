
import './App.css'
import React from "react"
function Hello () {
  const alert123 = () => {
    alert('aaa')
  }
  return <div onClick={alert123}>hello</div>
}

class HelloComponent extends React.Component {
  alert345 = () => {
    console.log(345)
  }
  render () {
    return <div onClick={this.alert345}>hello component</div>
  }
}

function App () {
  return (
    <div className="App">
      <Hello />
      <Hello></Hello>
      <HelloComponent />
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App

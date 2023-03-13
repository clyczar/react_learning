
import './App.css'
import React from "react"
function Hello () {
  const alert123 = () => {
    alert('aaa')
  }
  return <div onClick={alert123}>hello</div>
}

class HelloComponent extends React.Component {
  state = {
    counter: 0
  }
  alert345 = (e) => {
    this.setState({
      counter: this.state.counter + 1
    })
    console.log(this.state.counter)
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

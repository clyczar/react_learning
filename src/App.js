
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
    message: 'this is message'
  }
  submitInput = (e) => {
    console.log(e)
    this.setState({
      message: e.target.value
    })
  }

  render () {
    return (
      <>
        <div>
          <input type='text' value={this.state.message} onChange={this.submitInput}></input>
        </div>
      </>
    )
  }
}

function App () {
  return (
    <div className="App">
      {/* <Hello />
      <Hello></Hello> */}
      <HelloComponent />
      {/* <HelloComponent></HelloComponent> */}
    </div>
  )
}

export default App

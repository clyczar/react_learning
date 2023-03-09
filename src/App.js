
const name = 'Pat'
const gerAge = () =>{
  return 18
}
const flag = true
function App() {
  return (
    <div className="App">
      {name}
      {gerAge()}
      {flag? 'good':'bad'}
    </div>
  );
}

export default App;

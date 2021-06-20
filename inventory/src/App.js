import './App.css';
import Info from './info.js'
function App() {
  return (
    <div className="App">
      <Info></Info>
      <AddItem></AddItem>
    </div>
  );
}


  


function AddItem() {
  const value = "default";
  return (
    <form>
      <label for = 'text-form'>Type something:</label>
      <input type = 'text' value = {value} id ='text-form'></input>
    </form>
  )
}
export default App;

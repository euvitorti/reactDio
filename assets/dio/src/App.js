import Button from "./components/button/button";

function App() {

  // NÃO PODE RETORNAR MAIS DE UM COMPONENTE JSX
  //  return (
  //   <div className="App">
  //     Hello World
  //   </div>
  // <button></button>
  // );

   // FAÇA O SEGUINTE
  // return (<>
  //   <div className="App">
  //     Hello World
  //   </div>
  //   <button></button>
  //   </>
  // );

  return (
    <div className="App">
      <h1>Hello Rect</h1>
      <Button title="Login" />
      <Button title="Log Out" />
    </div>
  );
}

export default App;

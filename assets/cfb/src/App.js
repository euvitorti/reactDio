import React from "react";

// APONTANDO PARA A PASTA EM SRC
import Bob from './components/img/bob.jpeg'

export default function App() {

  const canal = 'CFB Cursos';
  const curso = 'React';
  const autor = 'Bruno';

  return (
    <>
      <p>Canal: {canal}</p>
      <p>Curso: {curso}</p>
      <p>Autor: {autor}</p>
      <img src={Bob} width={500} height={300}></img>
      {/* APONTANDO PARA A PASTA EM PUBLIC */}
      <img src="img/sid.jpeg" width={500} height={300}></img>
    </>
  )
}

// export default App();
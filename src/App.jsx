import { useState } from "react";

import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";




function App() {
  const [formularioEstaVisivel, setFormnularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
        
      )}

    {/*formularioEstaVisivel && (
        <Formulario /> 
    )}

    <button onClick={() => setFormnularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button >*/}
    </>
  )

}

export default App

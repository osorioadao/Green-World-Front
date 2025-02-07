import React from 'react';
import { useTranslation } from 'react-i18next';
import WorldFlag from "react-world-flags";
import "./Language/i18n";

// import axios form 'axios'
// const server = axios.create({
//   baseURL: 'http//localhost:3002'
// })


 const App: React.FC = () => {

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  // server.get('/users'.then(( response) => {
  //   console.log(response)
  // })).catch((error) => {
  //console.error('Erro na requisição:', error);
//});

  return (
    <>
       <button onClick={() => changeLanguage("en")}>
        <WorldFlag code="GB" style={{width: 30, height: 20, margin: "0 10px"}}></WorldFlag>
       </button>
       <button onClick={() => changeLanguage("pt")}>
        <WorldFlag code="BR" style={{ width: 30, height: 20, margin: "0 10px" }} />
      </button>
      
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  )
}

export default App

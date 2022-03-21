import React, { Suspense, lazy } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Header = lazy(() => import("./components/Header/Header"));
const Top = lazy(() => import("./components/Top/Top"));
const Modelos = lazy(() => import("./components/Modelos/Modelos"));
const Empresa = lazy(() => import("./components/Pages/Empresa/Empresa"));
const Form = lazy(() => import("./components/Form/Form"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Modelo = lazy(() => import("./components/Modelo/Modelo"));
const Plano = lazy(() => import("./components/Plano/Plano"));
const Comparar = lazy(() => import("./components/Pages/Comparar/Comparar"));
const Ofertas = lazy(() => import("./components/Pages/Ofertas/Ofertas"));
const WpButton = lazy(() => import("./components/Button/WpButton"));
const Gracias = lazy(() => import("./components/Pages/Gracias/Gracias"));
const Encuesta = lazy(() => import("./components/Pages/Encuesta/Encuesta"));

// import ShowroomVirtual from "./components/Pages/ShowroomVirtual/ShowroomVirtual";

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="cargaContenedor">
            <video
              src="/images/Carga.mp4"
              autoPlay
              loop
              muted
              type="video/mp4"
            />
          </div>
        }
      >
        <Header />
        <Switch>
          <Route path="/" exact>
            <Top />
            <Modelos />
          </Route>

          <Route exact path="/modelo/:modelo">
            <Modelo />
          </Route>

          <Route exact path="/modelo/:modelo/plano">
            <Plano />
          </Route>

          <Route exact path="/comparar">
            <Comparar />
          </Route>

          <Route path="/empresa" exact>
            <Empresa />
          </Route>

          {/* <Route path="/showroom-virtual" exact>
            <ShowroomVirtual />
          </Route> */}
          <Route exact path="/ofertas">
            <Ofertas />
          </Route>
          <Route path="/contacto" exact>
            <Form />
          </Route>
          <Route exact path="/gracias">
            <Gracias />
          </Route>
          <Route exact path="/encuesta" component={Encuesta} />
          <Route path="*">
            <Top />
            <Modelos />
          </Route>
        </Switch>
        <WpButton />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

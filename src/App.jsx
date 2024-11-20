import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <main className="contaitner-fluid d-flex justify-content-center">
        <section className="contenedor-info-form mt-5 w-50 text-center">
          <h2 className="text-light fw-bold mt-2">Lista de Tareas</h2>
        </section>
      </main>
    </body>
  );
}

export default App;

import Planta from './Tipos/Planta.png';
import Fuego from './Tipos/Fuego.png';
import Tierra from './Tipos/Tierra.png';
import Agua from './Tipos/Agua.png'

import './css/bootstrap.css';

function App() {
  return (
    <>
    <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
    <table class="table table-bordered">
      <thead>
        <th>Tipo</th>
        <th>Fuerte contra</th>
        <th>Debil contra</th>
      </thead>
      <tbody>
        <tr>
          <td scope="row">
            <button class="btn btn-light"><img  src={Planta} alt="Tipo Planta" width="70px" /></button>
            <button class="btn btn-light"><img src={Fuego} alt="Tipo Planta" width="70px" /></button>
            <button class="btn btn-light"><img src={Tierra}  alt="Tipo Planta" width="70px" /></button>
            <button class="btn btn-light"><img src={Agua} alt="Tipo Planta" width="70px" /></button>
          </td>
        </tr>
      </tbody>
      </table>
      </>
  );
}

export default App;

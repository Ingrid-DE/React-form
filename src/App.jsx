import { useState } from "react"; 
function App() {
  
  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert( `Tu compra fue guardado como: ${JSON.stringify(inputs)}`);
    console.log(inputs);
  } 
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-2">
          <form onSubmit={handleSubmit}>
      <div class="card-body bg-danger text-white">Floreria Rojas </div>
      <label>Comprador:
      <input
        type="text"
        name="nombre"
        value={inputs.nombre || ""}
        onChange={handleChange}
        />
      ###Cami agrega tus codigos
    tu campo es cliente





    
    ###juanjo agrega tus codigos
    tu campo es tipo de ramo






      </label>
      <button className="btn-success" type="submit">Pedir</button>
    </form>          
        </div>
      </div>
    </div>
        );
      }
      
      export default App; 
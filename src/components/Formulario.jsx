import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fingreso, setFingreso] = useState('');
  const [sintomas, setSintomas] = useState('');

  //Manejo de errores
  const [error, setError] = useState(false);

  //revision paciente actual
  
  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFingreso(paciente.fingreso)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  //Generar ID
  const generarID = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar formulario
    if ([nombre, propietario, email, fingreso, sintomas].includes('')) {
      console.log('Hay al menos un campo vacío');
      setError(true);
      return;
    }

    setError(false);

    //Objeto de pacientes

    const objetoPaciente = {
      nombre, propietario, email, fingreso, sintomas
    }

    //Actualizar
    if(paciente.id){
      //console.log('Editando')
      objetoPaciente.id = paciente.id
      //console.log(objetoPaciente)
      //console.log(paciente)
      const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id=== paciente.id ? objetoPaciente:pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //console.log('Nuevo paciente')
      //console.log(objetoPaciente);
      objetoPaciente.id= generarID();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reinicio form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFingreso('');
    setSintomas('');

  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        {error && <Error> <p>Todos los campos son obligatorios!</p></Error>}

        <div className="mb-5">

          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota:
          </label>
          <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        </div>
        <div className="mb-5">

          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario:
          </label>
          <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" placeholder="Nombre del propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)} />

        </div>

        <div className="mb-5">

          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email Propietario:
          </label>
          <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email" placeholder="Email del propietario" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>
        <div className="mb-5">

          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
            Fecha de Ingreso:
          </label>
          <input id="fecha" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date" value={fingreso} onChange={(e) => setFingreso(e.target.value)} />

        </div>
        <div className="mb-5">

          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas:
          </label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas" placeholder="Describe los síntomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />

        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3
         text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente":"Agregar Paciente"} />

      </form>

    </div>
  )
}

export default Formulario;
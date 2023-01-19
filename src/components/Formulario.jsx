import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fingreso, setFingreso] = useState('');
  const [sintomas, setSintomas] = useState('');

  //Manejo de errores
  const[error, setError]= useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();

    //validar formulario
    if([nombre, propietario, email, fingreso, sintomas].includes('')){
      console.log('Hay al menos un campo vacío');
      setError(true);
      return;
    }else{
      console.log('Todos los campos estas llenos');
    }

    //setError(false)

    console.log('Enviando formulario');
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        {error && (<div className="bg-red-800 text-white p-3 uppercase text-center font-bold rounded-md">

            <p>Todos los campos son obligatorios!</p>
            
            </div>)}
        
        <div className="mb-5">

          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota:
          </label>
          <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
          
        </div>
        <div className="mb-5">
          
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario:
          </label>
          <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" placeholder="Nombre del propietario" value={propietario} onChange={(e)=> setPropietario(e.target.value)}/>
          
        </div>

        <div className="mb-5">
          
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email Propietario:
          </label>
          <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="email" placeholder="Email del propietario" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          
        </div>
        <div className="mb-5">
          
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
            Fecha de Ingreso:
          </label>
          <input id="fecha" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="date" value={fingreso} onChange={(e)=> setFingreso(e.target.value)}/>
          
        </div>
        <div className="mb-5">
          
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas:
          </label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          id="sintomas"  placeholder="Describe los síntomas" value={sintomas} onChange={(e)=> setSintomas(e.target.value)} />
          
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3
         text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
         value="Agregar Paciente"/>
        
      </form>
    
    </div>
  )
}

export default Formulario;
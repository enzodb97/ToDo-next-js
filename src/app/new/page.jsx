
"use client"

function NewPage() {
const onSubmit = async (e)=>{
    e.preventDefault()
    const title = e.target.title.value
    const priority = e.target.priority.value
    const state = e.target.state.value
    const description = e.target.description.value

    const response = await fetch('/api/tasks',{
        method: 'POST',
        body: JSON.stringify({title, description, priority, state}),
        headers:{
            'Content-Type': "application/json"
        }
    })
    const data = await response.json()
    console.log(data)
}
const handleReset = (e) => {
    e.target.form.reset();
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
    <form onSubmit={onSubmit}>
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-2xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-white"
            >
              Nombre de la tarea
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-white"
            >
              Prioridad
            </label>
            <div className="mt-2">
              <select
                id="priority"
                name="priority"
                className="block w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
                <option>Urgente</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-white"
            >
              Estado
            </label>
            <div className="mt-2">
              <select
                id="state"
                name="state"
                className="block w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option>Sin iniciar</option>
                <option>Iniciado</option>
                <option>En espera</option>
                <option>En conflicto</option>
                <option>Terminado</option>
              </select>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium text-white"
            >
              Sobre la tarea
            </label>
            <div className="mt-2">
              <textarea
                name="about"
                id="description"
                rows="3"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              ></textarea>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Escribe lo más detallado posible la tarea.
            </p>
          </div>
        </div>
        <hr />
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-white" onClick={handleReset}>
          Borrar
        </button>
        <button
          type="submit"
          
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Guardar
        </button>
      </div>
      </div>
      </form>
    </div>
  );
}
export default NewPage;

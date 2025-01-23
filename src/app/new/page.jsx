function NewPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-2xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-white"
            >
              Nombre de la tarea
            </label>
            <div className="mt-2">
              <input
                id="first-name"
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
              htmlFor="status"
              className="block text-sm font-medium text-white"
            >
              Estado
            </label>
            <div className="mt-2">
              <select
                id="status"
                name="status"
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
                id="about"
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
        <button type="button" className="text-sm/6 font-semibold text-white">
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
      
    </div>
  );
}
export default NewPage;

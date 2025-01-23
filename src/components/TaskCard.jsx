function TaskCard  ({task}) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
    <div className="flex justify-between items-center mt-2 mb-4">
      <span className={`text-sm font-medium px-2 py-1 rounded-full ${getPriorityClass(task.priority)}`}>
        {task.priority}
      </span>
      <span className={`text-sm font-medium px-2 py-1 rounded-full ${getStateClass(task.state)}`}>
        {task.state}
      </span>
    </div>
    <p className="text-gray-600">{task.description}</p>
    <p className="text-gray-400 mt-2 text-sm">{new Date(task.createdAt).toLocaleDateString()}</p>
  </div>
  )
}
function getPriorityClass(priority) {
    switch (priority) {
      case 'Baja':
        return 'bg-green-200 text-green-800';
      case 'Media':
        return 'bg-yellow-200 text-yellow-800';
      case 'Alta':
        return 'bg-orange-200 text-orange-800';
      case 'Urgente':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  }
  
  function getStateClass(state) {
    switch (state) {
      case 'Sin iniciar':
        return 'bg-gray-200 text-gray-800';
      case 'Iniciado':
        return 'bg-blue-200 text-blue-800';
      case 'En espera':
        return 'bg-yellow-200 text-yellow-800';
      case 'En conflicto':
        return 'bg-red-200 text-red-800';
      case 'Terminado':
        return 'bg-green-200 text-green-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  }
  
export default TaskCard
function NotFound() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-white">404</h1>
          <p className="text-2xl text-gray-300">Página no encontrada</p>
          <a
            href="/"
            className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-500 transition-colors duration-300"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    );
  }
  
  export default NotFound;
  
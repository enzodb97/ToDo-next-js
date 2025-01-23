import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white">NextCRUD</h3>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Listado de tareas
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-gray-300 hover:text-white transition-colors duration-200">
              Nueva tarea
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

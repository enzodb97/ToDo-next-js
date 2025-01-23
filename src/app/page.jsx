import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);
  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
           <TaskCard task={task} key={task.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}



export default HomePage;

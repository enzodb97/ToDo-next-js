import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}

export function PUT(request, { params }) {
  return NextResponse.json("Actualizar tarea" + params.id);
}

export async function DELETE(request, { params }) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(
      "Tarea con la id" + params.id + " eliminada con éxito"
    );
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

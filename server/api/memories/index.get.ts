import { getServerSession } from "#auth";
import { prisma } from "@/server/lib/prisma";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!
    }
  });

  const memories = await prisma.memory.findMany({
    where: {
      userId: user?.id
    },
    orderBy: {
      date: "asc"
    }
  });

  return memories;
});

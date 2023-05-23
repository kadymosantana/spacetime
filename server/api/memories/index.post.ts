import { z } from "zod";
import { getServerSession } from "#auth";
import { prisma } from "@/server/lib/prisma";

export default defineEventHandler(async (event) => {
  const bodySchema = z.object({
    content: z.string(),
    coverUrl: z.string(),
    date: z.string().datetime()
  });

  const body = await readBody(event);

  const { content, coverUrl, date } = bodySchema.parse(body);

  const session = await getServerSession(event);

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!
    }
  });

  const memory = await prisma.memory.create({
    data: {
      content,
      coverUrl,
      date,
      userId: user!.id
    }
  });

  return memory;
});

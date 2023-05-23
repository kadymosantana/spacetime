import { z } from "zod";
import { prisma } from "@/server/lib/prisma";

export default defineEventHandler(async (event) => {
  const paramsSchema = z.object({
    id: z.string().uuid()
  });

  const bodySchema = z.object({
    content: z.string(),
    coverUrl: z.string(),
    date: z.string().datetime()
  });

  const params = getRouterParams(event);
  const body = await readBody(event);

  const { id } = paramsSchema.parse(params);
  const { content, coverUrl, date } = bodySchema.parse(body);

  const memory = await prisma.memory.update({
    where: { id },
    data: {
      content,
      coverUrl,
      date
    }
  });

  return memory;
});

import { z } from "zod";
import { prisma } from "@/server/lib/prisma";

export default defineEventHandler(async (event) => {
  const paramsSchema = z.object({
    id: z.string().uuid()
  });

  const { id } = paramsSchema.parse(getRouterParams(event));

  const memory = await prisma.memory.findUnique({
    where: {
      id
    }
  });

  return memory;
});

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import { NuxtAuthHandler } from "#auth";
import { prisma } from "@/server/lib/prisma";

export default NuxtAuthHandler({
  pages: { signIn: "/" },
  adapter: PrismaAdapter(prisma),
  providers: [
    // @ts-expect-error
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ]
});

import prisma from "../../../prisma/db";

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return posts;
  }
});

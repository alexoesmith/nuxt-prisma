import prisma from "../../../prisma/db";

export default defineEventHandler(async (event) => {
  const {
    context: {
      params: { id },
    },
  } = event;

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: true,
    },
  });

  return post;
});

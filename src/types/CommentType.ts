import { Prisma } from "@prisma/client";

export const commentSelect = Prisma.validator<Prisma.CommentSelect>()({
  id: true,
  content: true,
  author: true,
  authorId: true,
  post: true,
  postId : true
});

export type ICommentAttribute = Prisma.CommentGetPayload<{
  select: typeof commentSelect;
}>;
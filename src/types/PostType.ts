import { Prisma } from "@prisma/client";

export const postSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  author: true,
  authorId: true,
  comments: true,
  likes: true,
});

export type IPostAttribute = Prisma.PostGetPayload<{
  select: typeof postSelect;
}>;

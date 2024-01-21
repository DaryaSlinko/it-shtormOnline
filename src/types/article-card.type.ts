import {CommentType} from "./comment.type";

export type ArticleCardType = {
  id: string,
  title: string,
  description: string,
  image: string,
  date: string,
  category: string,
  url: string,
  text: string,
  comments: CommentType[],
  commentsCount: number
}

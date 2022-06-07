import CommentInfo from "./Comment";
import UserInfo from "./User";

export default interface PostInfo {
  _id: string;
  author: UserInfo;
  date: Date;
  title: string;
  content: string;
  comments: CommentInfo[];
}

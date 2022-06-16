import CommentInfo from "./Comment";
import UserInfo from "./User";

export default interface PostInfo {
  _id: string;
  author: string;
  date: Date;
  title: string;
  content: string;
}

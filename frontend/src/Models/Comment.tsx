import UserInfo from "./User";

export default interface CommentInfo {
  id: number;
  author: UserInfo;
  date: Date;
  content: string;
}

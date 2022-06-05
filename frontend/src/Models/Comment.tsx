import UserInfo from "./User";

export default interface CommentInfo {
  author: UserInfo;
  date: Date;
  content: string;
}

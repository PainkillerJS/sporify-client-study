import type { CommentModel } from "./comment.model";

export interface TrackModel {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: string;
  picture: string;
  audio: string;
  comments: CommentModel[];
}

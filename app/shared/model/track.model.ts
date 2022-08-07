import type { CommentModel } from "./comment.model";

export interface TrackModel {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: string;
  pictures: string;
  audio: string;
  comments: CommentModel[];
}

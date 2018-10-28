export class Post {

  id: number;
  content: string;
  writer: string;
  constructor(_id: number, _content: string, _writer: string) {
    this.id = _id;
    this.content = _content;
    this.writer = _writer;
  }
}

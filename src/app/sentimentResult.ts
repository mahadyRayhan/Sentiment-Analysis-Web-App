export class SentimentResult {
  constructor(
    public text_to_analyse?: String,
    public result?: string,
    public probability?: string,
    public resOBJ?:object
  ){}
}

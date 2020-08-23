export class AuctionAsset {
  constructor(
    public id: number,
    public bankName :string,
    public title: string,
    public price: number,
    public rating: number,
    public auctionStartDate : string,
    public address : string,
    public description: string,
    public category: string) {
  }
}

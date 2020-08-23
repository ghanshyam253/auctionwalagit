import { Component, OnInit } from '@angular/core';
import {AuctionAsset} from "../shared/auction-asset";

@Component({
  selector: 'auction-page-asset-list',
  templateUrl: './page-asset-list.component.html',
  styleUrls: ['./page-asset-list.component.scss']
})
export class PageAssetListComponent implements OnInit {
  AuctionAssets : AuctionAsset[];  //or Array<AuctionAsset> 

  constructor() { }

  ngOnInit() {
    this.createAuctionAssetsObj();

  }
  createAuctionAssetsObj() {
    this.AuctionAssets = [
      new AuctionAsset(0,"Sample Bank","t1",20200,2.5,"23/06/2020","Nashik, Maharashtra","desc1","Industrial"),
      new AuctionAsset(1,"Sample Bank","t1",20200,2.5,"23/06/2020","Nashik, Maharashtra","desc1","Residential"),
      new AuctionAsset(2,"Sample Bank","t1",20200,2.5,"23/06/2020","Nagpur, Maharashtra","desc1","Commercial"),
      new AuctionAsset(3,"Sample Bank","t1",20200,2.5,"23/06/2020","Nagpur, Maharashtra","desc1","Industrial"),
      new AuctionAsset(4,"Sample Bank","t1",20200,2.5,"23/06/2020","Delhi, Delhi","desc1","Residential"),
      new AuctionAsset(5,"Sample Bank","t1",20200,2.5,"23/06/2020","Nagpur, Maharashtra","desc1","Residential"),
      new AuctionAsset(6,"Sample Bank","t1",20200,2.5,"23/06/2020","Delhi, Delhi","desc1","Industrial"),
      new AuctionAsset(7,"Sample Bank","t1",20200,2.5,"23/06/2020","Delhi, Delhi","desc1","Commercial"),

    ];
  };
}

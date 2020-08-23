import { Component, OnInit, Input } from '@angular/core';
import {AuctionAsset} from "../shared/auction-asset";

@Component({
  selector: 'auction-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.scss']
})
export class AssetItemComponent implements OnInit {
  @Input() asset: AuctionAsset;

  constructor() {
    console.log(this.asset);

   }

  ngOnInit() {
    console.log(this.asset);
  }

}

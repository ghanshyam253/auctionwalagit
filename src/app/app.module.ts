import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AssetItemComponent } from './asset-item/asset-item.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { HomeSearchSectionComponent } from './home-search-section/home-search-section.component';
import { PageAssetListComponent } from './page-asset-list/page-asset-list.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    AssetItemComponent,
    AssetListComponent,
    HomeSearchSectionComponent,
    PageAssetListComponent,
    PageBlogComponent,
    PageAboutComponent,
    FilterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

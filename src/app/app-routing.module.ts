import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { PageAssetListComponent } from './page-asset-list/page-asset-list.component';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { PageAboutComponent } from './page-about/page-about.component';

const routes: Routes = [
  {path: 'page-home',                    component: HomePageComponent},
  {path: 'page-asset-list',     component: PageAssetListComponent},
  {path: 'page-blog',           component: PageBlogComponent},
  {path: 'page-about',          component: PageAboutComponent},
  { path: '', redirectTo: '/page-home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

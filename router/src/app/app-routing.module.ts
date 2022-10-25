import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{
  path: '',
  component: SearchComponent
},{
  path: 'wcs/:studentName',
  component: SchoolComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

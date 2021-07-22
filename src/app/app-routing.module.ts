import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
    {path: 'view', component: CharacterComponent},
    {path: 'list', component: CharacterListComponent},
    {path: '*', component: CharacterListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
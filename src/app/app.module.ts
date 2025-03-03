import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { AddScategorieComponent } from './scategorie/add-scategorie/add-scategorie.component';
import { ListScategorieComponent } from './scategorie/list-scategorie/list-scategorie.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddCommComponent } from './commande/add-comm/add-comm.component';
import { AdLdommComponent } from './lcomm/ad-ldomm/ad-ldomm.component';
import { ListCommComponent } from './commande/list-comm/list-comm.component';



const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];
const appRoutes : Routes = [
  {path: '', component:MenuComponent,children : [
  {path: 'clients', component: ListClientComponent},
  {path: 'client', component: AddClientComponent},
  {path: 'clients', component: ListClientComponent},
  {path: 'categories', component: ListCategorieComponent},
  {path: 'categorie', component: AddCategorieComponent},
  {path: 'scategories', component: ListScategorieComponent},
  {path: 'scategorie', component: AddScategorieComponent},
  {path: 'larticle', component: ListArticleComponent},
  {path: 'article', component: AddArticleComponent},]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registerp', component: RegisterComponent},
  {path: 'loginp', component: LoginComponent},
  {path: 'users', component: ListUserComponent},
  {path: 'commande', component: AddCommComponent},
  {path: 'lcomm', component: ListCommComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    AddScategorieComponent,
    ListScategorieComponent,
    AddArticleComponent,
    ListArticleComponent,
    MenuComponent,
    ListUserComponent,
    LoginComponent,
    RegisterComponent,
    AdLdommComponent,
    AddCommComponent,
    AdLdommComponent,
    ListCommComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    
    
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    NgMatSearchBarModule,
  ],
  exports : MATERIAL_MODULES,
  providers: [DatePipe,{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

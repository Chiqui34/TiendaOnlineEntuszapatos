import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerCarouselComponent } from './entities/banner/banner-carousel/banner-carousel.component';
import { PortiVisorComponent } from './entities/porti/porti-visor/porti-visor.component';
import { CategoriaVisorComponent } from './entities/categoria/categoria-visor/categoria-visor.component';
import { ListArticulosCategoriasComponent } from './entities/categoria/list-articulos-categorias/list-articulos-categorias.component';
import { CategoriaArticuloDetailComponent } from './entities/categoria/categoria-articulo-detail/categoria-articulo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BannerCarouselComponent,
    PortiVisorComponent,
    CategoriaVisorComponent,
    ListArticulosCategoriasComponent,
    CategoriaArticuloDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

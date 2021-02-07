import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }      from './app.component';
import { ContadorModule }    from './contador/contador.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { DbzModule }         from './dbz/dbz.module';
import { HeroeModule }       from './heroes/heroe.module';
import { HeroeComponent }    from './heroes/heroe/heroe.component';
import { ListadoComponent }  from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent
  ],
            imports: [
              BrowserModule,
              HeroeModule,
              ContadorModule,
              DbzModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

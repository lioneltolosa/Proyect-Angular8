import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';

// Services
import { InterceptorsService } from './services/interceptors.service';

@NgModule({
    declarations: [
        AppComponent,
        RxjsComponent,
        HomeComponent,
        SearchComponent,
        ArtistComponent,
        NavbarComponent,
        InterceptorsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorsService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

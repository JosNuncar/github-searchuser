import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './components/bio/bio.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardComponent } from './components/card/card.component';
import { LinksGridComponent } from './components/links-grid/links-grid.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { StatsBlockComponent } from './components/stats-block/stats-block.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    CardHeaderComponent,
    CardComponent,
    LinksGridComponent,
    SearchBarComponent,
    StatsBlockComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

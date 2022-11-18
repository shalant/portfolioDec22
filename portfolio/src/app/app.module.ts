import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
// import { SignupComponent } from './auth/signup/signup.component';
// import { LoginComponent } from './auth/login/login.component';

import {MatNativeDateModule} from '@angular/material/core';
import { HeaderComponent } from './navigation/nav-header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    // SignupComponent,
    // LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    PortfolioComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

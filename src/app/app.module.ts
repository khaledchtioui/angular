import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseFrontComponent } from './base-front/base-front.component';
import { LoginComponent } from './user/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ForgotpasswordComponent } from './user/forgotpassword/forgotpassword.component';
import { SettingeditprofileComponent } from './user/settingeditprofile/settingeditprofile.component';
import { NgOptimizedImage } from '@angular/common';
import { ArticlefrontComponent } from './article/articlefront/articlefront.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { TermsconditionsComponent } from './user/termsconditions/termsconditions.component';
import { PrivacyPolicyComponent } from './user/privacy-policy/privacy-policy.component';
import { ArticlelistComponent } from './article/articlelist/articlelist.component';
import { ArticlegridComponent } from './article/articlegrid/articlegrid.component';
import { ArticledetailsComponent } from './article/articledetails/articledetails.component';
import { Error404Component } from './errors/error404/error404.component';
import { Error500Component } from './errors/error500/error500.component';
import { SigninComponent } from './user/signin/signin.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './backoffice/student/dashboard/dashboard.component';
import { Navbar3Component } from './shared/navbar3/navbar3.component';
import { Sidebar1Component } from './shared/sidebar1/sidebar1.component';
import { EditprofileComponent } from './backoffice/student/editprofile/editprofile.component';
import { DeleteprofileComponent } from './backoffice/student/deleteprofile/deleteprofile.component';
import { MyarticleComponent } from './backoffice/student/myarticle/myarticle.component';
import { Sidebar2Component } from './shared/sidebar2/sidebar2.component';
import { DashboardAdminComponent } from './backoffice/admin/dashboard-admin/dashboard-admin.component';
import { UserlistComponent } from './backoffice/admin/userlist/userlist.component';
import { UsergridComponent } from './backoffice/admin/usergrid/usergrid.component';
import { AllarticleComponent } from './backoffice/admin/allarticle/allarticle.component';
import { SignupComponent } from './user/signup/signup.component';
import { ComingsoonComponent } from './errors/comingsoon/comingsoon.component';
import { AdmineditprofileComponent } from './backoffice/admin/admineditprofile/admineditprofile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BaseFrontComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ForgotpasswordComponent,
    SettingeditprofileComponent,
    ArticlefrontComponent,
    Navbar2Component,
    TermsconditionsComponent,
    PrivacyPolicyComponent,
    ArticlelistComponent,
    ArticlegridComponent,
    ArticledetailsComponent,
    Error404Component,
    Error500Component,
    SigninComponent,
    DashboardComponent,
    Navbar3Component,
    Sidebar1Component,
    EditprofileComponent,
    DeleteprofileComponent,
    MyarticleComponent,
    Sidebar2Component,
    DashboardAdminComponent,
    UserlistComponent,
    UsergridComponent,
    AllarticleComponent,
    SignupComponent,
    ComingsoonComponent,
    AdmineditprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

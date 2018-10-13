import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material.module';
import { FlextestComponent } from './flextest/flextest.component';
import { MypageComponent } from './mypage/mypage.component';
import { ExplorComponent } from './explor/explor.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FlextestComponent,
    MypageComponent,
    ExplorComponent,
    SubscribeComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

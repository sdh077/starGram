import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FlextestComponent } from './flextest/flextest.component';
import { MypageComponent } from './mypage/mypage.component';
import { AddpostComponent } from './addpost/addpost.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExplorComponent } from './explor/explor.component';

const routes: Routes = [
  { path: '', component: MainComponent  },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'ft', component: FlextestComponent  },
  { path: 'mypage', component: MypageComponent},
  { path: 'addpost', component: AddpostComponent},
  { path: 'subscribe', component: SubscribeComponent},
  { path: 'explore', component: ExplorComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports:[
    RouterModule,

  ],
  declarations: []
})
export class AppRoutingModule { }

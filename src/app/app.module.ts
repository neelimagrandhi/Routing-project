import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Headercomponent } from 'src/header/header.component';
import { Navcomponent } from 'src/nav/nav.component';
import { Footercomponent } from 'src/footer/footer.component';
import { Homecomponent } from './home/home.component';
import { Servicecomponent } from './service/service.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { DetailsComponent } from './details/details.component';
import { Contactcomponent } from 'src/contact/contact.component';

const routes:any=[{
  path:"",
  pathMatch:"full",
  component: Homecomponent
},
{
  path: "home",
  component: Homecomponent
},
{
  path: "service",
  component: Servicecomponent
},
{
  path: "contact",
  component: Contactcomponent
},
{
  path: "about",
  component: AboutComponent
},
{
  path: "address",
  component: AddressComponent
},
{
  path: "details",
  component: DetailsComponent
},
]

@NgModule({
  declarations: [
    AppComponent,
    Headercomponent,
    Navcomponent,
    Footercomponent,
    Homecomponent,
    Servicecomponent,
    AboutComponent,
    AddressComponent,
    DetailsComponent,
    Contactcomponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

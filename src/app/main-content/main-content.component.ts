import { Component } from '@angular/core';
import { BgShadowsComponent } from '../main-content/bg-shadows/bg-shadows.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AtfComponent } from '../main-content/atf/atf.component';
import { AboutMeComponent } from '../main-content/about-me/about-me.component';
import { TechStackComponent } from '../main-content/tech-stack/tech-stack.component';
import { MyWorkComponent } from '../main-content/my-work/my-work.component';
import { ContactComponent } from '../main-content/contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    BgShadowsComponent,
    HeaderComponent,
    AtfComponent,
    AboutMeComponent,
    TechStackComponent,
    MyWorkComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}

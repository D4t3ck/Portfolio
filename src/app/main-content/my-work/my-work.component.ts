import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  translate = inject(TranslationService);
  projects = [
    {
      name: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description:
        'join_desc',
      link: 'https://daniel-sinteck.de/daniel-sinteck.de/Join/',
      github: 'https://github.com/D4t3ck/Join',
      img: 'join.png',
    },
    {
      name: 'Pokedex',
      technologies: 'JavaScript | Rest-Api | HTML | CSS',
      description:
        'pokedex_desc',
      link: 'https://daniel-sinteck.de/daniel-sinteck.de/Pokedex/',
      github: 'https://github.com/D4t3ck/Pokedex',
      img: 'pokedex.png',
    },
    {
      name: 'El Pollo Loco',
      technologies: 'JavaScript | OOP | HTML | SCSS',
      description:
        'pollo_desc',
      link: 'https://daniel-sinteck.de/daniel-sinteck.de/Pollo%20Loco/',
      github: 'https://github.com/D4t3ck/Pollo-Loco',
      img: 'pollo_loco.png',
    },
  ];

  openNewWindow(url: string) {
    window.open(url, '_blank');
  }
}

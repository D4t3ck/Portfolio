import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  projects = [
    {
      name: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System. Create and organize task using drag and drop functions, assign users and categories. This project was developed by group work.',
      link: 'https://daniel-sinteck.de/daniel-sinteck.de/Join/',
      github: 'https://github.com/D4t3ck/Join',
      img: 'join.png',
    },
    {
      name: 'Pokedex',
      technologies: 'JavaScript | Rest-Api | HTML | CSS',
      description:
        'Based on the PokéAPI a simple libary that provides and catalogues pokémon information',
      link: 'https://daniel-sinteck.de/daniel-sinteck.de/Pokedex/',
      github: 'https://github.com/D4t3ck/Pokedex',
      img: 'pokedex.png',
    },
    {
      name: 'El Pollo Loco',
      technologies: 'JavaScript | OOP | HTML | SCSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Play Pepe Peligroso and defeat the dangerous Chicken swarm! ',
      link: 'https://daniel-sinteck.de/daniel-sinteck.de/Pollo%20Loco/',
      github: 'https://github.com/D4t3ck/Pollo-Loco',
      img: 'pollo_loco.png',
    },
  ];

  openNewWindow(url: string) {
    window.open(url, '_blank');
  }
}

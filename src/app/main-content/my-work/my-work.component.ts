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
      link: '#',
      github: '#',
      img: 'join.png',
    },
    {
      name: 'Pokedex',
      technologies: 'JavaScript | Rest-Api | HTML | CSS',
      description:
        'Based on the PokéAPI a simple libary that provides and catalogues pokémon information',
      link: '#',
      github: '#',
      img: 'pokedex.png',
    },
    {
      name: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | SCSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Play Pepe Peligroso and defeat the dangerous Chicken swarm! ',
      link: '#',
      github: '#',
      img: 'pollo_loco.png',
    },
  ];

  openNewWindow(url: string) {
    window.open(url, '_blank');
  }
}

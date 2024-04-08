import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS/SCSS',
    'GIT',
    'Firebase',
    'Scrum',
    'Rest-Api',
    'Material Design',
  ];
  skillImg = [
    'angular.png',
    'typescript.png',
    'javascript.png',
    'html.png',
    'css.png',
    'git.png',
    'firebase.png',
    'scrum.png',
    'rest-api.png',
    'material-design.png',
  ];
  emailstring = 'mailto:daniel.sinteck@web.de';
}

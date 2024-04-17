import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  translate = inject(TranslationService);
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
  emailstring = '#contact';
}

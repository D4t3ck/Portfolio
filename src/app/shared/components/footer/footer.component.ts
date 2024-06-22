import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  translate = inject(TranslationService);

  goTopPage() {
    window.scroll(0, 0);
  }
}

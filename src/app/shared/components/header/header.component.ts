import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  lastScrollY = 0;
  header: HTMLElement | null = null;
  navbar: HTMLElement | null = null;
  isMenuOpen = false;
  translate = inject(TranslationService);

  private scrollHandler = this.onScroll.bind(this);

  goTopPage() {
    window.scroll(0, 0);
  }

  ngOnInit() {
    this.header = document.getElementById('header');
    this.navbar = document.getElementById('navbar');
    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  onScroll(): void {
    const currentScrollY = window.scrollY;
    if (currentScrollY > this.lastScrollY) {
      if (this.header && this.navbar) {
        this.header.classList.add('hidden');
        this.navbar.classList.add('visible');
      }
    } else {
      if (this.header && this.navbar) {
        this.header.classList.remove('hidden');
        this.navbar.classList.remove('visible');
      }
    }
    this.lastScrollY = currentScrollY;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.toggleMenu();
    const burger = document.getElementById('burger') as HTMLInputElement | null;
    if (burger != null) {
      burger.checked = false;
    }
  }
}

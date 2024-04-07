import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.toggleMenu();
    const burger = document.getElementById('burger') as HTMLInputElement | null;
    if (burger != null) {
      burger.checked = false;
    }
  }
}

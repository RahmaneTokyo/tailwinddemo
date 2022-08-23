import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isDark = false;
  themeToggleBtn = document.getElementById('theme-toggle');

  constructor() { }

  ngOnInit(): void {
    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark') {
      this.isDark = !this.isDark;
    }
  }

  // Switch theme to Dark or Light
  themeSwitcher() {
    // Check the if color-theme attribute is created in localstorage
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light' || localStorage.getItem('color-theme') === null) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
      this.isDark = !this.isDark;
    } else { // color-theme key is not created in localstorage
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
      this.isDark = !this.isDark;
    }
  }

}

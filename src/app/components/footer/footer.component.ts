import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer class="mt-3 text-center">
    <p class="text-center ">
      Handcrafted &nbsp;with &nbsp;much &nbsp;<span class="fs-3">☕</span
      >&nbsp; and &nbsp; <span class="fs-3">❤️</span> by &nbsp;
      <a
        href="https://sergiocampbell.github.io"
        target="_Blank"
        class="text-white"
        rel="noreferrer"
      >
        SERGIO CAMPBELL DEV </a
      >&nbsp; using &nbsp;
      <a
        href="https://angular.io/"
        target="_Blank"
        class=""
        rel="noreferrer"
      >
        <span class="fs-3">🅰️</span>
      </a>
      ,&nbsp; &nbsp;stylized &nbsp;with &nbsp;
      <a
        href="https://getbootstrap.com/"
        target="_Blank"
        class=""
        rel="noreferrer"
      >
        <span class="fs-3">🅱️</span>
      </a>
      &nbsp; and &nbsp;deploy &nbsp;in &nbsp;
      <a
        href="https://firebase.google.com/"
        target="_Blank"
        class=""
        rel="noreferrer"
      >
        <span class="fs-3">🔥</span>
      </a>
    </p>
  </footer>`,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}

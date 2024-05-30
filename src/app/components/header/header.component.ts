import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngrx-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}

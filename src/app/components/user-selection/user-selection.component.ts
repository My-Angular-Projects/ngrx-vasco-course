import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngrx-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrl: './user-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectionComponent {}

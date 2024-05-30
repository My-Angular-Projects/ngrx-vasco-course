import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngrx-thread-selection',
  templateUrl: './thread-selection.component.html',
  styleUrl: './thread-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadSelectionComponent {}

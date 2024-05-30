import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngrx-message-selection',
  templateUrl: './message-selection.component.html',
  styleUrl: './message-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageSelectionComponent {}

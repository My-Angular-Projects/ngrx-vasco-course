import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngrx-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent {

}

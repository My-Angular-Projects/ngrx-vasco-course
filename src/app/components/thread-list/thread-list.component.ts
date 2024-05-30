import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngrx-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrl: './thread-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadListComponent {

}

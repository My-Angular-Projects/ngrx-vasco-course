import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ThreadsService } from '@shared/services';

@Component({
  selector: 'ngrx-thread-selection',
  templateUrl: './thread-selection.component.html',
  styleUrl: './thread-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreadSelectionComponent implements OnInit {
  private readonly service = inject(ThreadsService);

  ngOnInit(): void {
    this.service.getUserThreads().subscribe((v) => console.log(v));
  }
}

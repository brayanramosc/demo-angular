import { Component } from '@angular/core';
import { IPriority, IStatus, ITask, StatusType } from '../model/components.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  readonly LIST_STATES: StatusType[] = ['COMPLETED', 'PROGRESS', 'PENDING'];
  readonly LIST_OBJECT_STATES: IStatus[] = [
    { key: 'COMPLETED', text: 'Completado' },
    { key: 'PROGRESS', text: 'En progreso' },
    { key: 'PENDING', text: 'Pendiente' }
  ];

  readonly PRYORITY_LIST: IPriority[] = [
    { key: 'HIGH', text: 'Alta' },
    { key: 'MEDIUM', text: 'Media' },
    { key: 'LOW', text: 'Baja' }
  ];

  colorText = 'white';

  list_task: ITask[] = [
    {
      priority: 'HIGH',
      task: 'Aprender TypeScript',
      status: 'PENDING'
    },
    {
      priority: 'LOW',
      task: 'Mensajear a mi ex :v',
      status: 'PENDING'
    }
  ];

  handleChangeStatus(): void {
    console.log(this.list_task)
  }

  trackByItems(index: number, item: ITask) {
		return index;
	}
}

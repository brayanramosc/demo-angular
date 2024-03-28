import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';
import { NotificationModule } from '../notification/notification.module';

@NgModule({
  declarations: [ContainerComponent, MenuComponent, HeaderComponent],
  imports: [NotificationModule, FormsModule],
  exports: [ContainerComponent]
})
export class ContainerModule { }

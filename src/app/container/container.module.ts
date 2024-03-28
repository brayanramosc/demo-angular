import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NotificationModule } from '../notification/notification.module';

@NgModule({
  declarations: [ContainerComponent, MenuComponent, HeaderComponent],
  imports: [NotificationModule],
  exports: [ContainerComponent]
})
export class ContainerModule { }

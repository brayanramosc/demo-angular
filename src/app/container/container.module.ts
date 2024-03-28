import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ContainerComponent, MenuComponent, HeaderComponent],
  exports: [ContainerComponent]
})
export class ContainerModule { }

import { NgModule } from '@angular/core';

import { InfoComponent } from './info.component';

@NgModule({
    declarations: [ InfoComponent ],
    imports: [],
    exports: [ InfoComponent ]
})

export class InfoModule { }

export const infoComponent = InfoComponent;

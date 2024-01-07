import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
    exports: [
        MatButtonModule,
        TimelineModule,
    ]
})
export class AngularMaterialModule { }
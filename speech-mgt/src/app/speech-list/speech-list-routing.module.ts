import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechListComponent } from './pages/main/speech-list.component';

export const routes: Routes = [
    { path: '', component: SpeechListComponent, canActivate: [] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpeechListRoutingModule {}
export const routedComponents = [SpeechListRoutingModule];

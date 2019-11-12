import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSpeechComponent } from './pages/main/new-speech.component';

export const routes: Routes = [
    { path: '', component: NewSpeechComponent, canActivate: [] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewSpeechRoutingModule {}
export const routedComponents = [NewSpeechRoutingModule];

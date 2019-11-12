import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/speech-list',
        pathMatch: 'full'
    },
    {
        path: 'speech-list',
        loadChildren: 'src/app/speech-list/speech-list.module#SpeechListModule'
    },
    {
        path: 'new-speech',
        loadChildren:'src/app/new-speech/new-speech.module#NewSpeechModule'
    },
    {
        path: '**',
        redirectTo: '/speech-list',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

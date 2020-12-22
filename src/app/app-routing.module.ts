import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { FormComponent } from './form/form.component';
import { ApicallsComponent } from './apicalls/apicalls.component';
import { ApicurdComponent } from './apicurd/apicurd.component';
import { FormapiComponent } from './formapi/formapi.component';


const routes: Routes = [{path:'Basicform',component:BasicComponent},
{path:'Form', component:FormComponent},
{path:'ApiGet', component:ApicallsComponent},{path:'Apicurd', component:ApicurdComponent},
{path:'FormApi',component:FormapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

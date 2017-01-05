import { Router, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form.component';
import { AuthComponent } from './auth.component';

export const authRouting = RouterModule.forChild([
    { path: 'auth/login', component: LoginFormComponent }
]);
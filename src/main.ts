import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Demo3Component } from './app/learns/demo3.component';
import { Demo4Component } from './app/learns/demo4.component';
import { Demo5Component } from './app/learns/demo5.component';
import { Demo6Component } from './app/learns/demo6.component';
import { Demo7Component } from './app/learns/demo7.component';
import { Demo8Component } from './app/learns/demo8.component';
import { Demo9Component } from './app/components/demo9.component';

bootstrapApplication(Demo9Component, appConfig)
  .catch((err) => console.error(err));

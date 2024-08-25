import { Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { AboutUsComponent } from './components/AboutUs/aboutus.component';
import { News } from './components/News/news.component';
import { NewsDetailComponent } from './components/News/NewsDetail/newsdetails.component';
import { ProductPageComponent } from './components/Products/products.component';
import { ProductsDetailComponent } from './components/Products/ProductDetail/productsDetail.component';
import { LoginComponent } from './components/Login/login.component';
import { welcomeComponent } from './components/Welcome/welcome.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { ContactComponent } from './components/Contact/contact.component';
import { Contact1Component } from './components/Contact/contact1.component';
import { Contact2Component } from './components/Contact/contact2.component';
import { InvoiceComponent } from './components/Invoice/Invoice.component';
import { AuthGuard } from './services/auth.service';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'news',
        component: News
    },
    {
        path: 'news-details',
        component: NewsDetailComponent
    },
    {
        path: 'products',
        component: ProductPageComponent
    },
    {
        path: 'product-details',
        component: ProductsDetailComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'welcome',
        component: welcomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'contact',
        component: ContactComponent,
        children: [
            {
                path: '',
                component: Contact1Component
            },
            {
                path: 'contact1',
                component: Contact1Component
            },
            {
                path: 'contact2',
                component: Contact2Component
            },
        ]
    },
    {
        path: 'invoice',
        component: InvoiceComponent,
        canActivate: [
            AuthGuard
        ]
    },
    
];

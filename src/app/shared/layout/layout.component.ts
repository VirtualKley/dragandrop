import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-home',
                routerLink: '/dashboard'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Tree Drop',
                        icon: 'pi pi-objects-column',
                        shortcut: '⌘+S'
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ];
  }
}

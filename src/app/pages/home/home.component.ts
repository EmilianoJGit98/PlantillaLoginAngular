import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; // Asegúrate de importar MatTableDataSource
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'age',
    'city',
    'importar',
  ];

  // Usa MatTableDataSource en lugar de un arreglo normal para la paginación
  dataSource = new MatTableDataSource<User>([
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      age: 30,
      city: 'Madrid',
    },
    {
      id: 2,
      name: 'Ana García',
      email: 'ana.garcia@example.com',
      age: 25,
      city: 'Barcelona',
    },
    {
      id: 3,
      name: 'Luis Gómez',
      email: 'luis.gomez@example.com',
      age: 35,
      city: 'Valencia',
    },
    {
      id: 4,
      name: 'Laura Martínez',
      email: 'laura.martinez@example.com',
      age: 28,
      city: 'Sevilla',
    },
    {
      id: 5,
      name: 'Carlos López',
      email: 'carlos.lopez@example.com',
      age: 40,
      city: 'Bilbao',
    },
  ]);

  filterValue: string = '';

  // Captura la instancia del paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // Enlaza el paginator a la fuente de datos
    this.dataSource.paginator = this.paginator;
  }

  applyFilter() {
    if (this.filterValue.trim() === '') {
      this.dataSource.data = [
        {
          id: 1,
          name: 'Juan Pérez',
          email: 'juan.perez@example.com',
          age: 30,
          city: 'Madrid',
        },
        {
          id: 2,
          name: 'Ana García',
          email: 'ana.garcia@example.com',
          age: 25,
          city: 'Barcelona',
        },
        {
          id: 3,
          name: 'Luis Gómez',
          email: 'luis.gomez@example.com',
          age: 35,
          city: 'Valencia',
        },
        {
          id: 4,
          name: 'Laura Martínez',
          email: 'laura.martinez@example.com',
          age: 28,
          city: 'Sevilla',
        },
        {
          id: 5,
          name: 'Carlos López',
          email: 'carlos.lopez@example.com',
          age: 40,
          city: 'Bilbao',
        },
      ];
    } else {
      // Filtra los datos según el valor de búsqueda
      this.dataSource.data = this.dataSource.data.filter(
        (user) =>
          user.name.toLowerCase().includes(this.filterValue.toLowerCase()) ||
          user.email.toLowerCase().includes(this.filterValue.toLowerCase()) ||
          user.city.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    }
    // Vuelve a establecer el paginator después de aplicar el filtro
    this.dataSource.paginator = this.paginator;
  }
}

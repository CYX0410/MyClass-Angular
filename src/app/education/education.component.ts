import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList = [
    {
      level: 'PhD in Information Technology',
      university: 'Universiti Teknologi Petronas, Malaysia',
      thesis: 'A UCP-Based Framework for Designing Software Effort Estimation Program Using Object-Oriented Approach.'
    },
    {
      level: 'Master of Science (Computer Science – Software Engineering)',
      university: 'Universiti Teknologi Malaysia'
    },
    {
      level: 'Bachelor of Information Technology (Hons.)',
      university: 'Universiti Utara Malaysia'
    },
    {
      level: 'Matrikulasi',
      university: 'Universiti Utara Malaysia'
    }
  ];
}


// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-experience',
//   imports: [],
//   templateUrl: './experience.component.html',
//   styleUrl: './experience.component.css'
// })
// export class ExperienceComponent {
//   public experiences: string[] = [
//     'Senior Lecturer, Universiti Utara Malaysia.',
//     'System Analyst, Malaysia Airlines System (MAS).',
//     'MIS Executive, Utaps Sdn. Bhd (A subsidiary of The Gordon & Breach Publishing Group)'
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: string[] = [
    'Senior Lecturer, Universiti Utara Malaysia.',
    'System Analyst, Malaysia Airlines System (MAS).',
    'MIS Executive, Utaps Sdn. Bhd (A subsidiary of The Gordon & Breach Publishing Group)'
  ];
}

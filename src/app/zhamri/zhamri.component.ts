import { Component } from '@angular/core';
import {ExperienceComponent} from '../experience/experience.component';
import {EducationComponent} from '../education/education.component';
import {CertificationComponent} from '../certification/certification.component';

@Component({
  selector: 'app-zhamri',
  imports: [
    ExperienceComponent,
    EducationComponent,
    CertificationComponent
  ],
  templateUrl: './zhamri.component.html',
  styleUrl: './zhamri.component.css'
})
export class ZhamriComponent {

}

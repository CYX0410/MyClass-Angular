import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-certification',
  imports: [CommonModule],
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {

  // private list of certifications
  private readonly _certificationList: string[] = [
    'Oracle Certified Associate (OCA) - Oracle Database 11g Administrator',
    'Sun Certified Java Programmer (SCJP)',
    'Microsoft Certified Application Developer (MCAD)',
    'Microsoft Certified Professional (MCP)',
    'EC-Council Certified Security Specialist (ECSS)',
    'Anaconda Python for Data Science Professional Certificate',
    'Docker Foundations Professional Certificate',
    'Career Essentials in GitHub Professional Certificate',
    'Atlassian Agile Project Management Professional Certificate'
  ];

  // public getter to expose to template
  get certifications(): string[] {
    return this._certificationList;
  }
}

import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  cvDownloadLink = 'https://firebasestorage.googleapis.com/v0/b/rwengelbrecht-portfolio.appspot.com/o/rwengelbrecht_cv.pdf?alt=media&token=3ca94d62-063b-4118-b3d1-30beb7b32758';
  linkedinLink = 'https://www.linkedin.com/in/rigardt-engelbrecht-92063a11a/';
  githubLink = 'https://github.com/RWEngelbrecht';

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'CV', icon: 'pi pi-cloud-download', url: this.cvDownloadLink, style: "" },
      { label: 'GitHub', icon: 'pi pi-github', url: this.githubLink, style: "" },
      { label: 'LinkedIn', icon: '', url: this.linkedinLink, style: "" }
    ]
  }

}

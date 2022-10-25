import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  studentName = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSchool(): void {
    this.router.navigate(['wcs', this.studentName]);
  }

}

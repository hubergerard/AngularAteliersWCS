import { Component, OnInit } from '@angular/core';
import { KittenService } from 'src/app/kitten.service';
import { Kitten } from 'src/app/models/kitten';

@Component({
  selector: 'app-unadopted-kitten-list',
  templateUrl: './unadopted-kitten-list.component.html',
  styleUrls: ['./unadopted-kitten-list.component.sass']
})
export class UnadoptedKittenListComponent implements OnInit {

  unadoptedKittens: Kitten[] = [];

  constructor(private kittenService: KittenService) { }

  ngOnInit(): void {
    this.kittenService.findAllUnadoptedCats().subscribe(kittens => this.unadoptedKittens = kittens);
  }

}

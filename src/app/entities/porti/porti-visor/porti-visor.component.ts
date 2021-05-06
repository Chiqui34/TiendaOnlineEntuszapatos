import { Component, Input, OnInit } from '@angular/core';
import { Porti } from '../porti.model';

@Component({
  selector: 'app-porti-visor',
  templateUrl: './porti-visor.component.html',
  styleUrls: ['./porti-visor.component.css']
})
export class PortiVisorComponent implements OnInit {

  @Input() articulosPorti: Porti[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { BroService } from '../../../services/bro.service';
import { Data } from '../../../entities/data.entity';

@Component({
  selector: 'bro2-component',
  standalone: true,
  templateUrl: 'bro2.component.html',
  host: {
    'collision-id': 'bro2Component',
  },
})
export class Bro2Component implements OnInit {
  data: Data;
  result: string;

  constructor(private broService: BroService) {}

  ngOnInit() {
    this.broService.getFullname$.subscribe(fullName => {
      this.result = 'Hi ' + fullName;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { PolizaTriatlonService } from '../../service/poliza-triatlon.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-poliza-triatlon',
  standalone: true,
  imports: [],
  providers: [PolizaTriatlonService],
  templateUrl: './poliza-triatlon.component.html',
  styleUrl: './poliza-triatlon.component.css'
})


export class PolizaTriatlonComponent implements OnInit {
  combo1Value: String = '';
  combo2Value: String = '';
  combo3Value: String = '';
  combo4Value: String = '';
  selectedId: number = 0;

  combo1: any = [];
  combo2: any = [];
  combo3: any = [];
  combo4: any = [];
  quote: any = {};

  constructor(private polizaTriatlonService: PolizaTriatlonService) { }

  ngOnInit(): void {
    this.polizaTriatlonService.getCombo1().subscribe(response => {
      this.combo1 = response;
    });
    this.polizaTriatlonService.getCombo2().subscribe(response => {
      this.combo2 = response;
    });
    this.polizaTriatlonService.getCombo3().subscribe(response => {
      this.combo3 = response;
    });
    this.polizaTriatlonService.getCombo4().subscribe(response => {
      this.combo4 = response;
    });

  }

  changeCombo1(event: Event) {
    this.combo1Value = (event.target as HTMLInputElement).value;
  }

  changeCombo2(event: Event) {
    this.combo2Value = (event.target as HTMLInputElement).value;
  }

  changeCombo3(event: Event) {
    this.combo3Value = (event.target as HTMLInputElement).value;
  }

  changeCombo4(event: Event) {
    this.combo4Value = (event.target as HTMLInputElement).value;
  }

  enviar() {
    this.polizaTriatlonService.getQuote(this.combo1Value, this.combo2Value, this.combo3Value, this.combo4Value).subscribe(response => {
      this.quote = response;
    });
  }
}

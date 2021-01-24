import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masaze',
  templateUrl: './masaze.component.html',
  styleUrls: ['./masaze.component.css']
})
export class MasazeComponent implements OnInit {
  showMsz = false;
  msz = `Specjalne mieszanki ziół, tworzone przez naszą masażystkę, posiadają właściwości odżywcze dla skóry oraz wzmacniające układ odpornościowy. Masaż stemplami ziołowymi ma właściwości antycellulitowe oraz wyciszające. Nasza masażystką dobiera indywidualnie mieszanki ziół do potrzeb klientów.`;
  showMmt = false;
  mmt = `Wielowymiarowe dźwięki mis Tybetańskich i ich delikatne wibracje, wprowadzą Twoje ciało i umysł w stan odprężenia i medytacji. Intensywny zapach Palo Santo , przeniesie Cię do Nepalskich świątyń. Przez cały rytuał przeprowadzi Cię nasza wykwalifikowana masażystką i bioenergoterapeutka która zadba abyś opuścił nasz salon pełen harmonii i szczęścia.`;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rituals',
  templateUrl: './rituals.component.html',
  styleUrls: ['./rituals.component.css']
})
export class RitualsComponent implements OnInit {
  showMorze = false;
  morze = `Odprężający rytuał, który wycisza, uspokaja i rozluźnia organizm. Rozpoczyna się rytuałem wstępnym, gdzie klient wprowadzany jest w stan wyciszenia delikatnymi ruchami przypominającymi szum morza. Następnie rozpoczyna się faza aktywna - kojący, wyciszający zabieg na twarz, bardzo delikatny dedykowany każdego rodzaju cery. Rytuał wykańczamy delikatnym masażem relaksacyjnym całego ciała.`;
  showTybet = false;
  tybet = `Wielowymiarowe dźwięki mis Tybetańskich i ich delikatne wibracje, wprowadzą Twoje ciało i umysł w stan odprężenia i medytacji. Intensywny zapach Palo Santo , przeniesie Cię do Nepalskich świątyń. Przez cały rytuał przeprowadzi Cię nasza wykwalifikowana masażystka i bioenergoterapeutka która zadba abyś opuścił nasz salon pełen harmonii i szczęścia.`;
  constructor() { }

  ngOnInit(): void {
  }

}

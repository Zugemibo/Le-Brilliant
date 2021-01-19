import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zabiegi-twarz',
  templateUrl: './zabiegi-twarz.component.html',
  styleUrls: ['./zabiegi-twarz.component.css']
})
export class ZabiegiTwarzComponent implements OnInit {
  showMmt = false;
  mmt = `Mezoterapia mikroigłowa DermaPen to zabieg w którym specjalnie uszkadzamy skóre, wywołujemy tzn. stan zapalny po to aby nasza skóra mogła sie odbudować.  
  Mikro nakłucia pobudzają i stymulują naskórek, co powoduje, że jego przepuszczalność zwiększa się wielokrotnie, a dzięki temu twoja skóra jest gotowa na przyjęcie specjalnie skoncentrowanych koktajli i to na odpowiedniej głębokości.`;
  showMmtsd = false;
  mmtsd = 'Mezoterapia mikroigłowa DermaPen to zabieg w którym specjalnie uszkadzamy skóre, wywołujemy tzn. stan zapalny po to aby nasza skóra mogła sie odbudować. Mikro nakłucia pobudzają i stymulują naskórek, co powoduje, że jego przepuszczalność zwiększa się wielokrotnie, a dzięki temu twoja skóra jest gotowa na przyjęcie specjalnie skoncentrowanych koktajli i to na odpowiedniej głębokości.';
  showIfe = false;
  ife = 'Programy drenujące, liftingujące i anty-aging, pozwalają na poprawę owalu twarzy, likwidują zmarszczki, tonizują i napinają, pozwalając na bardzo precyzyjną pracę, likwidując np. asymetrie twarzy. Zabieg wspomaga wyszczuplanie twarzy, redukcję nadmiaru tłuszczu, poprawia owal i redukuje drugi podbródek. System głowic ROBOMINI i ROBOMIKRO umożliwia precyzyjny masaż twarz, szyi i dekoltu. Dzięki wymiennym końcówkom głowic, bez problemu można opracować delikatne i wrażliwe okolice oczu oraz ust.';

  constructor() { }

  ngOnInit(): void {
  }

}

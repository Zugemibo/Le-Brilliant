import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pakiety',
  templateUrl: './pakiety.component.html',
  styleUrls: ['./pakiety.component.css']
})
export class PakietyComponent implements OnInit {
  showIcone = false;
  icone = `Icoone to technologia, pozwalająca na precyzyjną pracę na tkance łącznej. Likwiduje cellulit, zlokalizowany tłuszcz, luźną skórę, obrzęki limfatyczne, blizny, zaparcia, sztywność mięśni, zapalenia ścięgien oraz wszelkie objawy starzenia się skóry. Skuteczna walka z cellulitem, głęboko zlokalizowanym tłuszczem.`;
  showFrc = false;
  frc = 'Zabieg ma na celu pobudzenie komórek skóry do produkcji i regeneracji kolageu, w efekcie skóra odzyskuje sprężystość i jędrność. Możemy zredukować i spłycić zmarszczki, rozstępy i blizny, zlikwidować cellulit i tkankę tłuszczową.';
  showUltra = false;
  ultra = 'Zjawisko kawitacji powoduje, iż cząsteczki w tkankach wpadają w drgania powodując wewnątrz tkankowy masaż. Wytworzona energia powoduje uszkodzenie błony komórkowej adipocytów i uwolnienie w ten sposób wolnych kwasów tłuszczowych i glicerolu do przestrzeni międzykomórkowej, gdzie następnie odprowadzane są przez układ naczyniowo-chłonny do wątroby gdzie procesami metabolicznymi są wydalane z organizmu. Zalecenia: picie ok. 2 l wody dziennie';
  showLimf = false;
  limf = 'Drenaż limfatyczny pobudza przepływ limfy przez naczynia limfatyczne w organizmie. Jest pomocny przy leczeniu obrzęków, dolegliwości bólowych a także w profilaktyce. Pomaga pozbyć się uczucia ciężkich nóg, zastojów limfatycznych, detoksykuje organizm, redukuje cellulit.  Ma również szerokie zastosowanie w fizjoterapii, idealnie zastępuje klasyczny masaż limfatyczny wykonywany manualnie.';
  showSlimcel = false;
  slimcel = 'Wyszczuplający zabieg, bogaty w składniekie aktywne, które w skuteczny sposób przeciwdziałają problemom wywołanym przez zatrzymanie wody i cellulit, dostarczając skórze przeciwutleniaczy oraz nawilżając. składniki aktywne: kofeina, escyna, ekstrakt z wąkrotki azjatyckiej, ekstrakt z guarany';
  showBdl = false;
  bdl = 'Łącząc bandaże Arosha z drenażem limfatycznym jesteśmy w stanie 2 razy szybciej pozbyć się zastojów wodnych, obrzęków czy cellulitu. Bandaże nasączone są składnikami aktywnymi odpowiednimi do danego problemu np. cellulitu. dokładając drenaż limfatyczny na specjalnym programie spokojnie możemy mówić o spektakularnych efektach po serii zabiegów, Zalecana seria to 8 zabiegów.';
  showIfe = false;
  ife = 'Programy drenujące, liftingujące i anty-aging, pozwalają na poprawę owalu twarzy, likwidują zmarszczki, tonizują i napinają, pozwalając na bardzo precyzyjną pracę, likwidując np. asymetrie twarzy. Zabieg wspomaga wyszczuplanie twarzy, redukcję nadmiaru tłuszczu, poprawia owal i redukuje drugi podbródek. System głowic ROBOMINI i ROBOMIKRO umożliwia precyzyjny masaż twarz, szyi i dekoltu. Dzięki wymiennym końcówkom głowic, bez problemu można opracować delikatne i wrażliwe okolice oczu oraz ust.';

  constructor() { }

  ngOnInit(): void {
  }

}

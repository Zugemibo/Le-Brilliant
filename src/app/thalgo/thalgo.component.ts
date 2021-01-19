import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thalgo',
  templateUrl: './thalgo.component.html',
  styleUrls: ['./thalgo.component.css']
})
export class ThalgoComponent implements OnInit {
  showRadiance = false;
  radiance = `Zabieg rozświetlająco-upiększający dla każdego typu skóry. Zabieg ma za zadanie nawilżyć, odżywić, wygładzić i odświeżyć naskórek, usunąć oznaki zmęczenia oraz przywrócić skórze zdrowy i promienny wygląd.`;
  showAquarelle = false;
  aquarelle = 'Intensywny zabieg nawilżająco-energatyzujący dla skóry szarej, zmęczonej. Odpowiedni na problem wodnych worków pod oczami. Skóra potrzebująca głębokiego nawilżenia objawia się słabą kondycją i wygląda na zmęczoną. Dodatkowo może pojawić się opuchnięcie dolnych powiek, objawiające się woreczkami pod oczami. Przyczyną tego stanu rzeczy często jest zaburzenie krążenia limfatycznego w skórze. zabieg przeznaczony jest do pielęgnacji skóry wymagającej odżywienia, nawilżenia i poprawienia mikrocyrkulacji w naczyniach krwionośnych i limfatycznych.';
  showSilicium = false;
  silicium = 'Luksusowy, odmładzająco-liftingujący zabieg, który wykracza poza klasyczną kosmetykę. Już po jednym zabiegu skóra może wyglądać o 5 lat młodziej. Wysokoskoncentrowane składniki aktywne (kwas hialuronowy, kolagen, krzem morski, czerwone algi Meristotheca Dakarensis i Jania Rubens) oraz nowatorski masaż Derma-Stim Massage zapewniają natychmiastowy efekt liftingu. W trakcie zabiegu aplikowane są dwie maski – kolagenowa z kwasem hialuronowym oraz modelująca Cryo-Modelling Mask. Zabieg modeluje owal twarzy, uelastycznia i napina skórę, spłyca zmarszczki i drobne linie, pobudza produkcję kolagenu i elastyny.';
  showExceptional = false;
  exceptional = 'Z wiekiem skóra kobiet pod wpływem spadku poziomu pewnych hormonów może tracić nawet do 2% kolagenu rocznie. Spadek ten powoduje nieodwracalne szkody w jakości skóry, jej sprężystości i odporności na zmarszczki mimiczne. Dodatkowo, z wiekiem zmniejsza aktywność fibroblastów – komórek, odpowiedzialnych za produkcję włókien kolagenu i elastyny. Odpowiedzią Thalgo jest ekskluzywny odmładzająco-regenerujący rytuał z unikatowym masażem na mięśniach twarzy, opracowanym przy współpracy z chirurgiem-plastykiem – rytuał, który pomoże zatrzymać czas. W preparatach wykorzystano kompleks Patented Marine Replenishment Complex na bazie hormonów algowych, ekstraktów z figi egipskiej i szarotki alpejskiej. Skóra odzyskuje swoją naturalną gęstość i doskonały wygląd, jest bardziej jędrna, a owal twarzy staje się bardziej regularny. Maska z naturalnej biologicznej celulozy nawilża, odżywia i regeneruje skórę. Ten wyjątkowy zabieg pozwala uzyskać efekt naturalnego biologicznego liftingu.';
  showClear = false;
  clear = 'Zabieg rozświetlająco - odmładzający z prowitaminą C. Środowisko zewnętrzne i wewnętrzne( zmiany hormonalne, upływ czasu, zmiany pór roku, słońce, zanieczyszczenie powietrza…) sprawia, że skóra traci blask, jędrność i świeżość. Nie jest już tak elastyczna, promienna i jasna. Pod wpływem inspiracji „etno” został stworzony wyjątkowy program rozświetlający i odmładzający na bazie kompleksu Clear Expert, który przywraca naturalna promienność i jasność skórze, pomaga zmniejszyć lub wyeliminować przebarwienia Wskazania: zabieg przeznaczony jest do pielęgnacji skóry z przebarwieniami słonecznymi, plamami starczymi oraz spowodowanymi ciążą, tabletkami antykoncepcyjnymi. Cel: rozjaśnienie plam pigmentacyjnych, doprowadzenie do równowagi w produkcji melaniny, wzmocnienie funkcji obronnych skóry, przywrócenie jędrności i elastyczności oraz młodzieńczego wyglądu skórze';
  showOcean = false;
  ocean = 'Skóra mężczyzn różni się w zasadniczy sposób od skóry kobiet. Naskórek jest znacznie grubszy, silniej związany ze skórą właściwą, bardziej odporny, co związane jest z silnym rogowaceniem i zwiększonym wydzielaniem sebum. Stąd, ze względu na gospodarkę hormonalną (testosteron), skóra mężczyzn rzadko jest sucha. Najczęściej spotykanym typem cery jest mieszana i tłusta. Cel: wyrównanie struktury naskórka poprzez peeling wykonywany w zabiegu, nawilżenie głębszych warstw naskórka, a także uelastycznienie i regeneracja skóry drażnionej mechanicznie podczas codziennego golenia.';
  constructor() { }

  ngOnInit(): void {
  }

}

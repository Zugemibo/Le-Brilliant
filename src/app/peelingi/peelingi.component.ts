import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peelingi',
  templateUrl: './peelingi.component.html',
  styleUrls: ['./peelingi.component.css']
})
export class PeelingiComponent implements OnInit {
  showSpeel = false;
  speel = `Mieszanka doskonała do pielęgnacji skóry dojrzałej i tłustej. Wskazana na problemy z bliznami, a nawet rozstępami. Kwas salicylowy (BHA) ma działanie przeciwzapalne i antyseptyczne, przyspiesza proces gojenia wyprysków i podrażnień. Preparat wykazuje także działanie przeciwstarzeniowe i fotoochronne. Zawartość kwasu pirogronowego intensywnie stymuluje syntezę kolagenu i elastyny, nawilża i zapobiega nadmiernemu rogowaceniu skóry. Retinol zapobiega powstawaniu zmarszczek, zmniejszając głębokość tych już istniejących, zwiększa elastyczność skóry i minimalizuje istniejące przebarwienia.`;
  showFpeel = false;
  fpeel = 'F-Peel to doskonały peeling o niezwykłych właściwościach rozjaśniających, odmładzających, regenerujących i minimalizujących przebarwienia. Kwas ferulowy redukuje aktywność enzymów tyrozynazy, natomiast floretyna- elastazy, przywracając skórze równy koloryt i młody, świeży wygląd. Kwas ferulowy działa silnie antyoksydacyjnie, chroniąc DNA komórek i neutralizując wolne rodniki. Peeling ma zwiększoną zdolność penetracji naskórka dzięki zawartej floretynie. Dodatkowo kwas mlekowy nawilża i stymuluje syntezę ceramidów, zapewniając prawidłową ochronę skóry.';
  showRpeel = false;
  rpeel = 'Kompletny system złuszczająco – odmładzający, składający się z dwóch faz. Pierwsza bazuje na kompilacji składników antyoksydacyjnych Age-Defying Complex. Druga - na masce z retinolem o stężeniu 4%. Retinol warunkuje prawidłowy wzrost i różnicowanie się komórek nabłonkowych oraz przyspiesza proces rogowacenia. Ponadto wpływa na głębsze warstwy skóry, przyczyniając się do zwiększenia produkcji włókien kolagenu i elastyny, jednocześnie odbudowując zniszczone. Implikuje przywrócenie jędrności, napięcia i gęstości skóry. Age-Defying Complex, w skład którego wchodzą m.in. witaminy B3 i C, kwasy AHA oraz ekstrakt z wierzbówki kiprzycy, delikatnie złuszcza i rozjaśnia skórę, stymulując produkcję ceramidów w skórze. Dodatkowo efektywnie wychwytuje wolne rodniki i redukuje wpływ UV na skórę, hamuje procesy starzenia i łagodzi podrażnienia. Kuracja radykalnie zwiększa poziom nawilżenia, nadaje jednolity kolor, niweluje niedoskonałości, przywracając młody wygląd skóry.';
  showMpeel = false;
  mpeel = 'M-Peel to aktywny peeling polecany dla każdego typu skóry ze szczególnym uwzględnieniem skór wrażliwych, nietolerujących innych kwasów AHA. Idealny do pielęgnacji skóry narażonej na fotostarzenie, w przypadku nieregularnych przebarwień i zmian trądzikowych. Regeneruje skórę, zwiększając syntezę włókien elastycznych, działa depigmentująco nawet na plamy soczewicowate. Struktura budowy kwasu migdałowego jest podobna do antybiotyków stosowanych w leczeniu trądziku. Natychmiast poprawia stan skóry tłustej i reguluje wydzielanie sebum. Dodatkowo kwas azelainowy wspomaga efekt niwelujący przebarwienia, ma silne działanie wobec bakterii Propionibacterium acnes, normalizuje i przeciwdziała hyperkeratynizacji. Synergia dwóch kwasów zawartych w formule doskonale odpowiada na potrzeby skóry trądzikowej, łojotokowej, z rogowaceniem okołomieszkowym lub trądzikiem różowatym.';
  showGpeel = false;
  gpeel = 'M-Peel to aktywny peeling polecany dla każdego typu skóry ze szczególnym uwzględnieniem skór wrażliwych, nietolerujących innych kwasów AHA. Idealny do pielęgnacji skóry narażonej na fotostarzenie, w przypadku nieregularnych przebarwień i zmian trądzikowych. Regeneruje skórę, zwiększając syntezę włókien elastycznych, działa depigmentująco nawet na plamy soczewicowate. Struktura budowy kwasu migdałowego jest podobna do antybiotyków stosowanych w leczeniu trądziku. Natychmiast poprawia stan skóry tłustej i reguluje wydzielanie sebum. Dodatkowo kwas azelainowy wspomaga efekt niwelujący przebarwienia, ma silne działanie wobec bakterii Propionibacterium acnes, normalizuje i przeciwdziała hyperkeratynizacji. Synergia dwóch kwasów zawartych w formule doskonale odpowiada na potrzeby skóry trądzikowej, łojotokowej, z rogowaceniem okołomieszkowym lub trądzikiem różowatym.';
  constructor() { }

  ngOnInit(): void {
  }

}

var regulations = {
  "regulations": [
    {
      "title": "I. Misja Gildii",
      "description": [
        "Misją gildii jest zrzeszenie wszystkich Polaków na serwerze Shadowsong EU oraz Aszune EU celem wspólnej gry w miłej otoczce. Nie dyskryminujemy nikogo - każdy u nas znajdzie swoje miejsce i powinien swoją postawą i zachowaniem czynić z gildii możliwe jak najlepsze miejsce dla wszystkich! Priorytetem w Elysium jest wspólne raidowanie i uczestniczenie w różnych innych gildiowych eventach. Na raidach i eventach skupiamy się na możliwie na jak najwyższym progresie oraz efektywności i przede wszystkich na dobrej atmosferze w gildii, niezależnie od tego czy aktualnie idzie nam dobrze, czy źle."
      ]
    },
    {
      "title": "II. Komunikacja",
      "description": [
        "<strong>Chat gildiowy</strong> - Jest to oczywiście główne narzędzie komunikacji w grze. Pamiętajmy, że każdy członek gildii jest inny, a jest nas wielu, a więc wszyscy powinni pamiętać o elementarnych zasadach kultury osobistej oraz szanowaniu innych gildiowiczów. Nie warto też poruszać tematów drażliwych np. polityka, religia i wszelkich innych kwestii, które mogą skończyć się urażeniem kogoś z nas. Po prostu - szanujmy siebie nawzajem ;) Gramy razem, spędzamy wspólnie czas i tylko to się liczy.",
        "<strong>Discord</strong> - Drugie główne narzędzie komunikacyjne w Elysium. Każdy członek gildii powinien założyć konto na Discord. Można znaleźć tam rozmaite chaty tekstowe oraz głosowe o przeróżnej tematyce - nie tylko o WoW i sprawach gildii. Życie gildii toczy się również wokół innych gier sieciowych takich jak Overwatch. Można korzystać z niego bez ograniczeń. Osoba logująca się na Discord powinna użyć tego samego nicku jak nick main postaci w grze. Link z zaproszeniem na nasz serwer znajduje się w guild info w grze. Można też poprosić o niego oficera gildii."
      ]
    },
    {
      "title": "III. Raidy i inne eventy gildiowe",
      "description": [
        "<strong>Terminy raidów</strong> - Terminy nie są stałe - są elastyczne i są ustalane przez oficerów gildii na podstawie aktualnych potrzeb całego grona raidowego.",
        "<strong>Zapisy</strong> - Zapisy na raidy i inne eventy gildiowe są tworzone w kalendarzu WoW w grze. Na raid może zapisać się każdy, natomiast aby wziąć udział w danym raidzie, należy spełnić pewne wymagania.",
        "<strong>Wymagania</strong> - Przy każdym zapisie na dany raid lub event w opisie można znaleźć sprecyzowane wymagania odnośnie uczestników. Aby wziąć udział w danym raidzie należy te wymagania spełnić. Może być to na przykład określony poziom item levelu.",
        "<strong>Grupy</strong> - Grupy są elastyczne - są dobierane tak, aby przede wszystkim były jak najbardziej skuteczne, aby było możliwe zabicie jak największej ilości bossów. Dodatkowo zależy nam na tym, aby w raidach uczestniczyła jak największa ilość osób i żeby każdy miał okazję wziąć udział.",
        "<strong>Loot</strong> - Jak wiadomo, od nowego dodatku Battle for Azeroth obowiązuje tylko system personal loot czyli każdy członek raidu ma jednakową szansę na uzyskanie jakiegoś itemu z zabitego bossa. Dodatkowo na początku raidu wyznaczamy jedną osobę, której każdy może oddać wydropione itemy, których nie potrzebuje. Następnie dokonujemy rolla na te itemy - najwyższy roll wygrywa. Obowiązuje następująca kolejność dystrybucji lootu: <p class='center'>Main Spec >> Offspec >> Alt >> Alt Offspec >> inne</p> Raid leader zastrzega sobie prawo do zmiany kolejności dystrybucji lootu dla całej grupy raidowej, poszczególnych encounterów lub pojedynczych osób. Może nastąpić to w takich sytuacjach jak: <ul class='loot'><li>Raid leader prosi kogoś o pójście na raid altem lub w offspecu, ponieważ potrzebuje tego grupa raidowa (np. potrzebny jest dodatkowy healer)</li><li>Ktoś inny niż zwycięzca itemu (a tym samym cały raid) skorzysta na nim bardziej - zależy nam na tym, aby każdy członek raidu zyskał możliwie jak najwięcej na dropie z bossów, ponieważ im szybciej dograci się cała grupa, tym silniejsi będziemy jako zespół.</li></ul>"
      ]
    }
  ],
  "display": function() {
    regulations.regulations.forEach(function(regulation) {
      $("#regulations").append(HTMLregulationStart);
      var formattedRegulationTitle = HTMLregulationTitle.replace("%title%", regulation.title);
      $(".regulations-entry:last").append(formattedRegulationTitle);
      for(let i=0; i < regulation.description.length; i++) {
        var formattedRegulationDescription = HTMLregulationDescription.replace("%description%", regulation['description'][i]);
        $(".description-entry:last").append(formattedRegulationDescription);
      }
    });
  }
}

regulations.display();

"use strict";(self.webpackChunkpro_eko_kierunkoinator=self.webpackChunkpro_eko_kierunkoinator||[]).push([[136],{8566:function(e,a,o){o.d(a,{Z:function(){return r}});var n=o(7294),i=(o(7718),o(1597));function r(e){var a=[];for(var o in e.points)a.push([o,e.points[o]]);a.sort((function(e,a){return a[1]-e[1]}));var r=[];if(a&&a[1]){var t=a[0][1];r.push(a[0][0]);for(var s=1;s<a.length;)a&&a[s]&&a[s][1]==t&&r.push(a[s][0]),s++}return n.createElement("div",{className:"result-container"},n.createElement("h2",null,n.createElement("span",{className:"h-font"},"PRO-EKO-KIERUNKO-INATOR")," zadecydował. ",n.createElement("br",null)," Najbardziej pasuje do Ciebie:"),a&&n.createElement(n.Fragment,null,n.createElement("h1",{className:"h-font winners"},r.join(", ")),n.createElement("div",{className:"all-options"},n.createElement("h2",null,"Wszystkie polecane propozycje:"),a.map((function(e,a){return n.createElement("h3",{key:a,className:"h-font"},e[0])})))),n.createElement(i.rU,{to:"/",className:"btn"},"Wróć do strony głównej"))}},4102:function(e,a,o){o.r(a);var n=o(7294),i=o(2349),r=o(8566),t=o(3325),s=o(9146);a.default=function(){var e,a=(0,n.useState)(!0),o=a[0],c=a[1],u=(0,n.useState)([]),z=u[0],m=u[1],w=(0,n.useState)(((e={})[t.Fo]=0,e[t.Qg]=0,e[t.Iu]=0,e[t.iy]=0,e[t.xV]=0,e)),y=w[0],l=w[1],k=function(e,a){console.log(a);var o=e;switch(a){case"C0A0":case"C1A0":case"C2A0":case"C3A0":case"C4A1":o[t.Qg]=o[t.Qg]+1;break;case"C0A1":case"C1A1":case"C2A1":o[t.iy]=o[t.iy]+1,o[t.xV]=o[t.xV]+1;break;case"C0A2":case"C1A2":case"C2A2":case"C4A2":o[t.Iu]=o[t.Iu]+1,o[t.Fo]=o[t.Fo]+1;break;case"C3A1":o[t.xV]=o[t.xV]+1;break;case"C3A2":o[t.iy]=o[t.iy]+1,o[t.Iu]=o[t.Iu]+1,o[t.Fo]=o[t.Fo]+1;break;case"C4A0":o[t.xV]=o[t.xV]+1,o[t.iy]=o[t.iy]+1}return o},d=s.$g;return n.createElement(i.Z,null,n.createElement("h1",null,"Budownictwo"),n.createElement("form",{className:o?"":"hidden"},d.map((function(e,a){return n.createElement("div",{key:"question-"+a,className:"question-wrapper"},n.createElement("h2",null,e.q),n.createElement("div",{className:"answer-wrapper"},e.ans.map((function(e,o){return n.createElement("div",{key:"question-"+a+"-a-"+o,className:"input-wrapper"},n.createElement("input",{type:"radio",value:"C"+a+"A"+o,id:"C"+a+"A"+o,onChange:function(e){return function(e,a){var o=z;o[a]=e.target.value,console.log(z),m(o)}(e,a)},name:"C"+a}),n.createElement("label",{htmlFor:"C"+a+"A"+o},e))}))))})),n.createElement("button",{className:"btn-show",onClick:function(e){return function(e,a){e.preventDefault();for(var o={},n=0;n<a.length;n++)o=k(y,a[n]);l(o),console.log(o),c(!1)}(e,z)}},"POKAŻ WYNIK")),n.createElement("div",{className:o?"hidden":""},n.createElement(r.Z,{points:y})))}},3325:function(e,a,o){o.d(a,{B2:function(){return c},Fo:function(){return n},Iu:function(){return r},OG:function(){return b},Qg:function(){return i},Rb:function(){return u},Tw:function(){return y},Xi:function(){return z},Zi:function(){return d},iy:function(){return p},q8:function(){return l},sJ:function(){return t},tB:function(){return w},u$:function(){return k},uZ:function(){return j},vg:function(){return f},x6:function(){return m},xV:function(){return s}});var n="automatyka i robotyka",i="budownictwo",r="informatyka / sztuczna inteligencja",t="mechatronika",s="inżynieria środowiska",c="energetyka",u="technologie obiegu zamkniętego",z="elektromobliność",m="inżynieria lotnicza",w="logistyka",y="lotnictwo i kosmonautyka",l="mechanika i budowa maszyn",k="mechanika i budowa pojazdów",d="transport",p="inżynieria materiałowa",j="inżynieria chemiczna i procesowa",b="technologie ochrony środowiska",f="zarządzanie i inżyneria produkcji"},9146:function(e,a,o){o.d(a,{$g:function(){return r},HF:function(){return i},RO:function(){return t},x2:function(){return n}});var n=[{q:"Twój dom zużywa za dużo energii. Co robisz najpierw?",ans:["Przeprowadzam symulację zużycia ","Tworzę automat, który wyłącza mi światła w odpowiednim momencie ","Oddzwaniam miłym ludziom, że zmieniam zdanie i poproszę fotowoltaikę ","Sprawdzam szczelność okien i ocieplenie "]},{q:"Za 10 lat w mojej pracy będę:",ans:["Z kawusią/herbatką przeczesywać linijki kodu","Tworzyć maszyny","Jeździć po Polsce i nadzorować jak budują się farmy wiatrowe","Pilnować czy nikt nie narusza środowiska"]},{q:"Jaki rodzaj energii Cię najbardziej interesuje?",ans:["Cieplna","Elektryczna","Każda, byle ją kontrolować z komputera"]},{q:"Z którym cytatem z „Chłopaków z Baraków” identyfikujesz się najbardziej?",ans:["Propan-butan, propan-butan, mam chytry plan…","Zauważyłem, że jak coś się wrzuca do jeziora albo morza następnego dnia tego nie ma. Coś zabiera te rzeczy, filtruje i czyści.","Safety always off.","Trochę się przespałem, ale musiałem wstać rano bo mam obowiązki."]},{q:"Oglądając YouTube’a o 3 w nocy wybierzesz:",ans:["ElectroBOOMa rażącego się prądem","tworzenie narzędzi i budynków przez Primitive Technology","Komputerowe poradniki Hindusów"]}],i=[{q:"Jaki rodzaj transportu Cię interesuje?",ans:["Lądowy","Powietrzny","Jak mi dadzą to biorę!"]},{q:"W którą gałąź transportu celujesz?",ans:["Transport masowy towarów","Transport masowy ludzi","Transport osobowy"]},{q:"Czego zwolennikiem jesteś?",ans:["Transport autonomiczny","Transport nieautonomiczny","To skomplikowane…"]},{q:"Gdybyś miał się opisać, co byś wybrał?",ans:["Lubię programować","Lubię pracę manualną","Lubię programowanie jak i pracę manualną"]},{q:"Według Ciebie jesteś typem:",ans:["Osoby, która musi mieć wszystko zaplanowane","Osoby, która idzie na żywioł","Trochę tego i trochę tamtego"]},{q:"Preferujesz pojazdy:",ans:["Spalinowe","Elektryczne","Hybrydowe"]},{q:"Twoje wymarzone życie to:",ans:["Siedzenie za biurkiem i zarządzanie ludźmi","Klepanie kodu całymi dniami","Projektowanie coraz to nowszych wynalazków z pomocą starego, dobrego CADa","Siedzenie umazany smarem aż po łokcie w warsztacie"]},{q:"Komu chętniej zawierzyłbyś swoje dane bądź projekty do wyliczeń?",ans:["Wykwalifikowanemu personelowi","Sztucznej Inteligencji","Nikomu. Jeśli chcesz coś zrobić dobrze, zrób to sam"]},{q:"Co Cię najbardziej denerwuje?",ans:["Ryk silników spalinowych pod domem","Hałas samolotów lecących nad głowami","Jak kompilator wyrzuci kolejny error który myślałem, że już naprawiłem"]}],r=[{q:"Jaki aspekt budownictwa interesuje Cię najbardziej?",ans:["Wizualizacja i wyliczenia projektów budynków","Wymyślanie coraz to nowszych i lepszych materiałów dla współczesnego budownictwa","Automatyzacja budynków i doprowadzanie ich do standardów „Smart house”"]},{q:"Jakie zdanie opisuje Ciebie najbardziej:",ans:["Siedzenie nad symulacjami wytrzymałościowymi i tworzenie domów moim Simom to istota życia","Noc w laboratorium testując kolejny kompozyt czy pichcąc coraz to nowszy beton to jest to","Nie wiem dlaczego ten kod działa, ale github mówi że jest dobrze, więc nie będę narzekać"]},{q:"Budując dom, stawiałbyś na:",ans:["Starą, sprawdzoną izolacje pasywną. Nie możemy sobie pozwolić na zmarnowania nawet Wata energii!","Wprowadzenie adaptacyjnych materiałów izolacyjnych, które poprawią komfort mieszkańców no i pozwolą utrzymać niski rachunek za ogrzewanie w zimę!","Komputer, komputer i jeszcze raz komputer. Trzeba wyliczyć realne zapotrzebowanie energetyczne budynku i tyle mu właśnie dostarczyć"]},{q:"Jak beton to tylko:",ans:["Tani","Ekologiczny","„Why not both?”"]},{q:"Dobry budynek zawiera:",ans:["Dużo roślin i ogromne okna","Klimatyzację, definitywnie klimatyzację","Jak najwięcej komputerowych bajerów i systemów automatycznego sterowania budynkiem"]}],t=[{q:"Właśnie się ocknąłeś po roztrzaskaniu się samolotu na bezludnej wyspie. Nikogo nie widzisz, ani nie słyszysz. Co robisz?",ans:["Buduję szałas","Próbuję naprawić komputer samolotu, aby skontaktować się z cywilizacją","Płaczę, bo słońce wypala mi oczy.","Szukam ludzi którym mogę powiedzieć jak najefektywniej wyjść z tej trudnej sytuacji.","Nic. Jestem zbyt przejęty zanieczyszczeniem środowiska przez samolot. "]},{q:"Czekasz aż skończy się robić kawa w ekspresie. Co myślisz?",ans:["“Ja bym zrobił lepszą kawę” ","“Ja bym zrobił lepszy automat” ","“01101011 01100001 01110111 01100001”","“Jezu ile plastiku”","“Ja bym zrobił lepszy budynek”"]},{q:"Twoi koledzy już czekają nad Wartą, a w twej dłoni piwa brak. Stoisz w kolejce do kasy w sklepie. Jest długa. Co robisz?",ans:["Wychodzę ze sklepu i deleguję zadanie zakupu komuś innemu. ","Idę do kasy samoobsługowej.","Nie chodzę do sklepu, sam ważę piwo.","Grzecznie czekam w kolejce.","Jacy koledzy?"]},{q:"Po piwie została ci butelka. Co z nią robisz?",ans:["Dołączam do konstrukcji piramidowej z butelek.","Montuję w niej ledy i robię z niej światełko. ","Oddaję do sklepu.","Tłumaczę jej swój kod. ","Zostawiam sobie, przyda się w laboratorium. "]},{q:"Z czego będziesz sławny?",ans:["Giga chad","Najbardziej wydajna produkcja materiału pochłaniającego CO2","Uratowanie ziemi ","Stworzenie robota, który krzyczy na ciebie jak śmiecisz. ","Budynek, który jest jednym wielkim solarem.","Stworzenie w pełni biodegradowalnego plastiku."]}]}}]);
//# sourceMappingURL=component---src-pages-budownictwo-js-fea5b6d17534cab0488d.js.map
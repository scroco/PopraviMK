var win = Ti.UI.currentWindow;
win.setBackgroundColor('#3F3F3F');

var infoLabel = Ti.UI.createLabel({
  top: 25, bottom: 10,
  left: 5, right: 5,
  autoLink: Ti.UI.Android.LINKIFY_ALL,
  color: '#EEE',
  font: {fontFamily: 'Helvetica Neue', fontSize: 14, fontWeight: 'normal'},
  text: [
    "Податоците за проблемите кои ги испраќате, вклучувајќи ја и локацијата ќе бидат јавни податоци, видливи на http://popravi.mk.",
    "Проблеми може да пријавувате анонимно или со email адреса за идентификација. Доколку се идентификувате со email адреса и на веб апликацијата се регистрирате или сте регистрирани со истата, ќе можете од таму да ги изменувате пријавените проблеми. Името кое го внесувате во Поставки пак се користи во приказот кај коментарите доколку коментирате на некој од проблемите.",
    "Забрането е да се изложувате себе и животната средина на опасност при пријавување на проблеми. Ве молиме критичните информации пријавете ги директно на надлежните органи.",
    "Забрането е да пријавувате материјал кој е лажен, клеветнички, злоупотребен, вулгарен, полн со омраза (расна, национална, полова, културна или лична).",
    "PopraviMK се обврзува да ја почитува приватноста и анонимноста на своите членови и гарантира дека вашите податоци нема да ги посредува на трети лица.",
    "Доколку при користење на оваа апликација се прекршени условите за користење и се повредени локалните закони, доколку е потребно, одговорните лица ќе соработуваат со сите правни институции, откривајќи ги сите потребни информации на прекршителот (IP адреса, електронска пошта).",
    "За повеќе информации можете да не контактирате на info@popravi.mk."
  ].join("\n\n")
});

var scrollView = Ti.UI.createScrollView({
  top: 5, bottom: 5,
  left: 5,
  contentWidth: "auto", contentHeight: "auto",
  showVerticalScrollIndicator: true
});
scrollView.add(infoLabel);

win.add(scrollView);

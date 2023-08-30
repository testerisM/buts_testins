// banka jautājumu kopums
const jautajumi = [
  {
    jautajums: "Kas ir galvenais zemes satelīts?",
    atbilde: "Mēness"
  },
  {
    jautajums: "Cik ir 2+2?",
    atbilde: "4"
  },
  {
    jautajums: "Kā sauc lielāko okeānu?",
    atbilde: "Klusais okeāns"
  }
];

// mainīgie js un html
const jautajumsElements = document.getElementById("jautajums");
const atbildeInput = document.getElementById("atbilde");
const iesniegtButton = document.getElementById("iesniegt");

let esosaisJautajumsIndex = 0;

// f-ija ar mērķi parādīt jautājumu
function paradiJautajumu() {
  jautajumsElements.textContent = jautajumi[esosaisJautajumsIndex].jautajums;
}

// f-ija kura pārbauda atbildi
function parbauditAtbildi() {
  const lietotajaAtbilde = atbildeInput.value.trim().toLowerCase();
  const pareizaAtbilde = jautajumi[esosaisJautajumsIndex].atbilde.toLowerCase();

  if (lietotajaAtbilde === pareizaAtbilde) {
    alert("Pareizi");
  } else {
    alert("Nepareizi");
  }
  esosaisJautajumsIndex++;
  if (esosaisJautajumsIndex < jautajumi.length) {
    paradiJautajumu();
    atbildeInput.value = "";
  } else {
    jautajumsElements.textContent = "Spēle beigusies"; //kad vairs nav jautājumu ko uzdot
    atbildeInput.disabled = true;
    iesniegtButton.disabled = true;
  }
}

// klausītājs, jo nav html pusē start daļa
paradiJautajumu();
iesniegtButton.addEventListener("click", parbauditAtbildi);
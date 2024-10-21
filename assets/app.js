"use strict";
 
// Elemente für Input und Button erstellen
const stationInput = document.querySelector('#station');
const searchButton = document.querySelector('#searchBtn');
 
// Beispiel-Stationen (größere Städte der Schweiz)
const stationData = {
  "bern": [
    { time: '14:30', to: 'Zürich', platform: '4' },
    { time: '15:00', to: 'Basel', platform: '1' }
  ],
  "zürich": [
    { time: '13:00', to: 'Bern', platform: '12' },
    { time: '14:45', to: 'Luzern', platform: '7' }
  ],
  "basel": [
    { time: '12:30', to: 'Zürich', platform: '2' },
    { time: '15:15', to: 'Genf', platform: '5' }
  ],
  "genf": [
    { time: '11:00', to: 'Lausanne', platform: '3' },
    { time: '16:00', to: 'Bern', platform: '6' }
  ],
  "lausanne": [
    { time: '10:15', to: 'Genf', platform: '2' },
    { time: '14:30', to: 'Zürich', platform: '9' }
  ],
  "luzern": [
    { time: '09:00', to: 'Basel', platform: '5' },
    { time: '12:45', to: 'Zürich', platform: '4' }
  ],
  "lugano": [
    { time: '10:30', to: 'Luzern', platform: '8' },
    { time: '13:00', to: 'Bern', platform: '11' }
  ],
  "winterthur": [
    { time: '08:00', to: 'Zürich', platform: '2' },
    { time: '12:15', to: 'St. Gallen', platform: '7' }
  ],
  "st. gallen": [
    { time: '09:15', to: 'Winterthur', platform: '3' },
    { time: '14:00', to: 'Zürich', platform: '6' }
  ],
  "biel": [
    { time: '08:45', to: 'Bern', platform: '1' },
    { time: '11:30', to: 'Lausanne', platform: '4' }
  ],
  "romanshorn": [
    { time: '10:00', to: 'Zürich', platform: '1' },
    { time: '11:15', to: 'St. Gallen', platform: '2' }
  ],
  "steckborn": [
    { time: '09:30', to: 'Kreuzlingen', platform: '3' },
    { time: '12:00', to: 'Zürich', platform: '4' }
  ],
  "salenstein": [
    { time: '08:15', to: 'Romanshorn', platform: '1' },
    { time: '14:45', to: 'Frauenfeld', platform: '2' }
  ]
};
 
// Funktion zum Erstellen der Tabellendaten
const displayData = (station) => {
  const tableBody = document.querySelector('#table-body');
  tableBody.innerHTML = '';  // Bestehende Einträge löschen
 
  station = station.toLowerCase();  // Station in Kleinbuchstaben umwandeln, um Groß-/Kleinschreibung zu ignorieren
 
  if (!stationData[station]) {
    alert('Station nicht gefunden!');
    return;
  }
 
  stationData[station].forEach(entry => {
    const row = tableBody.insertRow();
    const timeCell = row.insertCell(0);
    const directionCell = row.insertCell(1);
    const platformCell = row.insertCell(2);
 
    timeCell.textContent = entry.time;
    directionCell.textContent = entry.to;
    platformCell.textContent = entry.platform;
  });
};
 
// Event-Listener für den Button-Klick
searchButton.addEventListener('click', () => {
  const station = stationInput.value.trim();
  if (station) {
    displayData(station);  // Funktion zum Anzeigen der Daten aufrufen
  } else {
    alert('Bitte geben Sie eine Station ein!');
  }
});

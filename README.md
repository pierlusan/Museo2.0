# Museo2.0

Questo è un progetto realizzato con Ionic e Angular.

## Prerequisiti 

Assicurati di avere installato Node.js e npm. Inoltre, avrai bisogno di Ionic e Angular CLI. Se non li hai già, puoi installarli con i seguenti comandi:
npm install -g @ionic/cli
npm install -g @angular/cli

## Installazione

1.Clona il repository:

git clone https://github.com/pierlusan/Museo2.0

2. Vai nella directory del progetto:
   
cd Museo2.0

3. Installa le dipendenze:
   
npm install

4. Avvia l'applicazione:
   
ionic serve

Ora dovresti essere in grado di vedere l'applicazione in esecuzione all'indirizzo http://localhost:8100/ nel tuo browser.

## Costruire l'applicazione per Android

Se vuoi costruire l'applicazione per Android, assicurati di avere installato e configurato correttamente Android Studio e il relativo SDK. Poi esegui:

ionic build
npx cap add android
npx cap open android

Questo aprirà Android Studio con il tuo progetto. Da lì, puoi costruire l'applicazione e installarla sul tuo dispositivo o emulatore.

## Licenza

MIT

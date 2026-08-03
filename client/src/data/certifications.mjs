/**
 * Certificazioni mostrate nella home.
 * Per aggiungerne una basta inserire un oggetto in questo array:
 * la sezione le affianca e le centra da sola, qualunque sia il numero.
 *
 * Campi:
 *   key         identificatore univoco
 *   icon        classe Bootstrap Icons del simbolo grande in alto
 *   dateIcon    classe dell'icona accanto alla data
 *   title       { it, en }
 *   description { it, en }
 *   date        { it, en }
 *   hidden      true per tenerla nei dati senza mostrarla
 */

export const certifications = [
  {
    key: 'cambridge-fce',
    icon: 'bi bi-translate',
    dateIcon: 'bi bi-calendar-check',
    title: {
      it: 'Cambridge First Certificate (FCE)',
      en: 'Cambridge First Certificate (FCE)',
    },
    description: {
      it: 'Certificazione di lingua inglese livello B2 del Quadro Comune Europeo di Riferimento, rilasciata da Cambridge Assessment English.',
      en: 'English language certification at B2 level of the Common European Framework of Reference, issued by Cambridge Assessment English.',
    },
    date: {
      it: 'Ottobre 2020',
      en: 'October 2020',
    },
  },
  {
    key: 'bosch-prisma',
    hidden: true,
    icon: 'bi bi-translate',
    dateIcon: 'bi bi-hourglass-split',
    title: {
      it: 'Progetto Prisma - Speak German with Bosch',
      en: 'Project Prisma - Speak German with Bosch',
    },
    description: {
      it: 'Partecipante selezionato al programma Project Prisma di Bosch. Attualmente frequento il corso di lingua tedesca di 40 ore organizzato da Bosch e tenuto da Abbey School Torino, finalizzato al raggiungimento della competenza A1.1.',
      en: 'Selected participant in Bosch\u2019s Project Prisma program. Currently attending a 40-hour German language course organized by Bosch and taught by Abbey School Torino, achieving A1.1 level proficiency.',
    },
    date: {
      it: 'In corso...',
      en: 'Ongoing...',
    },
  },
];

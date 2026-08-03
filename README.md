# Curriculum

Curriculum vitae di Claudio Martini, realizzato come sito web.

**Online:** https://claudio-martini.com

## Struttura

```
client/          applicazione React + Vite (il sito vero e proprio)
  src/           sorgenti
  public/        file statici, PDF del CV, screenshot dei progetti
  dist/          build di produzione — è questa che viene pubblicata
server/          API Express + SQLite (non usata dal sito online:
                 i dati sono statici in client/src/data/)
```

## Sviluppo

```bash
cd client
npm install
npm run dev      # http://localhost:5173
npm run lint
```

## Pubblicazione

Il sito è ospitato su Cloudflare Pages, collegato a questo repository.
La cartella `client/dist` è versionata: per aggiornare la versione online
va ricostruita e committata.

```bash
cd client
npm run build
cd ..
git add -A
git commit -m "chore: aggiorna la build"
git push
```

Cloudflare rileva il push e ripubblica in circa un minuto.

## Dove si modificano i contenuti

| Cosa | File |
| --- | --- |
| Esami | `client/src/data/exams.mjs` |
| Competenze tecniche | `client/src/data/skills.mjs` |
| Certificazioni | `client/src/data/certifications.mjs` |
| Ricerca interattiva | `client/src/data/searchableItems.mjs` |
| Quiz | `client/src/data/quizData.mjs` |
| Progetti | `client/src/components/Projects/` |
| Colori del sito | `client/src/style/tokens.css` |
| PDF del CV | `client/public/cv/` |

## Palette

https://coolors.co/173753-a1a6b4-4cb963-b4d2e7-f8f8f8

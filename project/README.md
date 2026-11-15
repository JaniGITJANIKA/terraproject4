# Effektek és látvány weboldala

Ez egy React és Vite alapú, magyar nyelvű bemutatóoldal. Az oldal öt CSS-effektet tartalmaz: interaktív emoji-rácsot, töltőanimációt, analóg és digitális órát, lufikat és egy emojit.

## Kipróbálás online

**Élő weboldal:** [https://janigitjanika.github.io/terraproject4/](https://janigitjanika.github.io/terraproject4/)

Ha a link még nem nyílik meg, ellenőrizd a repository **Settings → Pages** oldalán, hogy a közzététel forrása **GitHub Actions** legyen, majd az **Actions** fülön várd meg a `Deploy to GitHub Pages` munkafolyamat sikeres befejezését.

## Futtatás a saját gépeden

### Szükséges programok

- [Node.js](https://nodejs.org/) 20.19 vagy újabb 22.12-es (vagy újabb) verzió
- Az npm, amely a Node.js telepítésével együtt érkezik
- Git, ha a projektet a GitHubról szeretnéd letölteni

### Letöltés és telepítés

Klónozd a repositoryt, majd lépj az alkalmazást tartalmazó `project` mappába:

```bash
git clone https://github.com/JaniGITJANIKA/terraproject4.git
cd terraproject4/project
npm ci
```

Ha a projekt mappája már megvan a gépeden, a klónozás helyett annak termináljában futtasd:

```bash
cd project
npm ci
```

### Fejlesztői szerver

```bash
npm run dev
```

Nyisd meg a terminálban megjelenő címet; alapértelmezés szerint ez `http://localhost:5173/`. A szerver leállításához nyomd meg a `Ctrl+C` billentyűkombinációt.

## A `dist` build elkészítése és kipróbálása

A `dist` mappa nem a forráskód, hanem a böngészőben futtatható, optimalizált weboldal. A parancsokat a `project` mappában futtasd:

```bash
npm run build
```

Ezzel létrejön a `project/dist` könyvtár. A kész build helyi megtekintéséhez indítsd el az előnézeti szervert:

```bash
npm run preview
```

Ez alapértelmezés szerint a `http://localhost:4173/` címen teszi elérhetővé a buildet. A `preview` csak akkor működik, ha előtte sikeresen lefutott a `build`. Ne a `dist/index.html` fájlt nyisd meg dupla kattintással (`file://` címmel); a Vite preview szerverrel vagy más statikus webszerverrel szolgáld ki, hogy az eszközfájlok megfelelően betöltődjenek.

## Közzététel GitHub Pages segítségével

A repositoryban lévő `.github/workflows/deploy-pages.yml` minden `master` ágra feltöltött változtatás után telepíti a weboldalt. A munkafolyamat a `project` mappában telepíti a függőségeket, elkészíti a buildet, majd a `project/dist` tartalmát publikálja.

Első alkalommal a GitHubon:

1. Nyisd meg a repository **Settings → Pages** oldalát.
2. A **Build and deployment → Source** beállításnál válaszd a **GitHub Actions** lehetőséget.
3. Nyisd meg az **Actions** fület, és ellenőrizd, hogy a `Deploy to GitHub Pages` futás sikeres-e.
4. A publikált oldal címe: [https://janigitjanika.github.io/terraproject4/](https://janigitjanika.github.io/terraproject4/).

Később elég a változtatásokat a `master` ágra feltölteni; a GitHub Actions újraépíti és frissíti az oldalt. A `dist` mappát nem kell feltölteni a Gitbe, mert a GitHub minden telepítéskor újra elkészíti.

## Hasznos parancsok

| Parancs | Mire való? |
| --- | --- |
| `npm ci` | Függőségek telepítése a lockfájl alapján |
| `npm run dev` | Fejlesztői szerver indítása |
| `npm run build` | Éles build készítése a `dist` mappába |
| `npm run preview` | A build helyi előnézete a `dist` mappából |
| `npm run lint` | ESLint ellenőrzés futtatása |

## Mappaszerkezet

```text
project/
├── public/                 # Statikus fájlok és ikonok
├── src/
│   ├── App.jsx             # Az oldal és az effektoldalak
│   ├── App.css             # Az effektek stílusai
│   ├── index.css           # Alapstílusok
│   └── main.jsx            # React belépési pont
├── dist/                   # A build kimenete (automatikusan generálódik)
├── index.html              # HTML belépési pont
├── package.json            # Parancsok és függőségek
└── vite.config.js          # Vite és relatív útvonalak beállításai
```


# Portfolio de Sarah Ramakavelo

Portfolio bilingue français/anglais de **Sarah Ramakavelo**, étudiante en finance à l'EDHEC. Le site présente son parcours, ses expériences, sa formation, ses projets et ses centres d'intérêt dans une interface responsive.

Le contenu a été séparé du code afin de pouvoir mettre le portfolio à jour directement depuis GitHub, sans modifier les composants Astro.

## Modifier le contenu sans coder

Les deux fichiers importants se trouvent à la racine du dépôt :

- [`profile.json`](profile.json) contient l'identité, les coordonnées, le texte d'introduction, les expériences, la formation, les compétences et la section « Au-delà du CV ».
- [`content/projects.json`](content/projects.json) contient les projets et toutes les informations de leurs pages détaillées.

Pour modifier un fichier depuis GitHub :

1. Ouvrir le fichier dans le dépôt.
2. Cliquer sur l'icône crayon **Edit this file**.
3. Modifier uniquement les valeurs souhaitées en conservant la structure JSON.
4. Mettre à jour les versions `fr` et `en` lorsqu'elles sont présentes.
5. Cliquer sur **Commit changes**, puis confirmer sur la branche `main`.
6. Vérifier dans l'onglet **Actions** que le nouveau déploiement est vert.

Chaque modification poussée sur `main` republie automatiquement le site avec GitHub Pages.

P.S : Oui, tu peux utiliser ChatGPT pour faire les modifications du json le seul critère est de ne pas modifier la structure du fichier, sinon le build échouera.

## Modifier le profil

Dans `profile.json`, Sarah peut notamment modifier :

- `identity` : nom, initiales, villes et origines ;
- `contact` : email, LinkedIn, GitHub et adresse du CV ;
- `positioning` : accroche, présentation et disponibilité ;
- `highlights` : chiffres et informations clés ;
- `experience` : expériences professionnelles ;
- `education` : formations et cours principaux ;
- `skills` : compétences et langues ;
- `activities` et `story.cards` : activités et section « Au-delà du CV ».

Une valeur indisponible peut être remplacée par `null`, sans guillemets. Les boutons Email, LinkedIn et GitHub ne s'affichent que lorsque leur valeur est renseignée.

## Ajouter un projet

Les projets sont définis dans `content/projects.json`. Pour en ajouter un, dupliquer un objet existant dans la liste `projects`, puis modifier ses valeurs.

Chaque projet possède notamment :

- `id` : identifiant unique utilisé dans l'URL, sans espace ni accent ;
- `name` et `summary` : nom et résumé bilingues ;
- `featured` : `true` pour mettre le projet en avant sur l'accueil ;
- `context`, `problem`, `method`, `results` et `learnings` : contenu de la page détaillée ;
- `technologies` : outils et compétences mobilisés ;
- `links` : liens GitHub et démonstration, ou `null` ;
- `images` : galerie du projet.

Exemple d'identifiant :

```json
"id": "analyse-risque-credit"
```

La page sera créée automatiquement à l'adresse `/projects/analyse-risque-credit` lors du prochain déploiement.

## Ajouter des photos à un projet

1. Dans GitHub, ouvrir `public/images/projects/`.
2. Créer ou utiliser un dossier portant le nom du projet.
3. Ajouter les images dans ce dossier, de préférence au format WebP.
4. Référencer chaque image dans la liste `images` du projet :

```json
{
  "src": "/images/projects/analyse-risque-credit/dashboard.webp",
  "alt": {
    "fr": "Tableau de bord d'analyse du risque",
    "en": "Risk analysis dashboard"
  },
  "caption": {
    "fr": "Vue synthétique des indicateurs",
    "en": "Summary view of the indicators"
  }
}
```

La première image devient le visuel principal de la page du projet. Éviter les images contenant des informations confidentielles, personnelles ou appartenant à un employeur.

## Remplacer le CV

Remplacer [`public/documents/CV.pdf`](public/documents/CV.pdf) par le nouveau CV en conservant exactement le nom `CV.pdf`. Tous les boutons de téléchargement utiliseront automatiquement le nouveau document.

## Règles pour les fichiers JSON

- Garder les guillemets autour des textes.
- Mettre une virgule entre les champs, sauf après le dernier champ d'un bloc.
- Conserver les accolades `{}`, les crochets `[]` et les noms de propriétés.
- Utiliser `null` pour masquer une information indisponible.
- Conserver un `id` différent pour chaque projet et chaque expérience.
- Ne jamais publier de données privées ou confidentielles.

Le build vérifie automatiquement la structure des données. Si un fichier JSON est invalide, le déploiement échoue et la dernière version fonctionnelle du site reste en ligne. Le guide détaillé est également disponible dans [`EDITING.md`](EDITING.md).

## Développement local

Prérequis : [Node.js](https://nodejs.org/) 18 ou plus récent.

```bash
npm install
npm run dev
```

Le site est alors accessible sur `http://localhost:4321`.

Avant de publier une modification technique :

```bash
npm run build
```

Le projet utilise [Astro](https://astro.build/), [GSAP](https://gsap.com/) et [Astro Icon](https://github.com/natemoo-re/astro-icon).

## Déploiement GitHub Pages

Le workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) construit et publie automatiquement le site à chaque push sur `main`.

Lors du premier déploiement, ouvrir **Settings → Pages** dans le dépôt GitHub et sélectionner **GitHub Actions** comme source.

## Crédits

Conception et développement : **Henintsoa RAMAKAVELO - aka D-Star**.

Ce portfolio est basé sur le template open source [Nagare](https://github.com/angine04/nagare) créé par [Angine Design](https://github.com/angine04), puis adapté pour Sarah Ramakavelo.

## Licence

Ce projet conserve la licence MIT fournie dans [`LICENSE`](LICENSE).

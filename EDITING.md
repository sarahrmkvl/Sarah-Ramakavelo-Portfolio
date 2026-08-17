# Modifier le portfolio de Sarah

Le profil se trouve dans `profile.json` et les études de cas dans `projects.json`, à la racine du dépôt. Aucun fichier dans `src/` ne doit être modifié pour mettre à jour le contenu.

## Modifier depuis GitHub

1. Ouvrir `profile.json` sur GitHub.
2. Cliquer sur l'icône crayon **Edit this file**.
3. Modifier les valeurs entre guillemets sans supprimer les noms de champs.
4. Pour un texte bilingue, mettre à jour les versions `fr` et `en`.
5. Cliquer sur **Commit changes**, puis confirmer sur la branche `main`.
6. Ouvrir l'onglet **Actions** : le workflow vert signifie que le site est publié.

## Ajouter ou modifier un projet

Modifier `projects.json`. Chaque projet possède un identifiant `id` unique qui devient son adresse, par exemple `portfolio-optimisation` produit `/projects/portfolio-optimisation`.

Les champs `context`, `problem`, `method`, `results` et `learnings` construisent automatiquement la page détaillée. Les listes françaises et anglaises de `method` et `results` doivent garder le même ordre et la même longueur.

### Ajouter des images

1. Déposer les images dans `public/images/projects/nom-du-projet/`.
2. Ajouter chaque image à la liste `images` du projet :

```json
{
  "src": "/images/projects/portfolio-optimisation/frontiere-efficiente.webp",
  "alt": {
    "fr": "Frontière efficiente et portefeuilles simulés",
    "en": "Efficient frontier and simulated portfolios"
  },
  "caption": {
    "fr": "Simulation Monte Carlo des allocations",
    "en": "Monte Carlo simulation of allocations"
  }
}
```

Les formats WebP, AVIF, PNG et JPEG sont acceptés. WebP est recommandé. La première image est affichée en grand sur la page du projet.

## Règles simples

- Garder les guillemets autour des textes.
- Garder une virgule entre deux champs, mais pas après le dernier champ d'un bloc.
- Utiliser `null` pour une information indisponible, sans guillemets.
- Dupliquer un objet existant pour ajouter une expérience, une formation ou un projet.
- Modifier `story.cards` pour ajouter, retirer ou réorganiser les cartes de la section « Au-delà du CV ».
- Conserver les dates au format `AAAA-MM`, par exemple `2026-07`.
- Garder `coursework` et `courseworkFr` dans le même ordre et avec le même nombre de cours.
- Ne jamais mettre de données privées ou confidentielles dans ce fichier public.

## Remplacer le CV

Remplacer `public/documents/CV.pdf` par le nouveau PDF en conservant exactement le même nom. Les boutons de téléchargement seront mis à jour automatiquement au prochain déploiement.

Si le JSON contient une erreur, GitHub refuse le déploiement et conserve automatiquement la dernière version fonctionnelle du site.

## Premier déploiement GitHub Pages

Dans le dépôt GitHub, ouvrir **Settings → Pages**, puis choisir **GitHub Actions** comme source. Le workflow `.github/workflows/deploy-pages.yml` publiera ensuite chaque modification de `main`.

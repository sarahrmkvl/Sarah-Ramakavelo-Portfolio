# Direction artistique - Portfolio de Sarah Ramakavelo

## 1. Vision

Le portfolio doit évoluer d'un template esthétique vers une expérience conçue spécifiquement autour de Sarah, de son parcours et de son rapport à la finance.

La direction artistique repose sur un langage visuel unique : **un réseau de nodes reliées par des lignes**. Ces nodes représentent successivement des rencontres, des décisions, des formations, des projets, des expériences et des possibilités futures.

Le réseau accompagne toute la navigation. Il ne s'agit pas d'une décoration différente pour chaque section, mais d'une seule scène persistante qui se réorganise au fil du scroll et des changements de page.

La métaphore centrale est celle d'une trajectoire :

- une origine personnelle ;
- des connexions qui apparaissent ou disparaissent ;
- un parcours académique qui se structure ;
- des projets qui forment des systèmes ;
- une expérience qui progresse ;
- une route qui continue vers un avenir encore indéfini ;
- une connexion finale avec le visiteur.

Le site doit conserver sa structure actuelle, ses contenus bilingues et ses pages détaillées. La transformation concerne principalement la mise en scène, les transitions et les interactions.

## 2. Principes visuels

### Les nodes

Les nodes restent toujours des **points simples**. Elles ne deviennent ni des cartes, ni des bulles contenant du texte, ni des objets 3D.

Leur signification est révélée par :

- leur position ;
- leur couleur ;
- leurs connexions ;
- leur mouvement ;
- une légende contextuelle affichée à proximité.

Les nodes importantes peuvent varier légèrement en taille, mais elles doivent conserver une géométrie circulaire sobre. Une node ne doit jamais être assez grande pour ressembler à un bouton flottant ou à une carte.

### Les lignes

Les lignes matérialisent des relations, des transitions ou une continuité temporelle. Elles peuvent :

- se tracer progressivement ;
- se rompre ;
- changer de direction ;
- former une frise, une courbe ou une piste ;
- transporter de petites impulsions ;
- sortir du viewport pour suggérer une suite.

Les transformations doivent rester fluides et déterministes. Aucun clignotement aléatoire ne doit être perceptible.

### Les couleurs

La palette actuelle reste une base, mais chaque couleur doit porter un sens. La couleur dominante évolue également avec la section active afin que chaque chapitre possède une atmosphère identifiable.

#### Palette par section

- **Hero et À propos : vert pale.** Une teinte profonde et organique qui évoque l'origine, le réseau et le potentiel.
- **Formation : blanc.** Un espace plus clair, précis et structuré, proche d'une page éditoriale.
- **Projets : bleu cyan.** Une couleur analytique associée à la donnée, à la méthode et à la technologie.
- **Expérience : jaune.** Une teinte énergique qui met en valeur la progression et la courbe du parcours.
- **Au-delà du CV : rouge ou ocre.** Une atmosphère plus chaleureuse et personnelle, liée aux racines, à l'effort et au mouvement.
- **Contact : violet.** Une conclusion distincte qui évoque l'échange et l'ouverture vers une nouvelle connexion.

Ces couleurs ne doivent pas apparaître comme des aplats brusquement juxtaposés. Le fond, les lignes, les nodes et les accents typographiques interpolent progressivement leur palette pendant le passage d'une section à la suivante.

Les pages spécifiques reprennent la couleur de leur section d'origine :

- les pages de projet restent dans l'univers bleu ;
- les pages de formation utilisent l'univers blanc ;
- les pages d'expérience utilisent l'univers jaune ;
- la page Contact utilise l'univers violet ;
- le CV peut conserver une base blanche ou neutre afin de privilégier la lecture.

Chaque univers doit inclure ses propres couleurs de texte, de bordure et d'accent pour garantir un contraste suffisant. Le changement de route doit initialiser explicitement la bonne palette, y compris lors d'un retour arrière ou d'une navigation directe vers une URL.

- Vert : connexion active, opportunité, progression.
- Rouge : risque, connexion interrompue ou décision écartée.
- Couleur principale claire : node neutre ou information disponible.
- Couleur d'accent : node actuellement sélectionnée.
- Couleurs secondaires : catégories telles que formation, projet, expérience ou lieu.

La couleur ne doit jamais être le seul moyen de comprendre un état. Une connexion coupée doit également changer de forme, d'opacité ou de mouvement.

### Les légendes contextuelles

Le détail d'une node apparaît dans une **popup légère placée à côté du point**, comparable à une légende de graphique.

Cette légende peut contenir :

- un titre ;
- une date ou un lieu ;
- une description courte ;
- une valeur clé ;
- une action comme « Voir le projet ».

Elle doit être reliée visuellement à la node, rester compacte et ne jamais masquer le contenu principal. Sur desktop, elle apparaît au survol ou au focus. Sur mobile, elle s'ouvre au toucher et une seconde action permet d'accéder au détail.

Une seule légende principale doit être ouverte à la fois.

## 3. Parcours de la page d'accueil

### 3.1 Hero - Le point d'origine

Le site s'ouvre sur un portrait authentique de Sarah.

Une première node apparaît près du portrait, comme le point d'origine de son parcours. Une ou plusieurs lignes partent de cette node et quittent partiellement le viewport afin d'annoncer que l'histoire continue plus bas.

Le portrait reste photographique. Le visage de Sarah ne doit pas être enfermé dans une node. La node existe à côté d'elle et agit comme le début du système.

Le titre, le positionnement et le choix de langue restent immédiatement lisibles.

### 3.2 À propos - Le réseau

En entrant dans la section, la caméra visuelle effectue un zoom arrière. La première node se révèle appartenir à un réseau plus vaste.

Le réseau représente les choix, les influences, les opportunités et les risques :

- certaines connexions s'ouvrent en vert ;
- certaines passent au rouge avant de se rompre ;
- d'autres chemins apparaissent en réponse ;
- quelques nodes réagissent légèrement au curseur.

Le comportement peut sembler vivant, mais reste semi-déterministe et calme. Les changements ne doivent jamais produire un effet de scintillement ou distraire de la lecture.

Les nodes significatives affichent une légende courte permettant d'associer le réseau à des éléments concrets de la personnalité de Sarah.

### 3.3 Formation - La frise

Les nodes du réseau se réorganisent progressivement en une frise chronologique.

Chaque node principale correspond à une formation ou une étape académique. Lorsqu'elle devient active, sa légende affiche :

- l'établissement ;
- le diplôme ;
- la période ;
- les enseignements principaux ;
- éventuellement une réalisation importante.

Le mouvement doit donner l'impression que le parcours se structure à partir des connexions précédentes. Sur desktop, la frise peut être horizontale ou légèrement diagonale. Sur mobile, elle devient verticale.

### 3.4 Projets - La constellation

Sur l'accueil, les projets apparaissent comme plusieurs nodes réparties dans l'espace. Chaque node représente un projet.

La place disponible étant volontairement limitée, l'interaction reste synthétique :

- survol ou focus : activation de la node ;
- apparition d'une légende avec nom, contexte court et technologies principales ;
- clic : transition vers la page détaillée du projet.

Les nodes peuvent être reliées par affinité de compétences, de domaine ou de technologie, sans former une liste rigide.

#### Exploration détaillée d'un projet

Lorsqu'un projet est ouvert, la scène zoome vers sa node principale. Celle-ci reste un point, puis plusieurs petites nodes apparaissent autour d'elle pour représenter :

- les technologies ;
- les méthodes ;
- les sources de données ;
- les résultats ;
- les livrables.

Une sidebar éditoriale apparaît en parallèle pour présenter le projet en détail. Elle contient le texte structuré, les liens, les résultats et les visuels. Les petites nodes servent à naviguer ou à mettre en évidence les différentes parties du contenu.

La sidebar reste du HTML accessible. La visualisation ne doit pas être la seule manière de consulter le projet.

### 3.5 Expérience - La courbe

Les nodes se réalignent pour former une courbe ascendante inspirée d'un graphique de marché.

- L'axe horizontal représente le temps.
- Chaque point représente une expérience.
- Les variations intermédiaires évoquent les apprentissages et les changements.
- La tendance générale suggère une progression des responsabilités.
- Le dernier segment continue au-delà de l'écran.

Cette courbe ne doit pas être présentée comme une véritable performance chiffrée. Elle reste une métaphore visuelle du parcours.

La légende associée à chaque node affiche l'entreprise, le poste, la période et un résultat ou apprentissage clé.

### 3.6 Au-delà du CV - La piste

La courbe perd progressivement sa rigidité financière et devient une piste, une route ou un tracé topographique.

Madagascar représente le point de départ symbolique. Le trajet traverse ensuite les lieux, activités et disciplines qui ont construit Sarah : Nice, Versailles, Genève, le triathlon, la prise de parole et les voyages.

Chaque étape reste représentée par une node et sa légende.

La piste n'a pas de fin visible. Elle devient progressivement plus légère, incomplète, puis disparaît hors du viewport. Quelques nodes non définies peuvent subsister pour évoquer les surprises et possibilités futures.

### 3.7 Contact - La connexion

Toutes les nodes se retirent jusqu'à n'en laisser que deux :

- Sarah ;
- son interlocuteur potentiel.

Une ligne relie ces deux points. Des impulsions la traversent pour symboliser un échange :

- email ;
- LinkedIn ;
- éventuellement transmission du CV.

Le survol ou le focus d'un bouton de contact déclenche l'impulsion correspondante. Les boutons restent visibles, explicites et utilisables indépendamment de l'animation.

## 4. Continuité entre les pages

Le langage des nodes doit être présent sur toutes les routes. Les pages détaillées ne doivent jamais donner l'impression d'appartenir à un autre site.

### Navigation vers une page

Lorsqu'une page est ouverte :

1. les nodes visibles se rapprochent ;
2. les connexions se résorbent ;
3. la node associée à la destination reste active ;
4. la scène se transforme vers l'état de la page ;
5. le contenu de la nouvelle page apparaît.

La transition doit rester courte et ne jamais retarder artificiellement la navigation.

### Page Projets

La page générale des projets reprend la constellation aperçue sur l'accueil, mais avec davantage d'espace et d'informations.

Chaque projet conserve la même couleur, la même node et les mêmes relations. La sélection d'un projet provoque le zoom vers sa node, l'apparition des nodes technologiques et l'ouverture de la sidebar détaillée.

### Pages de projet

Une page de projet doit être comprise comme un niveau de zoom supplémentaire dans le même réseau.

Le visiteur peut parcourir le contenu via la sidebar, les médias et les sous-nodes, puis revenir à la constellation sans rupture visuelle brutale.

### Formation et expérience

Les pages correspondantes reprennent respectivement la frise et la courbe avec plus de détails. Les repères visuels observés sur l'accueil restent identiques.

### CV

Depuis n'importe quelle section, l'ouverture du CV provoque un regroupement rapide des nodes vers un même point. Elles disparaissent ensuite pour laisser apparaître le document ou sa présentation.

Le retour à la page précédente restaure l'état visuel correspondant à la position de navigation.

### Contact

La page Contact conserve les deux nodes et le trafic d'impulsions de la dernière section de l'accueil.

## 5. Architecture d'animation

L'expérience repose sur **une seule scène persistante**, rendue en SVG ou Canvas 2D et pilotée par GSAP ScrollTrigger.

Three.js n'est pas nécessaire pour la première version. Il augmenterait le temps de production et le risque de problèmes de performance sans apporter de bénéfice essentiel à des points et des lignes.

La scène possède plusieurs états :

```text
origin
network
education-timeline
project-constellation
experience-chart
personal-track
contact-link
```

Chaque node garde un identifiant stable. Elle change de position et parfois de rôle, mais elle ne doit pas être recréée arbitrairement entre les sections. Cette permanence construit la narration.

Le contenu textuel, les liens, les boutons, les sidebars et les légendes interactives restent en HTML. Le SVG ou Canvas orchestre la visualisation, mais ne remplace pas l'interface accessible.

## 6. Transitions et comportement

- Les transitions doivent fonctionner dans les deux directions du scroll.
- Le scroll reste naturel et n'est jamais bloqué par une animation longue.
- Les nodes interpolent leurs positions au lieu de disparaître brutalement.
- Les légendes se ferment avant une transformation importante.
- Les animations de navigation durent idéalement moins d'une seconde.
- Les interactions de survol possèdent un équivalent clavier et tactile.
- Les états pseudo-aléatoires utilisent une graine stable pour produire un rendu cohérent.
- Aucun filtre CSS lourd ne doit être appliqué aux grandes surfaces animées.

## 7. Responsive et accessibilité

### Mobile

- Les compositions deviennent plus verticales.
- Le nombre de nodes décoratives est réduit.
- Les légendes s'ouvrent au toucher.
- Les sidebars deviennent des panneaux plein écran ou des sections sous la visualisation.
- La trajectoire reste visible sans recouvrir les textes.
- Les interactions essentielles ne dépendent jamais du survol.

### Mouvement réduit

Avec `prefers-reduced-motion: reduce` :

- chaque section affiche directement son état final ;
- les transitions longues et impulsions répétées sont désactivées ;
- les informations restent entièrement accessibles.

### Lisibilité

- Le contraste des textes est prioritaire sur la scène.
- Les lignes passent derrière le contenu.
- Les légendes ne doivent pas sortir du viewport.
- La couleur n'est jamais le seul indicateur d'état.
- Tous les boutons et nodes interactives possèdent un focus visible.

## 8. Performance

- Limiter le nombre de nodes visibles simultanément.
- Utiliser une seule boucle de rendu.
- Suspendre l'animation lorsque l'onglet est inactif.
- Éviter les ombres, flous et filtres coûteux sur les éléments animés.
- Réduire les effets sur les appareils peu puissants.
- Maintenir le contenu fonctionnel avant le chargement de la scène.
- Tester le rendu et la fluidité sur desktop et mobile.

## 9. Anomalie à corriger : fond noir persistant

### Symptôme

Lorsqu'une page spécifique est ouverte, le fond devient noir. Cette couleur peut ensuite rester active pendant le reste de la session, y compris après une nouvelle navigation.

### Impact

- rupture avec la palette du portfolio ;
- perte de continuité entre l'accueil et les pages détaillées ;
- impression de changement vers un autre site ;
- état visuel incorrect conservé par la navigation côté client.

### Exigence

Chaque route et chaque section doit définir explicitement son état visuel. Lors d'une navigation :

1. l'ancien état est nettoyé ;
2. les animations et listeners précédents sont détruits ;
3. les variables de thème sont réinitialisées ;
4. le nouvel état est appliqué ;
5. le retour arrière restaure le bon état.

Le noir ne doit être utilisé que s'il appartient explicitement à la direction artistique d'une scène. Il ne doit jamais apparaître comme couleur de repli ou état résiduel.

Ce problème doit être corrigé avant l'intégration complète du nouveau système de nodes afin de ne pas contaminer les transitions entre les routes.

## 10. Assets nécessaires

Priorité absolue :

- un portrait principal de Sarah en haute définition ;
- si possible, une version avec arrière-plan simple ou détourable ;
- quatre à six photographies personnelles cohérentes ;
- une photographie liée au triathlon ;
- une photographie ou archive liée à Madagascar ;
- des visuels de Nice, Versailles et Genève ;
- un à trois visuels par projet ;
- le CV définitif.

Les assets authentiques doivent porter la personnalité du site. Les images générées ou génériques peuvent compléter une texture ou une ambiance, mais ne doivent pas remplacer les éléments biographiques réels.

## 11. Priorités de production sur deux jours

### Priorité 1 - Système fondamental

- scène persistante ;
- modèle de données des nodes ;
- transitions entre états ;
- intégration avec le scroll ;
- correction du fond noir ;
- version mobile simplifiée.

### Priorité 2 - Parcours principal

- Hero ;
- réseau À propos ;
- frise Formation ;
- courbe Expérience ;
- piste Au-delà du CV ;
- connexion Contact.

### Priorité 3 - Projets

- constellation de l'accueil ;
- légendes synthétiques ;
- zoom vers un projet ;
- sous-nodes technologiques ;
- sidebar détaillée ;
- continuité avec les pages de projet.

### Priorité 4 - Finition

- transitions de routes ;
- états de survol et focus ;
- mouvement réduit ;
- optimisation ;
- tests desktop et mobile ;
- vérification GitHub Pages.

## 12. Critères de réussite

La nouvelle direction est réussie si :

- le site reste immédiatement compréhensible par un recruteur ;
- les nodes racontent le parcours au lieu de simplement décorer le fond ;
- chaque section constitue une transformation du même système ;
- les pages détaillées conservent le langage visuel de l'accueil ;
- les projets restent accessibles en un clic ;
- le site reste fluide et lisible sur mobile ;
- le contenu fonctionne sans animation ;
- aucune animation ne clignote ou ne laisse un fond incorrect ;
- l'ensemble semble conçu pour Sarah et non prérempli depuis un template.

## 13. Intention finale

Le portfolio doit raconter qu'une carrière ne se résume pas à une succession de lignes sur un CV. Elle est faite de connexions, de décisions, de détours, de disciplines et de projets qui finissent par former une trajectoire.

Sarah est le point d'origine du réseau. Le visiteur en devient le prochain point de connexion.

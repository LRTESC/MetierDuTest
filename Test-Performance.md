# Les tests de performance 

Elles se distingue en 3 types de tests spécifiques, chacun ayant un rôle bien definit:

1. Les tests de temps de réponse : 

- Comme leur  nom l'indique les tests de temps de reponse vont calculer, pour les différentes fonctionnalités, le temps que l'application met entre le moment où l'utilisateur a fait son action/demande et le moment où le resultat de cette action est visible /utilisable par l'utilisateur.

- Idéalement ces temps de réponse sont clairement définis dans les spécifications. Exemple : La page d'accueil du site doit s'afficher en moins de 2 secondes pour un téléphone XX en connexion 4G.

 - Pour mesurer le temps de réponse d'une fonction en Javascript, on peut utiliser la méthode console.time() et console.timeEnd().

- Exemple de code :
```
console.time('somme');

function calculSomme(tab) {
  let somme = 0;
  for(let i=0; i<tab.length; i++) {
    somme += tab[i];
  }
  return somme;
}

let monTab = [1, 2, 3, 4, 5];
console.log(calculSomme(monTab));

console.timeEnd('somme');
```

2. Les tests d'utilisations de ressources : 

- L'utilisation de ressources mesure la quantité de mémoire et de CPU utilisée par l'application. Pour mesurer l'utilisation de la mémoire en Javascript, on peut utiliser la méthode process.memoryUsage().

- Pour mesurer l'utilisation de la mémoire en Javascript, on peut utiliser la méthode process.memoryUsage().

- Exemple de code : 
```
function creerTableau(n) {
  let tab = [];
  for(let i=0; i<n; i++) {
    tab.push(Math.random());
  }
  return tab;
}

console.log(process.memoryUsage());
let monTab = creerTableau(1000000);
console.log(process.memoryUsage());
```
3. Les tests de capacités : 

- Les tests de capacité, quant à eux vise à connaitre les limites maximales d’un logiciel. Combien d’utilisateurs en simultanée, combien de requêtes, quel volume d’information…

- Les tests de capacités sont là pour déterminer ces limites… Et idéalement, quand elles existent, vérifier que les spécifications sont bien atteintes !

-  Pour mesurer la capacité d'une fonction en Javascript, on peut utiliser la méthode performance.now() 

- Exemple de code : 
```
function trierTableau(tab) {
  return tab.sort();
}

let taille = 10000;
let tempsDebut = performance.now();
while(true) {
  let monTab = [];
  for(let i=0; i<taille; i++) {
    monTab.push(Math.random());
  }
  trierTableau(monTab);
  let tempsFin = performance.now();
  if(tempsFin - tempsDebut > 1000) {
    console.log(`Capacité: ${taille} éléments`);
    break
```
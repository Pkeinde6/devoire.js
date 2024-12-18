Voici un exemple de **README.md** pour expliquer ton code et les choix faits lors de la création de cette application de gestion de tâches.
---

# To-Do List Web Application

## Description

Cette application est une **to-do list** (liste de tâches) interactive permettant à un utilisateur de gérer ses tâches. L'application permet d'ajouter des tâches, de les marquer comme terminées, de supprimer des tâches individuelles et de supprimer toutes les tâches. Les données sont sauvegardées dans le **localStorage** du navigateur, ce qui permet de conserver la liste même après un rafraîchissement ou une fermeture du navigateur.

## Fonctionnalités

- **Ajouter des tâches** : L'utilisateur peut ajouter une nouvelle tâche via un champ de saisie et un bouton "Ajouter".
- **Marquer des tâches comme terminées** : L'utilisateur peut cliquer sur une tâche pour la marquer comme terminée. Une fois marquée, la tâche est affichée avec une ligne barrée.
- **Supprimer une tâche** : Chaque tâche peut être supprimée individuellement.
- **Supprimer toutes les tâches** : Il existe un bouton permettant de supprimer toutes les tâches en un seul clic.
- **Affichage dynamique des statistiques** : Le nombre total de tâches et le nombre de tâches terminées sont mis à jour en temps réel.
- **Persistance des données** : Les tâches sont sauvegardées dans le **localStorage**, ce qui permet à l'utilisateur de les retrouver après avoir quitté et rouvert l'application.

## Technologies utilisées

- **HTML** : Structure de la page web.
- **CSS** : Styles pour une interface utilisateur propre et agréable.
- **JavaScript** : Logique de l'application, gestion des événements, mise à jour de l'interface utilisateur et gestion du **localStorage**.

## Explication du code

### 1. Structure HTML

La page se compose de deux sections principales :
- **Le menu** : Fournit une introduction au site avec une description des fonctionnalités.
- **Le container** : Contient l'interface de gestion de tâches avec un champ de saisie, un bouton pour ajouter des tâches, un bouton pour supprimer toutes les tâches, et une liste des tâches. En dessous, on trouve un affichage dynamique des statistiques des tâches.

Le code HTML est bien structuré pour rendre la page lisible et bien organisée.

### 2. Style CSS

Les styles CSS sont appliqués pour rendre l'application visuellement attrayante et fonctionnelle :
- **Disposition** : La mise en page utilise un système de flexbox pour centrer les éléments et les aligner correctement.
- **Couleurs et transitions** : Des couleurs douces et des transitions sont utilisées pour améliorer l'expérience utilisateur, comme l'effet au survol des boutons.

### 3. Logique JavaScript

#### Initialisation et Sauvegarde

```javascript
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let taskCount = tasks.length;
```

- **localStorage** : Lors du chargement de la page, les tâches sont récupérées depuis le `localStorage`. Si aucune tâche n'est présente, un tableau vide est utilisé.
- **taskCount** : Cette variable garde une trace du nombre de tâches ajoutées par l'utilisateur.

#### Mise à jour de la liste de tâches

```javascript
function updateTaskList() {
    taskList.innerHTML = '';
    let completedTasksCount = 0;
    tasks.forEach((task, index) => {
        // Création des éléments de liste et gestion de leur état
    });
}
```

- La fonction `updateTaskList()` est utilisée pour afficher la liste des tâches à chaque fois que l'état des tâches change (ajout, suppression, ou modification).
- Si une tâche est marquée comme terminée, elle est affichée avec une ligne barrée et le compteur de tâches terminées est mis à jour.

#### Ajout de tâche

```javascript
addTaskButton.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
        tasks.push({ text: taskInput.value.trim(), completed: false });
        taskCount++; // Incrémente le nombre de tâches insérées
        taskInput.value = '';
        updateTaskList();
        saveTasksToLocalStorage();
    }
});
```

- Lorsque l'utilisateur clique sur le bouton "Ajouter", une nouvelle tâche est ajoutée au tableau `tasks` et les tâches sont mises à jour à l'écran.
- Les données sont ensuite sauvegardées dans le **localStorage** pour persister après un rafraîchissement de la page.

#### Suppression d'une tâche

```javascript
deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    tasks.splice(index, 1);
    updateTaskList();
    saveTasksToLocalStorage();
});
```

- Chaque tâche possède un bouton "Supprimer" qui permet de retirer cette tâche de la liste.
- Après la suppression, la liste est mise à jour et les modifications sont sauvegardées dans le **localStorage**.

#### Suppression de toutes les tâches

```javascript
clearAllButton.addEventListener('click', () => {
    tasks = [];
    taskCount = 0; // Réinitialise le compteur de tâches insérées
    updateTaskList();
    saveTasksToLocalStorage();
});
```

- Le bouton "Tout supprimer" réinitialise la liste des tâches et le compteur. Le **localStorage** est également mis à jour pour refléter cette modification.

### 4. Pourquoi avoir utilisé ce code ?

- **localStorage** permet de sauvegarder l'état de l'application, ce qui rend l'expérience plus fluide et persiste même après un redémarrage du navigateur.
- **Manipulation DOM** avec JavaScript : Utilisation des événements (`click`, `input`, etc.) et des méthodes DOM (`createElement`, `appendChild`, etc.) pour créer une interface dynamique.
- **CSS** pour améliorer l'apparence et l'ergonomie de l'application, rendant la gestion des tâches agréable à utiliser.

## Comment utiliser l'application

1. Ouvrir le fichier **index.html** dans un navigateur web.
2. Ajouter des tâches dans le champ de saisie et les enregistrer en cliquant sur le bouton "Ajouter".
3. Marquer les tâches comme terminées en cliquant dessus.
4. Supprimer des tâches individuellement en cliquant sur le bouton "Supprimer".
5. Supprimer toutes les tâches en cliquant sur le bouton "Tout supprimer".

Les tâches ajoutées seront conservées même après un rafraîchissement de la page.

---
 
 

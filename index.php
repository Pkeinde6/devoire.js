<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="en-tete">
      <img src="https://pbs.twimg.com/profile_images/2534678789/em5u2hgucnf9v0k8q8z7_400x400.png" width="100px" style="border-radius: 50px; margin: 5px;" alt="">
    </header>
    <div class="menu">
        <h1>Bienvenue sur le Menu</h1>
        <h3>Les objectifs du site sont : </h3>
            <p>-- Ajouter des tâches</p>
            <p>--- Supprimer des tâches</p>
            <p>---- cliquer pour marquer les tâches achevés</p>

    </div>
    <div class="container">
        <h1>Gestion de Tâches</h1>
        <input type="text" id="taskInput" placeholder="Ajouter une tâche..." />
        <button id="addTaskButton">Ajouter</button> <button id="clearAllButton">Tout supprimer</button>

        <ul id="taskList"></ul>

        

        <div id="taskCounter">
            <p id="totalTasks">Total des tâches : 0</p>
            <p id="completedTasks">Tâches terminées : 0</p>
        </div>
    </div>
    <footer> ~ Edited by Pape Cheikh Keinde, classe BIG 2A , ID : 22 14 83 ~</footer>
    <script src="script.js"></script>
</body>
</html>

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearAllButton = document.getElementById('clearAllButton');
    const totalTasksDisplay = document.getElementById('totalTasks');
    const completedTasksDisplay = document.getElementById('completedTasks');
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let taskCount = tasks.length; // Variable pour compter le nombre de tâches insérées
  
    // Fonction pour mettre à jour la liste de tâches et les compteurs
    function updateTaskList() {
        taskList.innerHTML = '';
        let completedTasksCount = 0;
  
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.text;
  
            // Marquer comme terminé
            if (task.completed) {
                li.classList.add('completed');
                completedTasksCount++;
            }
  
            // Event de click pour marquer la tâche comme terminée
            li.addEventListener('click', () => {
                task.completed = !task.completed;
                updateTaskList();
                saveTasksToLocalStorage();
            });
  
            // Bouton de suppression
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Supprimer';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                tasks.splice(index, 1);
                updateTaskList();
                saveTasksToLocalStorage();
            });
  
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
  
        totalTasksDisplay.textContent = `Total des tâches : ${tasks.length}`;
        if (completedTasksCount >= 2) {
            completedTasksDisplay.textContent = `Tâches terminées: ${completedTasksCount}`;
        }else if (completedTasksCount < 2){
            completedTasksDisplay.textContent = `Tâche terminée: ${completedTasksCount}`;
        }
    }
  
    // Sauvegarder les tâches dans localStorage
    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Ajouter une nouvelle tâche
    addTaskButton.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            tasks.push({ text: taskInput.value.trim(), completed: false });
            taskCount++; // Incrémente le nombre de tâches insérées
            taskInput.value = '';
            updateTaskList();
            saveTasksToLocalStorage();
        }
    });
  
    // Supprimer toutes les tâches
    clearAllButton.addEventListener('click', () => {
        tasks = [];
        taskCount = 0; // Réinitialise le compteur de tâches insérées
        updateTaskList();
        saveTasksToLocalStorage();
    });
  
    // Initialiser la liste
    updateTaskList();
});

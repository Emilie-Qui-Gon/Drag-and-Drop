const initialData = {
  tasks: {
      "task-1": { id: "task-1", content : "Faire une Todolist" },
      "task-2": { id: "task-2", content : "Apprendre React native" },
      "task-3": { id: "task-3", content : "Passer certification Opquast" },
      "task-4": { id: "task-4", content : "Apprendre Node JS" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "à faire",
        taskIds: ["task-1", "task-2", "task-3", "task-4"]
      },
      "column-2": {
        id: "column-2",
        title: "En cours",
        taskIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Fait",
        taskIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  };
 
  export default initialData;
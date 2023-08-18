import "./App.css";
import { useState } from "react";
import Tasks from "./TasksElement";

function App() {
    const [tasks, setTasks] = useState([
        { text: "Go to gym", checked: true },
        { text: "Drink coffee", checked: false },
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target[0].value);
        const newTask = { text: event.target[0].value, checked: false };
        event.target[0].value = "";
        setTasks([...tasks, newTask]);
        // TODO Add a new task to the tasks array
        // HINT: Spread the current tasks array into a new array, add this new task on there
        // then update the state of tasks
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((t, i) => i != index));
        // TODO Using the provided index, remove the task from the array and update
        // state to re-render the component
        // HINT: .filter()
    };

    const handleUpdate = (index, checked) => {
        const updatedTasks = tasks.map((t, i) =>
            i === index ? { ...t, checked } : t
        );
        setTasks(updatedTasks);
        // TODO Find the task by the provided index
        // Change the checked property on the task
        // Update the state array to re-render the component
        // HINT: .map() or access by index
    };

    return (
        <div className="app">
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="task" />
                    <button type="submit">Add task</button>
                </form>

                <Tasks
                    tasks={tasks}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />
            </main>
        </div>
    );
}

export default App;

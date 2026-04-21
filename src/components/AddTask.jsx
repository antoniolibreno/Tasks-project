import { useState } from "react";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-sm shadow flex flex-col">
      <input
        type="text"
        placeholder="Nova tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha os campos para adicionar a tarefa");
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 font-medium rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

import { BlockError } from "@/components/blocks/BlockError";
import { getTodos } from "@/lib/api";

export async function TodosBlock() {
  let todos;

  try {
    todos = await getTodos();
  } catch (error) {
    return (
      <BlockError
        title="Todos"
        message={error instanceof Error ? error.message : "Erreur inconnue."}
      />
    );
  }

  return (
    <article className="data-card">
      <header>
        <div>
          <h2>Todos</h2>
          <p className="item-meta">Tâches liées à l’utilisateur 1.</p>
        </div>
        <span className="badge">~3 s</span>
      </header>

      {/* Le statut est affiché en texte pour rester accessible sans icône décorative. */}
      <ul className="data-list">
        {todos.slice(0, 6).map((todo) => (
          <li key={todo.id}>
            <p className="item-title">{todo.title}</p>
            <p className="item-meta">
              Statut : {todo.completed ? "terminée" : "à faire"}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

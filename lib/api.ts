import { wait } from "@/lib/delay";

const API_URL = "https://jsonplaceholder.typicode.com";

export type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

async function fetchJson<T>(path: string, delay: number): Promise<T> {
  // Le délai est appliqué dans chaque fetch pour conserver des requêtes indépendantes.
  await wait(delay);

  const response = await fetch(`${API_URL}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Erreur API (${response.status}) sur ${path}`);
  }

  return response.json() as Promise<T>;
}

export function getUsers() {
  return fetchJson<User[]>("/users", 1000);
}

export function getPosts() {
  return fetchJson<Post[]>("/posts?_limit=10", 2000);
}

export function getTodos() {
  return fetchJson<Todo[]>("/todos?userId=1", 3000);
}

export async function getComments() {
  await wait(1500);

  // Erreur volontaire demandée par l’énoncé pour vérifier l’isolation du bloc.
  throw new Error("Le chargement des commentaires a échoué volontairement.");

  return fetchJson<Comment[]>("/comments?postId=1", 0);
}

export interface INotes {
  id: string,
  createDate: string,
  title: string,
  type: TypesNote,
  description: string,
}

export type TypesNote = 'tareas de casa' | 'tareas del trabajo' | 'ideas nuevas' | 'diario personal' | '';
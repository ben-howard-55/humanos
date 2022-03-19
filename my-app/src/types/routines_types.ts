export interface habit_history {
  date: number;
  completed: boolean;
}

export interface habits {
  id: number;
  history: habit_history[];
}

export interface routine {
  id: number;
  title: string;
  scheduling_function: string;
  habits: habits[];
}

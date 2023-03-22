export interface Workout {
  id: string;
  name: string;
  time: number; // in ms
  videos: Video[];
  tags: Tag[];
  preview: string;
  description: string;
  calories: number;
  author: {
    id: string
    name: string;
  }
}

export interface Video {
  link: string;
  authorId: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface User {
  id: string;
  name: string;

  sex: Sex;
  bmi: string; // ИМТ
  height: number;
  weight: number;
  weightUnit:  WeightUnit;
  heightUnit: HeightUnit;

  createdWorkoutIds: string[]; 
  favoriteWorkoutIds: string[];

  completedWorkout: CompletedWorkout[];

  settings: Settings;

}

export interface Settings {
  theme: {}
}



export interface CompletedWorkout {
  data: string;
  workoutId: string
}

export type Sex = 'woman' | 'man' | 'other';
export type HeightUnit = 'cm' | 'ft.';
export type WeightUnit = 'kg' | 'lb';
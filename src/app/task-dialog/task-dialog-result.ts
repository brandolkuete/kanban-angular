import { Task } from "../task/task";

export interface TaskDialogResult {
  task: Task,
  delete?: boolean
}

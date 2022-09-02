import { Task } from "../task/task";

export interface TaskDialogData {
  task: Partial<Task>,
  enableDelete: boolean
}

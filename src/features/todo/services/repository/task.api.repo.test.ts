import { TaskApiRepo } from './task.api.repo';

describe('first', () => {
  let repo: TaskApiRepo;

  beforeEach(() => {
    repo = new TaskApiRepo();
  });

  test('should first', () => {
    repo.loadTasks();
  });
});

exports.seed = function(knex) {
    return knex('tasks').truncate()
      .then(function () {
        return knex('tasks').insert([
          {task_description: 'Get coding!', task_notes: 'Go to your desk and wake up the PC', task_completed: false, project_id: 1},
          {task_description: 'Sleep', task_notes: 'You are THAT bitch and you deserve some sleep.', task_completed: true, project_id: 1},
        ]);
      });
  };
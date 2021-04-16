exports.seed = function(knex) {
    return knex('projects').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          {project_name: 'Play Overwatch', project_description: 'Time to carry some boosted DPS', project_completed: false},
          {project_name: 'Work on Portfolio Website', project_description: 'Hurry up and finish', project_completed: false}
        ]);
      })
    }
    
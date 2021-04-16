exports.seed = function(knex) {
    return knex('project_resources').truncate()
      .then(function () {
        return knex('project_resources').insert([
          {resource_id: 1, project_id: 1, resource_use: 'Are you coding yet?'},
          {resource_id: 2, project_id: 2, resource_use: 'Maybe someone will call you...'}
        ]);
      });
  };
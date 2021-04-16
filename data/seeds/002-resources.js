exports.seed = function(knex) {
    return knex('resources').truncate()
      .then(function () {
        return knex('resources').insert([
          {resource_name: 'IDE', resource_description: 'Where the magic happens.'},
          {resource_name: 'Phone', resource_description: 'Do NOT call this number, dumby.'}
        ]);
      });
  };
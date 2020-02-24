exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("url")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("url").insert([
        {
          original: "https://simonsisay.me",
          short: "adasd"
        }
      ]);
    });
};

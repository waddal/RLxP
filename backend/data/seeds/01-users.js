const dummyData = [
  {
    username: "testUser1",
    password: "testPass1",
    email: "testUser1@email.com",
  },
  {
    username: "testUser2",
    password: "testPass2",
    email: "testUser2@email.com",
  },
];

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert(dummyData);
};

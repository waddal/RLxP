const dummyData = [
  {
    username: "koala01",
    password: "koalaPass01",
    email: "koala01@email.com",
  },
  {
    username: "bonobo01",
    password: "bonoboPass01",
    email: "bonobo01@email.com",
  },
];

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert(dummyData);
};

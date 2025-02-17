/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("reviews").del();

  // Inserts seed entries
  await knex("reviews").insert([
    {
      id: 1,
      holistic_product_id: 1,
      user_name: "Maria",
      user_review:
        "This Vitamin C supplement has been a game-changer for me. I've experienced a significant boost in my immune system, and I appreciate the added energy it brings to my daily routine.",
    },
    {
      id: 2,
      holistic_product_id: 2,
      user_name: "Pierre",
      user_review:
        "This CBD salve is a lifesaver for soothing my muscle soreness and promoting relaxation. Its fast-acting formula and calming scent make it a must-have in my daily wellness routine.",
    },
    {
      id: 3,
      holistic_product_id: 3,
      user_name: "Carlos",
      user_review:
        "This Epsom salt bath product is my go-to for relaxation and muscle relief. It transforms my bath into a soothing oasis, alleviating tension and leaving me feeling refreshed and rejuvenated.",
    },
    {
      id: 4,
      holistic_product_id: 4,
      user_name: "Brenna",
      user_review:
        "This potassium supplement has been instrumental in maintaining my electrolyte balance and preventing muscle cramps. I appreciate its effectiveness and the positive impact it has had on my overall well-being.",
    },
  ]);
};

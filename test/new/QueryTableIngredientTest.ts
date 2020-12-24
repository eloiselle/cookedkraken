import { expect } from "chai";
import assert from "assert";

// @ts-ignore
import * as QueryTableIngredient from "../../src/rest/Ingredient/QueryTableIngredient.ts";
import Ingredient from "../../src/rest/Ingredient/Ingredient";

describe('QueryTableUser', () => {


  it("should always pass", () => {
  })

  it('All query should work', () => {
    QueryTableIngredient.clearTable()
    expect(QueryTableIngredient.findAll().count).to.equal(0)
    const ingredient = new Ingredient({
      name: "Test",
      description: "This is a test",
      hp_value: 1,
      hunger_value: 1,
      sanity_value: 1,
      spoil_time: 1,
      can_cook: false,
      id_version_specific: 1,
    })
    const id = QueryTableIngredient.insert(ingredient)
    expect(QueryTableIngredient.findAll().count).to.equal(1)
    QueryTableIngredient.remove(id)
    expect(QueryTableIngredient.findAll().count).to.equal(0)
  });


});
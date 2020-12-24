import { expect } from "chai";
import assert from "assert";

import * as DatabaseProperties from "../../src/databaseProperties";
import Ingredient from "../../src/rest/Ingredient/Ingredient";
import * as fs from "fs";
import * as path from "path";
import { config } from "dotenv";

config();

describe('EnvTest', () => {


  it("File .env should exist", () => {
    const file = path.join(__dirname, '..', '.env');
    return fs.existsSync(file)
  })

  it("Should be in 'dev' environment", () => {
    expect(process.env.NODE_ENV).equal("dev")
  })


  it("Should get server properties from file .env", () => {
    expect(process.env.SERVER_PORT).not.null
    expect(process.env.HOST_URL).not.null
  })

  it('Should get db properties from file .env', () => {
    expect(process.env.DB_USER).not.null
    expect(process.env.DB_USER).not.equal("")
    expect(process.env.DB_PASSWORD).not.null
    expect(process.env.DB_HOST).not.null
    expect(process.env.DB_HOST).not.equal("")
    expect(process.env.DB_NAME).equal("productique_db")
    expect(process.env.DB_NAME).not.null
    expect(process.env.DB_NAME).not.equal("")
  });


});
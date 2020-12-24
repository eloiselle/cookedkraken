import { expect } from "chai";
import assert from "assert";

// @ts-ignore
import * as QueryDatabase from "../../src/QueryDatabase.ts";


describe('QueryDatabase', () => {

  it('Ping should work', () => {

    QueryDatabase.pingDb().then((result: any) => {
      expect(result).equal('2')
    })
  });


});
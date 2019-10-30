// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Land, LandController } from '../src';

describe('Land', () => {
  let adapter: MockControllerAdapter;
  let landCtrl: ConvectorControllerClient<LandController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    landCtrl = ClientFactory(LandController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'LandController',
        name: join(__dirname, '..')
      }
    ]);

    adapter.addUser('Test');
  });
  
  it('should create a default model', async () => {
    const modelSample = new Land({
      id: uuid(),
      RLRegistry: 'Colombo',
      Extent: 50,
      ParentLandID: "Nil",
      Owner: "Tomoko",
      Boundaries: [[1,3], [2,1], [1,4], [12,2]]
    });

    await landCtrl.$withUser('Test').createLand(modelSample);
  
    const justSavedModel = await adapter.getById<Land>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});
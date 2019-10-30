// tslint:disable:no-unused-expression
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import 'mocha';

import { CouchDBStorage } from '@worldsibu/convector-storage-couchdb';
import { FabricControllerAdapter } from '@worldsibu/convector-platform-fabric';
import { BaseStorage, ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';

import { Land, LandController } from '../src';

describe('Land', () => {
  let adapter: FabricControllerAdapter;
  let landCtrl: ConvectorControllerClient<LandController>;

  before(async () => {
      adapter = new FabricControllerAdapter({
        skipInit: true,
        txTimeout: 300000,
        user: 'user1',
        channel: 'ch1',
        chaincode: 'land',
        keyStore: '$HOME/hyperledger-fabric-network/.hfc-org1',
        networkProfile: '$HOME/hyperledger-fabric-network/network-profiles/org1.network-profile.yaml',
        userMspPath: '$HOME/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp',
        userMsp: 'org1MSP'
      });
      landCtrl = ClientFactory(LandController, adapter);
      await adapter.init(true);

      BaseStorage.current = new CouchDBStorage({
        host: 'localhost',
        protocol: 'http',
        port: '5084'
      }, 'ch1_land');
  });

  after(() => {
    // Close the event listeners
    adapter.close();
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

    await landCtrl.createLand(modelSample);

    const justSavedModel = await Land.getOne(modelSample.id);
    expect(justSavedModel.id).to.exist;
  });
});
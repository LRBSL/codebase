import * as yup from 'yup';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param,
  History
} from '@worldsibu/convector-core';

import { Land } from './land.model';

@Controller('land')
export class LandController extends ConvectorController<ChaincodeTx> {

  @Invokable()
  public async init() {
    // Mock Data
    let mockData = [
      new Land(
        {
          id: "LAND_001",
          RLRegistry: "Colombo",
          Extent: 50,
          ParentLandID: "nil",
          Owner: "Ravindu Sachintha",
          NewOwner: 'nil',
          Boundaries: [[0, 20], [10, 20], [10, 0], [0, 0]],
          SurveyorVote: 1,
          NotaryVote: 0,
          CurrentOwnerVote: 0
        }),
      new Land(
        {
          id: "LAND_002",
          RLRegistry: "Delkanda",
          Extent: 25,
          ParentLandID: "nil",
          Owner: "Namal Jayasinghe",
          NewOwner: 'nil',
          Boundaries: [[0, 20], [10, 20], [10, 0], [0, 0]],
          SurveyorVote: 1,
          NotaryVote: 0,
          CurrentOwnerVote: 0
        }),
      new Land(
        {
          id: "LAND_003",
          RLRegistry: "Aissawella",
          Extent: 32,
          ParentLandID: "nil",
          Owner: "Sashika Madubhashini",
          NewOwner: 'nil',
          Boundaries: [[30, 20], [10, 80], [10, 0], [0, 0]],
          SurveyorVote: 1,
          NotaryVote: 0,
          CurrentOwnerVote: 0
        }),
      new Land(
        {
          id: "LAND_004",
          RLRegistry: "Rajagiriya",
          Extent: 75,
          ParentLandID: "nil",
          Owner: "Tharindu Madhusanka",
          NewOwner: 'nil',
          Boundaries: [[0, 34], [12, 20], [10, 45], [0, 18]],
          SurveyorVote: 1,
          NotaryVote: 0,
          CurrentOwnerVote: 0
        }),
      new Land(
        {
          id: "LAND_005",
          RLRegistry: "Kadawatha",
          Extent: 40,
          ParentLandID: "nil",
          Owner: "Rupika Jayaweera",
          NewOwner: 'nil',
          Boundaries: [[0, 20], [15, 25], [25, 0], [0, 0]],
          SurveyorVote: 1,
          NotaryVote: 0,
          CurrentOwnerVote: 0
        }),
    ];
    await Promise.all(mockData.map(land => land.save()));
    return "successfully initialized";
  }

  @Invokable()
  public async queryLand(@Param(yup.string()) id: string): Promise<Land> {
    return Land.getOne(id);
  }

  @Invokable()
  public async queryAllLands(): Promise<Land[]> {
    return Land.getAll();
  }

  @Invokable()
  public async createLand(@Param(Land) land: Land) {
    await land.save();
    return "successfully land created";
  }

  @Invokable()
  public async changeLandOwner(@Param(yup.string()) id: string) {
    let land = await Land.getOne(id);
    if (land.SurveyorVote != 1 && land.NotaryVote != 1 && land.CurrentOwnerVote != 1) {
      return "Transaction not permitted yet.";
    }
    land.Owner = land.NewOwner;
    land.NewOwner = 'nil';
    land.NotaryVote = 0;
    land.CurrentOwnerVote = 0;
    return land.save();
  }

  @Invokable()
  public async changeSurveyorVote(@Param(yup.string()) id: string, @Param(yup.number()) vote: number) {
    let land = await Land.getOne(id);
    land.SurveyorVote = vote;
    return land.save();
  }

  @Invokable()
  public async changeNotaryVote(@Param(yup.string()) id: string, @Param(yup.number()) vote: number, @Param(yup.string()) newOwner: string) {
    let land = await Land.getOne(id);
    land.NotaryVote = vote;
    land.NewOwner = newOwner;
    return land.save();
  }

  @Invokable()
  public async changeCurrentOwnerVote(@Param(yup.string()) id: string, @Param(yup.number()) vote: number) {
    let land = await Land.getOne(id);
    land.CurrentOwnerVote = vote;
    return land.save();
  }

  @Invokable()
  public async getHistoryForLand(@Param(yup.string()) id: string): Promise<History<Land>[]> {
    let land = await Land.getOne(id);
    return land.history();
  }
}
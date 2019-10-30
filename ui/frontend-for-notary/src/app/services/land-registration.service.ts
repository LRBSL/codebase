import { Injectable } from '@angular/core';
import { HttpRequestResolverService } from './http-request-resolver.service';

export interface Step {
  count: number;
  title: string;
}

export interface OwnerCredentials {
  ownerNIC: string;
  landKey: string;
}

export interface LandBlock {
  id: string;
  extent: number;
  owner: string;
  newOwner?: string;
  parentLandID: string;
  rlRegistry: string;
  boundaries: number[][];
  surveyorVote?: number;
  notaryVote?: number;
  currentOwnerVote?: number;
}

export interface NIC {
  ownerNIC: string;
  fullname?: string;
  gender?: string;
  birthday?: Date;
  occupation?: string;
  postal_address?: string;
  registered_date?: Date;
}

export interface Deed {
  reg_no?: string;
  land_id?: string;
  notary_name?: string;
  deed_type?: string;
  plan_id?: string;
}

export interface Plan {
  reg_no?: string;
  land_id?: string;
  surveyor_name?: string;
}

export const steps: Step[] = [
  {count: 1, title: 'Owner Validation'},
  {count: 2, title: 'Land Details Validation'},
  {count: 3, title: 'Land History Validation'},
  {count: 4, title: 'New Owner Validation'},
  {count: 5, title: 'New Owner Information'},
  {count: 6, title: 'Execute The Transaction'}
];

@Injectable({
  providedIn: 'root'
})
export class LandRegistrationService {
  // variable declaration
  private currentStep: Step;
  private ownerCredentials: OwnerCredentials;
  private landID: string;
  private landBlock: LandBlock;
  private ownerNIC: NIC;
  private buyerNIC: NIC;
  private landDeed: Deed;
  private landPlan: Plan;

  // constructor
  constructor(private httpService: HttpRequestResolverService) {
    this.ownerCredentials = null;
    this.landID = null;
    this.landBlock = null;
    this.ownerNIC = null;
    this.buyerNIC = null;
  }

  // get the current step
  public getCurrentStep(): Step {
    return this.currentStep;
  }
  // set the current step
  public setCurrentStep(stepCount: number): void {
    this.currentStep = steps[stepCount - 1];
  }

  // get owner credentials
  public getOwnerCredentials(): OwnerCredentials {
    return this.ownerCredentials;
  }
  // set owner credentials
  public setOwnerCredentials(ownerCredentials: OwnerCredentials) {
    this.ownerCredentials = ownerCredentials;
  }

  // get the land id
  public getLandID(): string {
    return this.landID;
  }
  // set the land id
  public setLandID(landID: string): void {
    this.landID = landID;
  }

  // get the land block
  public getLandBlock(): LandBlock {
    return this.landBlock;
  }
  // set the land block
  public setLandBlock(landBlock: LandBlock): void {
    this.landBlock = landBlock;
  }

  // get the owner nic
  public getOwnerNIC(): NIC {
    return this.ownerNIC;
  }
  // set the owner nic
  public setOwnerNIC(ownerNIC: NIC): void {
    this.ownerNIC = ownerNIC;
  }

  // get the land deed
  public getLandDeed(): Deed {
    return this.landDeed;
  }
  // set the land deed
  public setLandDeed(landDeed: Deed): void {
    this.landDeed = landDeed;
  }

  // get the land plan
  public getLandPlan(): Plan {
    return this.landPlan;
  }
  // set the land plan
  public setLandPlan(landPlan: Plan): void {
    this.landPlan = landPlan;
  }

  // get the buyer nic
  public getBuyerNIC(): NIC {
    return this.buyerNIC;
  }
  // set the buyer nic
  public setBuyerNIC(buyerNIC: NIC): void {
    this.buyerNIC = buyerNIC;
  }

  // get the land id from mapper table
  public getLandIdFromMapper(ownerCredentials: OwnerCredentials) {
    return this.httpService.realizarHttpPost('/api/landCredentials', ownerCredentials)
  }

  // get the land block information from the block chain
  public getLandBlockInfo(landID: string) {
    return this.httpService.realizarHttpGet('/bc/land/queryLand/' + landID);
  }

  // get all land blocks information from the block chain
  public getAllLandBlocksInfo() {
    return this.httpService.realizarHttpGet('/bc/land/queryAllLands/');
  }

  // get the owner nic from nic table
  public getOwnerNicFromDB(ownerNIC: NIC) {
    return this.httpService.realizarHttpPost('/api/getNic', ownerNIC);
  }

  // get the land deed from deed table
  public getLandDeedFromDB(landDeed: Deed) {
    return this.httpService.realizarHttpPost('/api/getDeed', landDeed);
  }

  // get the land plan from plan table
  public getLandPlanFromDB(landPlan: Plan) {
    return this.httpService.realizarHttpPost('/api/getPlan', landPlan);
  }

  // change notary vote in the block chain
  public changeNotaryVote(landID: string, vote: number, newOwner: string) {
    return this.httpService.realizarHttpPost('/bc/land/changeNotaryVote/', 
    { 
      id: landID, 
      vote: vote,
      newOwner: newOwner
    });
  }

  // get history for land from the block chain
  public getHistoryForLand(landID: string) {
    return this.httpService.realizarHttpGet('/bc/land/getHistoryForLand/' + landID);
  }
  
}

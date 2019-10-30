import * as express from 'express';
import { 
    LandController_init_post,
    LandController_queryLand_get,
    LandController_queryAllLands_get,
    LandController_createLand_post,
    LandController_changeLandOwner_post,
    LandController_getHistoryForLand_get,
    LandController_changeSurveyorVote_post,
    LandController_changeNotaryVote_post,
    LandController_changeCurrentOwnerVote_post } from './controllers'
export default express.Router()
.post('/land/init', LandController_init_post)
.get('/land/queryLand/:id', LandController_queryLand_get)
.get('/land/queryAllLands', LandController_queryAllLands_get)
.post('/land/createLand', LandController_createLand_post)
.post('/land/changeLandOwner', LandController_changeLandOwner_post)
.get('/land/getHistoryForLand/:id', LandController_getHistoryForLand_get)
.post('/land/changeSurveyorVote', LandController_changeSurveyorVote_post)
.post('/land/changeNotaryVote', LandController_changeNotaryVote_post)
.post('/land/changeCurrentOwnerVote', LandController_changeCurrentOwnerVote_post)

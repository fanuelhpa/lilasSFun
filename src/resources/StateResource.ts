import {Request, Response} from 'express';
import {StateService} from '../services/StateService'

export class StateResource{
    constructor(private readonly stateService: StateService){}

    public createStates = async (req: Request, res: Response) => {

        let {states} = req.body;

        let statesCreated = await this.stateService.createStates(states);

        res.json({statesCreated});
    }
}
import { Router } from 'express';
import { WarriorRecord } from '../records/warrior.record';
import { Arena } from '../libs/arena';
import { ValidationError } from '../utils/errors';

export const fightRouter = Router();

fightRouter
    .get('/', async (req, res) => {
        const warriorsList = await WarriorRecord.listAll();

        res.status(201).json(warriorsList)
    })
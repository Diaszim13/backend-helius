const {Machine} = require('../models/Machine.model');

export const createMachine = (req: any,res: any) => {
    if(req.body.machine)
    {
        Machine.create(req.body.machine).then((maq: any) => {
            console.log(maq);
            res(maq);
        });
    }
};

export const findAllMachine = () => Machine.findAll();


export const findById = (id: string) => Machine.findById(id);

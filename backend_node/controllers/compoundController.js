const db = require("../models");
const Compound = db.compound;

// Add a compound to the database

const addCompound = async (req,res) => {
    try {
        const compound = {...req.body};
        console.log(compound)

        if(!compound.id){
            throw new Error('Compound Id is required!');
        }
        if(!compound.compoundName){
            throw new Error('Compound Name is required!');
        }
        if(!compound.dateModified){
            compound.dateModified = new Date();
        }

        const result = await Compound.create(compound);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({message:error.message || "Error occured while adding compound!"});
    }
};

// Get all compounds with pagination

const getAllCompounds = async (req, res) =>{
    try {
        const page = req.query.page ? +req.query.page : 1;
        const size = req.query.size ? +req.query.size : 10;

        const condition = {
            limit: size,
            offset: (page-1)*size
        }
        const result = await Compound.findAndCountAll(condition);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({message:error.message || "Error occured while fetching all compounds!."});
    }
};

// Get a compound with specific id (can be implemented in search button)

const getCompoundById = async (req, res) =>{
    try {
        const id = req.params.id;
        if(!id){
            throw new Error("Id is required!");
        }

        const result = await Compound.findByPk(id);
        if (result) {
            res.send(result);
        } else {
            res.status(404).send({message: `Compound not found with id=${id}.`});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message || "Error occured while fetching a compound!"});
    }
};

// Update compound details for specific id

const updateCompound = async (req, res) =>{
    try {
        const id = req.params.id;
        if(!id){
            throw new Error("Id is required!");
        }

        const updatedCompound = {...req.body};
        updatedCompound.dateModified = new Date();
        const condition = {
            where: {id}
        }
        const result = await Compound.update(updatedCompound, condition);
        if (result[0]>0) {
            res.send({message: "Compound was updated successfully!"});
        } else {
            res.status(404).send({message: `No compound found!`});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message || "Error while updating compound!"});
    }
};

// Delete compound with specific id 

const deleteCompound = async (req, res) =>{
    try {
        const id = req.params.id;
        if(!id){
            throw new Error("Id is required!");
        }

        const condition = {
            where: {id}
        }
        const result = await Compound.destroy(condition);
        if (result>0) {
            res.send({message: "Compound deleted successfully!"});
        } else {
            res.status(404).send({message: "No compound found!"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({message: error.message || "Error while deleting compound"});
    }
};



module.exports={addCompound, getAllCompounds, getCompoundById, updateCompound, deleteCompound};
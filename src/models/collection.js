'use strict';

class Collection{
  constructor(model){
    this.model = model;
  }

  // CRUD the sequelize functionality lives here
  async create(data){
    try{
      let newRecord = await this.model.create(data);
      return newRecord;

    }catch(e){
      console.log('we have a model create error' .e);
      return e;
    }
  }

  async read(id=null){
    try{

      if(id){
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      }else{
        const records = await this.model.findAll();
        return records;
      }

    }catch(e){
      console.log('we have a model read error' .e);
      return e;
    }
  }

  async update(id, data){
    try{
      let recordToUpdate = await this.model.findByPk(id);
      let updatedRecord = await recordToUpdate.update(data);
      return updatedRecord;

    }catch(e){
      console.log('we have a model update error' .e);
      return e;
    }
  }

  async delete(id){
    try{
      let deletedRecord = await this.model.destroy({where: {id: id}});
      return deletedRecord;

    }catch(e){
      console.log('we have a model delete error' .e);
      return e;
    }
  }







}

module.exports = Collection;

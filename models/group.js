var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupsSchema = new Schema({
  
    groupName:{type: String, 
              required: true,
              unique: true},
    
    description: {type: String},

    location: {type: String},             
    
    meeting: {type: String},   
                
    private: {type: Boolean},

    adminID: {type: String},
    
    userCreated: {type: Date, default: Date.now}, 

    groupMembers: [{type: String}]
    
  });

// Create the model from above schema
var Groups = mongoose.model("groups", groupsSchema);

// Export
module.exports = Groups;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupsSchema = new Schema({
  
    groupName:{type: String, 
              required: true},

    adminID: {type: String},            
    
    meeting: {
              name: {type: String},                            
              Time: {type: String},
              location: {
                        state: String, 
                        city: String,
                        address: String,
                        zip: String},            
              },   
                
    private: {type: Boolean},
    
    userCreated: {type: Date, default: Date.now}
    
  });

// Create the model from above schema
var Groups = mongoose.model("groups", groupsSchema);

// Export
module.exports = Groups;
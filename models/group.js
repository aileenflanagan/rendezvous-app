var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupsSchema = new Schema({
  
    groupName:{type: String, 
              required: true,
              unique: true},

    adminID: {type: String},            
    
    meeting: {
              name: {type: String},                            
              time: {type: String},
              date: {type: String},

              location: {
                        state: {type: String}, 
                        city: {type: String},
                        address: {type: String},
                        zip: {type: String}
                        }            
              },   
                
    private: {type: Boolean},
    
    userCreated: {type: Date, default: Date.now}
    
  });

// Create the model from above schema
var Groups = mongoose.model("groups", groupsSchema);

// Export
module.exports = Groups;
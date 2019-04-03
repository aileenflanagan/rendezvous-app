var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupsSchema = new Schema({
  
  groupName: {type: String, required: true},

  adminID: {type: String, required: true},
  
  meeting: {
        name: {type: String, 
               required: true},
        Time: {type: Date},
        address: {
              state: String, 
              city: String,
              street: String,
              housenumber: String},                
     },   
 
  private: {type: Boolean, required: true},
  
  userCreated: {type: Date, default: Date.now}
  
});

// Create the model from above schema
var Groups = mongoose.model("groups", groupsSchema);

// Export
module.exports = Groups;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupSchema = new Schema({
  
  groupName: { 
    type: String, 
    required: true 
    },

  adminID: { 
    type: String, 
    required: true 
    },
  
  meeting: {
        name: String, 
        Time: {    
            type: Date},
        address: {
              state: String, 
              city: String,
              street: String,
              housenumber: String},                
     },   
 
  private: {
    type: Boolean 
    },
  
  userCreated: {
    type: Date,
    default: Date.now
  },

});

// Create the model from above schema
var group = mongoose.model("group", groupSchema);

// Export
module.exports = group;
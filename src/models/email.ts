import  {Schema ,model, models} from "mongoose";

const emailSchema = new Schema({
    email:{
        type:String,
        unique: [true,"Email already exist"],
        required : [true,'Email is required.'],
    }
});

const Email = models.Email ||  model('Email',emailSchema);
export default Email;
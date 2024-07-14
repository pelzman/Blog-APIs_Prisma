import * as Joi from "joi"
import { IUserAttribute } from "../types/UserType"; 
import { IPostAttribute } from "../types/PostType";
import PasswordComplexity  from "joi-password-complexity"

const complexityOptions = {
    min: 5,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,   
  };

 class Validate {

    async validateUser(user:IUserAttribute){
      const validated = Joi.object({
        firstname: Joi.string().min(5).max(30),
        lastname: Joi.string().min(5).max(30),
        email:Joi.string().required().email().description("email is required"),
        password: PasswordComplexity(complexityOptions).description("require atleast 5 characters, one lowercase, one uppercase, one number, and one symbol"),      
        
      })
      return validated.validate(user)
    }


    async validateLogin(user:IUserAttribute){
        const validated = Joi.object({          
          email:Joi.string().required().email().description("email is required"),
          password: PasswordComplexity(complexityOptions).description("require atleast 5 characters, one lowercase, one uppercase, one number, and one symbol"),
      
        })
        return validated.validate(user)
      }
      async validatePost(post:IPostAttribute){
        const validated = Joi.object({          
          title:Joi.string().required().description("email is required"),         
      
        })
        return validated.validate(post)
      }
 }
 export default Validate
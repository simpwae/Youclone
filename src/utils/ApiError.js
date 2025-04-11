// This class is used to handle errors in the API
// It extends the built-in Error class and adds additional properties
// such as statusCode, success, errors, and stack trace
// The constructor takes in these parameters and sets them accordingly
// It also uses the super() method to call the parent class constructor
// and pass a new message to the parent class
class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack="",
    ){
        //we use Super to override the constructor of the Error class
        //and pass a new message to the parent class
        super(message);
        this.statusCode = statusCode;
        this.data=null
        this.message = message;
        this.success=false;
        this.errors = errors;
        if (stack) {
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);

        }
    }
  
}

export  {ApiError};
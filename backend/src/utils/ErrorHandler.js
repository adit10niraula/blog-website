class ApiError extends Error {
    constructor(statuscode=400, message="something went wrong", stack){
        super(message)
        this.statuscode = statuscode

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}
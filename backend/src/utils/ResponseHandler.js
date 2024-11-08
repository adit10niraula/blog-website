
class ApiResponse {
    constructor(statuscode = 200, data= {}, message="success"){
        this.statuscode = statuscode
        this.data = data
        this.message = message
        this.success = true
    }
}


export {ApiResponse}
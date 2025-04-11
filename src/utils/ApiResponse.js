
// This class is used to create a standard response object for API responses
// It contains properties such as statusCode, data, message, and success
// The constructor takes in these parameters and sets them accordingly
class ApiResponse{
    constructor(statusCode,data,message="Success")
    {
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        this.success=statusCode<400;
    }
}
export {ApiResponse};
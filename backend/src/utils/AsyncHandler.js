const AsyncHandler = (fun)=> async(req, res, next)=>{

    try {
        await fun(req, res, next)
        
    } catch (error) {
        next(error)
    }
}


export {AsyncHandler}
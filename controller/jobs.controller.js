const { createJobsService } = require("../services/jobs.services")


exports.createJobs=async (req, res, next) => {
    try {
      //create method
      const result=await createJobsService(req.body)
  
      res.status(200).json({
        stauts: "success",
        massage: "successfully create a Jobs",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
    }  
  }
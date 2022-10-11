const { createhiringManagerService, getHiringManagerService } = require("../services/hiringManager.services")

exports.createHiringManager=async (req, res, next) => {
    try {
      //create method
      const result=await createhiringManagerService(req.body)
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

  exports.getHiringManager=async (req, res, next) => {
    try {
      const manager=await getHiringManagerService();
      res.status(200).json({
        stauts: "success",
        massage: "successfully get data for Hiring Manager",
        data: manager
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
    }
  }
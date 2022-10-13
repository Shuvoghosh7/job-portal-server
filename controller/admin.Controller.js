const { getCandidateService, getCandidateByIdService, getManagerService } = require("../services/Admin.Service");

exports.getCandidate=async (req, res, next) => {
    try {
      const manager=await getCandidateService();
      res.status(200).json({
        stauts: "success",
        massage: "successfully get data for all Candidate",
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

exports.getCandidateId=async(req,res)=>{
    const {id}=req.params;
    try {
      //create method
      const job=await getCandidateByIdService(id);
      if(!job){
        return res.status(400).json({
            stauts:"fail",
            error : "Could not finds a Job with this id"
          })
      }
      res.status(200).json({
        stauts: "success",
        massage: "successfully get job this ID",
        data: job
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Job not find this ID",
        error : error.message
      })
    }
}

exports.getManager=async (req, res, next) => {
    try {
      const manager=await getManagerService();
      res.status(200).json({
        stauts: "success",
        massage: "successfully get data for all Candidate",
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
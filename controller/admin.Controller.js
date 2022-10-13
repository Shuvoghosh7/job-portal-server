const { getCandidateService } = require("../services/candidate.Service");

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
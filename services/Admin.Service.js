const Candidate = require("../models/candidate");
const HiringManager = require("../models/hiringManager");


exports.getCandidateService = async () => {
    const jobs = await Candidate.find({})
    return jobs;
}
exports.getCandidateByIdService = async (id) => {
    const jobs = await Candidate.findOne({_id:id}).populate("applyFor.id")
    return jobs;
}

exports.getManagerService = async () => {
    const jobs = await HiringManager.find({})
    return jobs;
}
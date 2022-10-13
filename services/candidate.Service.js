const Candidate = require("../models/candidate");


exports.getCandidateService = async () => {
    const jobs = await Candidate.find({})
    return jobs;
}
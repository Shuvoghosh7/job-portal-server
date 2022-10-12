const Jobs = require("../models/jobs");

exports.getJobsService = async (filters,queries) => {
    const jobs = await Jobs.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.sortBy)
    .select(queries.fields)
    .populate("hiringManager.id")
    return jobs;
}

exports.getJobByIdService = async (id) => {
    const job = await Jobs.findOne({_id:id})
    .populate("hiringManager.id")
    return job;
}
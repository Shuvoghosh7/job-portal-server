const Jobs = require("../models/jobs");




exports.createJobsService = async (data) => {
    const result = await Jobs.create(data)
    return result;
}
const HiringManager = require("../models/hiringManager");



exports.createJobsService = async (data) => {
    const result = await HiringManager.create(data)
    return result;
}
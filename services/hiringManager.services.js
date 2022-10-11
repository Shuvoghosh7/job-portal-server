const HiringManager = require("../models/hiringManager");


exports.createhiringManagerService = async (data) => {
    const result = await HiringManager.create(data)
    return result;
}
exports.getHiringManagerService = async () => {
    const brands = await HiringManager.find({})
    return brands;
}
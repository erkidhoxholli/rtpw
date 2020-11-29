const getPaginatedModelData = require('./paginate').getPaginatedModelData

async function allJobs(parent, {page, pageSize}, {models}) {
    return getPaginatedModelData(models.Job, page, pageSize)
}

module.exports = {
    allJobs,
}

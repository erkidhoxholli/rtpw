const getPaginatedModelData = require('./paginate').getPaginatedModelData

async function allJobs(parent, {page, pageSize}, {models}) {
    return getPaginatedModelData(models.Job, page, pageSize)
}

async function job(parent, {id}, {models}) {
    return await models.Job.findOne({
        where: {
            id
        }
    })
}

module.exports = {
    allJobs,
    job
}

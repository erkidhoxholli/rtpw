function paginate(page, pageSize)
{
    const offset = page * pageSize;
    const limit = offset + pageSize;

    return {
        offset,
        limit
    };
}

function getPageInfo(page, pageSize, itemCount){
    const pageCount = parseInt(itemCount / pageSize)

    return {
        currentPage: page,
        perPage: pageSize,
        itemCount,
        pageCount,
        hasPreviousPage: page > 0 && page <= pageCount,
        hasNextPage: itemCount === pageSize
    }
}


async function getPaginatedModelData(model, page = 0, pageSize = 10) {
        const withPagination = paginate(page, pageSize)
        const results = await model.findAll(withPagination)
        const itemCount = await model.count()

        return {
            pageInfo: getPageInfo(page, pageSize, itemCount),
            results
        };
}
module.exports = {
    getPaginatedModelData
}
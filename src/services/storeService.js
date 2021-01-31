import { httpService } from './httpService'

export const storeService = {
    query,
    getById
}

async function query(filterBy, filterTxt) {
    var filter = getFilter(filterBy)
    var queryStr = (!filterTxt) ? '' : `?txt=${filterTxt}`
    try { return await httpService.get(`stores${queryStr}`) }
    catch (err) { console.log(err) }
}

async function getFilter(filterBy) {
    try { return await httpService.get(filterBy) }
    catch (err) { console.log(err) }
}

function getById(storeId) {
    return httpService.get(`stores/${storeId}`)
}
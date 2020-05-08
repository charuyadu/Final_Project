
const health = [];

const healthLog = [];

   function get() {
    return health;
    }

    function add(health) {
        health.push({health});
        return true;
    }

    function deleteHealth(userId) {
        const data = health.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        let index = health.length - 1;
        health = data.list.slice(index, 1);
    }

    function getUserData(userId) {
        const data = health.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        return healthLog.push({ Name: users.Name, Log: data })
    }

module.exports = {
    health, healthLog, get, add, deleteHealth, getUserData
}

const water = [];
let count = 0;

const waterLog = [{ Name: 'Charu', Log: ['10', '15', '12'] }];

   function get() {
    return water;
    }

    function add(water) {
        water.push({water});
        count ++;
        return count;
    }

    function deleteWater(userId) {
        const data = water.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        let index = water.length - 1;
        water = data.list.slice(index, 1);
    }

    function getUserData(userId) {
        const data = water.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        return waterLog.push({ Name: users.Name, Log: data })
    }

module.exports = {
    water, waterLog, get, add, deleteWater, getUserData
}
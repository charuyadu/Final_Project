
const food = [];

const foodLog = [];

   function get() {
    return food;
    }

    function add(food) {
        food.push({food});
        return true;
    }

    function deleteFood(userId) {
        const data = food.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        let index = food.length - 1;
        food = data.list.slice(index, 1);
    }

    function getUserData(userId) {
        const data = food.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        return foodLog.push({ Name: users.Name, Log: data })
    }

module.exports = {
    food, foodLog, get, add, deleteFood, getUserData
}
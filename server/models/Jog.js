
const jog = [];

const jogLog = [];

   function get() {
    return jog;
    }

    function add(jog) {
        jog.push({jog});
        return true;
    }

    function deleteJog(userId) {
        const data = jog.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        let index = jog.length - 1;
        jog = data.list.slice(index, 1);
    }

    function getUserData(userId) {
        const data = jog.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        return jogLog.push({ Name: users.Name, Log: data })
    }

module.exports = {
    jog, jogLog, get, add, deleteJog, getUserData
}
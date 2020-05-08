
const run = [];

const runLog = [];

   function get() {
    return run;
    }

    function add(run) {
        run.push({run});
        return true;
    }

    function deleteRun(userId) {
        const data = run.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        let index = run.length - 1;
        run = data.list.slice(index, 1);
    }

    function getUserData(userId) {
        const data = run.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        return runLog.push({ Name: users.Name, Log: data })
    }

module.exports = {
    run, runLog, get, add, deleteRun, getUserData
}
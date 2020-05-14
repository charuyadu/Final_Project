
const exercise = ['34','15'];

const exerciseLog = [ { Name: 'Charu', Log: '14'}];

   function get() {
    return exercise;
    }

    function add(exercise) {
        exercise.push({exercise});
        return true;
    }

    function deleteExercise(userId) {
        const data = exercise.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        let index = exercise.length - 1;
        exercise = data.list.slice(index, 1);
    }

    function getUserData(userId) {
        const data = exercise.find(x => x.userId == userId);
        if(!data) throw Error('Data not available');

        return exerciseLog.push({ Name: users.Name, Log: data })
    }

    function getValues(enter){
        const result = exercise.find(x => x.enter == enter);
        return result;
    }

module.exports = {
    exercise, exerciseLog, get, add, deleteExercise, getUserData, getValues
}
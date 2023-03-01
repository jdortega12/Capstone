const routes = require('./routes')

test('Testing Get Students', function(){
    let students = routes.get()
});

test('Testing Create Student', function(){
    let student = {name: 'Jaymin', username: 'Jaymin12', password: '123', class_year: 2023, level: 1}

});

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
daysOfWeek.shift();
daysOfWeek.pop();
console.log(daysOfWeek); // ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']

daysOfWeek.push('Sat', 'Sun');
console.log(daysOfWeek); // ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

// 1) task

var resume = [{
    name: "dinesh",
    email: "xyz@gmail.com",
    mobile: 123456789,
    qualification: {
        school: {
            class_X: "avichi Higher secondary school",
            class_XII: "avichi Higher secondary school"
        },
        college: {
            Bsc: "st joseph college",
            Msc: "SRM university"
        }
    },
    computerSkills: {
        programmingLanguage: ['c', 'java', 'python'],
        Frontend: ['HTML', 'CSS', 'Javascript']
    },
    languageKnown: ['tamil', 'english', 'telugu'],
    personalProfile: {
        gender: 'male',
        nationality: 'indian',
        religion: 'hindu',
        martialStatus: 'single',
        dateOfBirth: 28 - 09 - 1997,
        address: 'chennai.........'
    }
}]


==========================================================================================
//  2) task
    
 var obj1 = {
 name: 'person1',
 address: 'chennai'
}
var obj2 = {
    address: 'chennai',
    name: 'person1'
}

var same = true;
if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
        if (obj1[key] == obj2[key]) {
            continue;
        } else {
            same = false;
            break;
        }
    }
} else {
    same = false;
}
console.log("equal " + same);

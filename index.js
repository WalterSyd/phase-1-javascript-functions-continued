// code your solution here
function saturdayFun(defaultActivity = 'roller-skate'){
return `This Saturday, I want to ${defaultActivity}!`;
}

function mondayWork(activity1 = 'go to the office'){
    return `This Monday, I will ${activity1}.`;
}

function wrapAdjective(wrapper = '*'){
return function(adjective = "a hard worker"){
    return `You are ${wrapper}${adjective}${wrapper}!`;
};
}
function wrapAdjective(wrapper = "||"){
    return function(adjective = "a dedicated programmer"){
    return  `You are ${wrapper}${adjective}${wrapper}!`; 
    };
}

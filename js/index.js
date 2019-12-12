function $(parameter) {
    if(parameter[0] === '.') {
        parameter = parameter.slice(1);
        let getItem = document.getElementsByClassName(parameter);
        return getItem;
    }
    else if (parameter[0] === '#') {
        parameter = parameter.slice(1);
        let getItem = document.getElementById(parameter);
        return getItem;
    }
        
   
}

//get time
function getTime() {
    let time = new Date();
    let localDate = time.toLocaleDateString().replace(/\//g,"-");
    let day = time.getDay();
    switch(day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    
    let result = [localDate,day];
    return result;
}

//setting time
function settingTime() {
    let time = getTime();
    let dayShow = $("#getDay");
    let dateShow = $("#getDate");
    dateShow.innerHTML = time[0];   
    dayShow.innerHTML = time[1];        
}

function todoAdded() {  
    let input = $("#input-todo"); 
    if (input.val == "") {
        alert("hi")
    }
    
    input.oninput = function () {
        let btn = $(".btn-add");
        btn[0].className = "btn-add btn-active";
        
    }
    input.ini
    
}

settingTime();
todoAdded();




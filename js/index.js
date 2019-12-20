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

$("#btn-add").onclick = function() {
    let msg = $("#input-todo").value;
    let childLi = document.createElement("li");
    let childSpan = document.createElement("span");
    let childSpan1 = document.createElement("span");
    let childSpan2 = document.createElement("span");
    let del_icon = document.createElement("i");
    let list = $(".todo-list")[0];
    let list_length = list.getElementsByTagName("li").length;
    let itemId = "item" + list_length;
    childLi.setAttribute("id",itemId);
    $(".status-busy")[0].innerText = "You have " + (list_length + 1) + " pending items";
    childSpan1.className = "todo-text";
    childSpan2.className = "delete";
    childSpan2.setAttribute("id",itemId + "-del");
    childSpan1.innerHTML = msg;
    del_icon.className = "icon-bin2";
    childSpan2.appendChild(del_icon);
    childLi.appendChild(childSpan);                     
    childLi.appendChild(childSpan1);    
    childLi.appendChild(childSpan2);   
    $(".todo-list")[0].appendChild(childLi);
}






settingTime();




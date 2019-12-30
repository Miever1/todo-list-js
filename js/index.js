//getElement packaging
function $(parameter) {
    if (parameter[0] === '.') {
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
    let localDate = time.toLocaleDateString().replace(/\//g, "-");
    let day = time.getDay();
    switch (day) {
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
    let result = [localDate, day];
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

//todolist added
let idNum = 0;
$("#btn-add").onclick = function () {
    $(".status-free")[0].style.display = "none";
    let msg = $("#input-todo").value;
    let childLi = document.createElement("li");
    let choiceSpan = document.createElement("input");
    let choiceLable = document.createElement("label");
    let textSpan = document.createElement("span");
    let deleteSpan = document.createElement("span");
    let del_icon = document.createElement("i");
    let itemId = "item" + idNum;
    idNum++;
    childLi.setAttribute("id", itemId);
    choiceSpan.setAttribute("type", "checkbox");
    textSpan.className = "todo-text";
    deleteSpan.className = "delete";
    deleteSpan.setAttribute("id", itemId + "-del");
    choiceSpan.setAttribute("id", itemId + "_check");
    choiceLable.setAttribute("for", itemId + "_check");
    textSpan.innerHTML = msg;
    del_icon.className = "icon-bin2";
    deleteSpan.appendChild(del_icon);
    childLi.appendChild(choiceSpan);
    childLi.appendChild(choiceLable);
    childLi.appendChild(textSpan);
    childLi.appendChild(deleteSpan);
    $(".todo-list")[0].appendChild(childLi);
    $("#input-todo").value = "";
    //delete evevt listener
    deleteSpan.addEventListener('click', function () {
        let deleteId = this.id.replace('-del', '');
        let delItem = $("#" + deleteId);
        delItem.parentNode.removeChild(delItem);
    })
    //archived item listener
    choiceSpan.addEventListener('click', function () {
        let archivedId = choiceSpan.parentNode.id;
        let archivedItem = $("#" + archivedId);
        if (choiceSpan.checked == true) {
            $("#archived").appendChild(archivedItem);
        }
        else {
            $("#todolist").appendChild(archivedItem);
        }
    })
}

function checkItem() {
    let list_length = $(".todo-list")[0].getElementsByTagName("li").length;
    let archivedItem_length = $("#archived").getElementsByTagName("li").length;
    let inputValue = $("#input-todo");
    //check whether the added input is active
    if (inputValue.value.length == 0) {
        $("#btn-add").disabled = true;
        $("#btn-add").className = "";
    }
    else {
        $("#btn-add").disabled = false;
        $("#btn-add").className = "active";
    }
    //check whether the todolist is blank
    if (list_length == 0) {
        $(".status-free")[0].style.display = "block";
        $(".status-busy")[0].style.display = "none";
    }
    else {
        $(".status-busy")[0].style.display = "block";
        $(".control-buttons")[0].style.display = "block";
        $(".status-busy")[0].innerText = "You have " + list_length + " pending items";
    }
    //check whether the archived list is blank
    if (archivedItem_length == 0) {
        $("#showComplete-btn").style.display = "none";
    }
    else {
        $("#showComplete-btn").style.display = "inline-block";
    }
    //calculate archivedRate
    let archivedRate = (archivedItem_length / (archivedItem_length + list_length)) * 100;
    archivedRate = archivedRate.toString().split(".")[0];
    if (archivedItem_length != 0) {
        $(".status")[0].innerHTML = "Completed tasks:" + archivedRate + "%";
    }
    else {
        $(".status")[0].innerHTML = "";
    }
}

//clear button function
$("#clear-btn").onclick = function () {
    $("#todolist").innerHTML = "";
    $("#archived").innerHTML = "";
    $(".status")[0].innerHTML = "";
    $(".control-buttons")[0].style.display = "none";
}

//showComplete button function
let showCompleteFlag = true;
$("#showComplete-btn").onclick = function () {
    if (showCompleteFlag == true) {
        this.innerHTML = "Hide Complete";
        $("#archived").style.display = "block";
        $(".status")[0].style.display = "block";
    }
    else {
        this.innerHTML = "Show Complete";
        $("#archived").style.display = "none";
        $(".status")[0].style.display = "none";
    }
    showCompleteFlag = -showCompleteFlag;
}

settingTime();
setInterval(() => {
    checkItem();
}, 100);


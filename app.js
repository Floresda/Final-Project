let inputEle = document.createElement("input");
inputEle.placeholder="Name...";

let inputElePass = document.createElement("input");
inputElePass.placeholder="Password...";
inputElePass.setAttribute("type","password");

let messageEle = document.createElement("h3");

let button =document.createElement("button");
button.innerHTML="Login";

button.addEventListener("click",function(){
    if(inputEle.value==="cool"&&inputElePass.value==="password"){
        document.body.innerHTML=""
        navigation();
        gradeView();
    }else{
        messageEle.innerHTML="incorrect information"
    }
})

document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);

const pages =[
    {
        page: "Grade View",
        navigate: gradeView
    },
    {
        page: "Add Grade",
        navigate: addGrade
    }
]

function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click",function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav= document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="blue";
    for(obj of pages){
        navButton(obj.page,nav,obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function gradeView() {
    let grade = document.createElement("div");
    grade.innerHTML = "Grade View";
    document.body.querySelector(".wrapper").appendChild(grade);
    renderList();
}

function addGrade() {
    let add = document.createElement("div");
    add.innerHTML="Add Grade";
    document.body.querySelector(".wrapper").appendChild(add);
    let listName = document.createElement("input");
    listName.placeholder="Student Name";
    let listGrade=document.createElement("input");
    listGrade.placeholder="Grade";
    let button1 = document.createElement("button");
    button1.innerHTML="Enter";
    button1.addEventListener("click", function(){
        if(parseInt(listGrade.value)<0 || parseInt(listGrade.value)<100){
           data.push(listName.value,listGrade.value);
           renderList();
           listName="";
           listGrade="";
       }else{
           messageEle.innerHTML="Enter a value between 0 and 100";
       }
    })
    let listEle = document.createElement("div");
    document.body.appendChild(listEle);
    document.body.appendChild(listName);
    document.body.appendChild(listGrade);
    document.body.appendChild(messageEle);
    document.body.appendChild(button1);
}

function renderList(){
    listEle.innerHTML="";
    for(let i=0; i<list.length;i++){
        let ele=document.createElement("div");
        ele.innerHTML=list[i];
        listEle.appendChild(ele);
    }
}




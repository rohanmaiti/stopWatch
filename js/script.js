
let lapBtn = document.querySelector('#lap');
let startBtn = document.querySelector('#start');
let minVal = document.querySelector('#min');
let secVal = document.querySelector('#sec');
let milisecVal = document.querySelector('#milisec');
let min = 0;
let sec = 0;
let milisec = 0;
let startReferanceVar;

let lapIndicator = 0;

let nameAttribute = document.getElementById('start').name;
document.querySelector('#start').addEventListener('click',timerTrigerd);
function timerTrigerd(){
    if(document.getElementById('start').name =='start'){
        lapIndicator = 1; 
    document.getElementById('start').innerHTML = 'Stop';
    document.getElementById('start').name ='stop';
    document.querySelector('.start').style = 'background-color:rgb(217, 0, 0);';
    document.querySelector('#start').style = 'background-color:rgb(244, 52, 52);';
    startReferanceVar = setInterval(()=>{
    milisecVal.innerHTML = milisec.toString().padStart(2,'0');
    secVal.innerHTML = sec.toString().padStart(2,'0');
    minVal.innerHTML = min.toString().padStart(2,'0');
    milisec++;
    if(milisec==60){
       milisec = 0;
       sec++;
    }
    if(sec==60)
    {
        sec=0;
        min++;
    }
    lapBtn.disabled = false;
    },16.6)
    
    }
    else if(document.getElementById('start').name =='stop'){
        lapIndicator = 0; 
    document.getElementById('start').name = 'reset';
    document.getElementById('start').innerHTML = 'Reset';
    document.querySelector('.start').style = 'background-color:rgb(38, 31, 236);';
    document.querySelector('#start').style = 'background-color:rgb(38, 31, 236);';
    clearInterval(startReferanceVar);  

    }
    else{
        lapIndicator = 0; 
        lapLimit = 1;
    document.getElementById('start').name = 'start';
    document.getElementById('start').innerHTML = 'Start';
    document.querySelector('.start').style = 'background-color:rgba(37, 174, 10, 0.856);';
    document.querySelector('#start').style = 'background-color:rgba(37, 174, 10, 0.856)';
    milisec = 0;
    sec = 0;
    min = 0;
    i = 1;
    milisecVal.innerHTML = milisec.toString().padStart(2,'0');
    secVal.innerHTML = sec.toString().padStart(2,'0');
    minVal.innerHTML = min.toString().padStart(2,'0');
    deleteLap();
     
}
}
let i = 1;
let lapLimit = 1;
document.querySelector('#lap').addEventListener('click',createList);
function createList(){
if(lapIndicator!=0 && lapLimit<=7){
// console.log('rohan');
let tr = document.createElement('tr');
document.querySelector('table tbody').append(tr);
let td = document.createElement('td');
td.setAttribute('class','bd')
td.innerHTML= `Lap ${i}`;
let td1 = document.createElement('td');
td1.setAttribute('class','bd xy')
td1.innerHTML = `${min.toString().padStart(2,'0')}`;
let td2 = document.createElement('td');
td2.setAttribute('class','bd xy')
td2.innerHTML = `:${sec.toString().padStart(2,'0')}`;
let td3 = document.createElement('td');
td3.setAttribute('class','bd xy')
td3.innerHTML = `:${milisec.toString().padStart(2,'0')}`;
tr.append(td,td1,td2,td3);
i++;
lapLimit++;
}
}

function deleteLap(){
let trArray = document.querySelectorAll('tr');
// console.log(trArray);
trArray.forEach(ele=>{
    ele.remove();
})

}

/*const date= new Date();
console.log(date);
const renderCalender = () =>{

    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();
    const viewMonthP1= date.getMonth()+1;
    document.querySelector('.year-month').textContent = viewYear+'년'+viewMonthP1+'월';

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth +1, 0);

    const PLDate= prevLast.getDate();
    const PLDay= prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    if (PLDay !== 6 ){
        for(let i =0; i<PLDay + 1; i++){
            prevDates.unshift(PLDate - i);
        }
    }
    for (let i = 1; i<7 - TLDay; i++){
        nextDates.push(i);
    }
    const dates = prevDates.concat(thisDates, nextDates); 

    Array.from(date).forEach(function(dates, i) {
        dates[i] = "<div class='date'>"+'${date}'+"</div>";//진짜 date 날짜나오도록 수정, div가 작동을 안하는것같음-> 반복문 돌면서 div가 하나씩 감싸줘야함
    })
    document.querySelector('.dates').innerHTML=dates.join('');
  
    const firstDateIndex = date.toString().indexOf(1);
    const lastDateIndex = date.toString().lastIndexOf(TLDate);
    
   Array.from(date).forEach(function(_d, i){
        i >= firstDateIndex && i <lastDateIndex +1 ? 'this' : 'other';
        date[i]='<div class="date"><span class="${condition}">${d}</span></div>';
    })
    const today= new Date();
        if (viewMonth===today.getMonth() && viewYear===today.getFullYear()){
            for(let dd of document.querySelectorAll('.this')){
                if(+dd.innerText===today.getDate()){
                    dd.classList.add('today');
                    break;
                }
            }
        }
}
renderCalender();

let d = new Date();
const prevMonth= () => {
    d.setDate(1);
    d.setMonth(d.getMonth()-1);
    renderCalender();
}
const nextMonth = ()=>{
    d.setDate(1);
    d.setMonth(d.getMonth()+1);
    renderCalender();
}
const goToday = ()=>{
    d=new Date();
    renderCalender();
}*/

function getDate(date) {
    return date.toLocaleDateString().replace(/\./g, "").split(" ");
  }
  
  const pad = (str) => str > 10 ? str : '0' + str;
  
  window.onload = function() {
    const ToDay = new Date();
    
    const nowMonth = ToDay.getMonth();
    
    const [y, m] = getDate(new Date(ToDay.setMonth(nowMonth)));
  
    const lastDay = getDate(new Date(y, m, 0)).pop() * 1;
    
    const day = new Date([y, m, 1].join("-")).getDay() * 1;
    
    const maxDay = Math.ceil((day + lastDay) / 7) * 7;
  
    let html = '';
  
    for (let i = 1; i <= maxDay; i++) {
      const diff = i - day;
      const d = diff <= lastDay && i > day ? diff : '';
      const tmpClass = !d ? 'background' : '';
  
      html += `<div class="dateSel1 ${tmpClass}">${d}</div>`;
    }
  
    document.querySelector('.dateSel1').innerHTML = html;
    document.querySelector('.year-month').innerText = `${y}년 ${pad(m)}월`;
  }

  

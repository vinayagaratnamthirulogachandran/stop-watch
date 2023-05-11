const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let hrs = min = sec = ms = 0,startTime;

btnStart.addEventListener('click', ()=>{

        btnStart.classList.add('start-active');
        btnStop.classList.remove('stop-active');

    startTime=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        updateDisplay();
    },10);
});

btnStop.addEventListener('click', ()=>{
    clearInterval(startTime);

    btnStart.classList.remove('start-active');
        btnStop.classList.add('stop-active');
});

btnReset.addEventListener('click', ()=>{
    hrs=min=sec=ms=0;
    updateDisplay();

    btnStart.classList.remove('start-active');
        btnStop.classList.remove('stop-active');
});

function updateDisplay(){
    thrs=hrs<10?'0'+hrs:hrs;
    tmin=min<10?'0'+min:min;
    tsec=sec<10?'0'+sec:sec;
    tms=ms<10?'0'+ms:ms;
    document.querySelector('.hrs').innerText=thrs;
    document.querySelector('.min').innerText=tmin;
    document.querySelector('.sec').innerText=tsec;
    document.querySelector('.ms').innerText=tms;
}

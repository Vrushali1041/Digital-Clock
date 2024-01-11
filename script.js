setInterval(() =>{
    // time indicator element
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    // digital time indicator
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    // dot time indicator
    let dotH = document.getElementById('.h_dot');
    let dotM = document.getElementById('.m_dot');
    let dotS = document.getElementById('.s_dot');

    // get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';

    // converting to 12 hours format
    if(h > 12){
        h = h - 12;
    }

    // adding 0 before single digit
    h = h < 10 ? '0' + h : h;
    m = m < m ? '0' + m : m;
    s = s < s ? '0' + s : s;

    // setting the time and lable
    hours.innerHTML = h + '<span style="font-size: 0.7rem; padding-right: 1.2rem ; margin-top:1rem; font-weight: 500; "> <br>Hours';
    minutes.innerHTML = m + '<span style="font-size: 0.7rem; padding-right: 1.2rem; margin-top:1rem; font-weight: 500;"> <br>Minutes';
    seconds.innerHTML = s + '<span style="font-size: 0.7rem; padding-right: 1.2rem ; margin-top:1rem; font-weight: 500; "> <br>Seconds';
    ampm.innerHTML = ap;

    // time circular indicator
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // dot time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);

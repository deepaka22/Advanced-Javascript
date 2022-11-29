
let timer = 10;

const time = document.getElementById('display');

setTimeout(()=>{
    time.innerHTML=timer--;

    setTimeout(()=>{
        time.innerHTML = timer--;

        setTimeout(()=>{
            time.innerHTML=timer--;
            setTimeout(() => {
                time.innerHTML=timer--;
                setTimeout(() => {
                    time.innerHTML=timer--; 
                    setTimeout(() => {
                        time.innerHTML=timer--;  
                        setTimeout(() => {
                            time.innerHTML=timer--; 
                            setTimeout(() => {
                                time.innerHTML=timer--;  
                                setTimeout(() => {
                                    time.innerHTML=timer--; 
                                    setTimeout(() => {
                                        time.innerHTML=timer--;
                                        setTimeout(() => {
                                            time.style.color = "Green";
                                            time.innerHTML= 'Happy Indepence Day';

                                        }, 1000);
                                    }, 1000); 
                                }, 1000);
                            }, 1000); 
                        }, 1000);
                    }, 1000);     
                }, 1000);  
            }, 1000);
        },1000);
    }, 1000);
},1000);

/********events , timeinterval ,timesetout***********/

// best expalained in https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener 

/*
 for example : here we have html like this...

     <div class="container">
        <p class = 'timer'>click here to download</p>
        <div class="btn">DOWNLOAD</div>
    </div>

    we have to provide a functioning download button , on clicking which the text in div.timer changes to 'downloading in ....(${count})' where count is the counter of 20 sec.
*/

// adding event for the clickable action of the button

const btn = document.querySelector('.btn');
const event1 = btn.addEventListener('click', (e)=>{                                                
    btn.setAttribute('style' , 'box-shadow : inset 1px 3px 9px 1px gray;');         // show button to be clicked
    setTimeout((e)=>{
        btn.setAttribute('style' , 'box-shadow : 1px 3px 9px 1px gray;');           // show button to be released
    },10);
    
});

// adding event for the counter  

btn.addEventListener('click', (e)=>{
    var count = 20 ;
    var time = setInterval((e)=>{
        document.querySelector('.timer').innerHTML = `downloading in ....(${count})`;
        count = count - 1;
        console.log(e)
        if (count == 0 ){
            clearTimeout(time);
            document.querySelector('.timer').innerHTML = `click here to download`;
        };

    },2000);
});




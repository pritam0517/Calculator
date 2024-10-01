let string="";
let button=document.querySelectorAll(".button");
let btn=document.querySelector(".on");


    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "OFF"){
            e.target.innerHTML="ON";
            btn.style.backgroundColor='green';
            Array.from(button).forEach((button)=>{
                button.addEventListener('click',(e)=>{
                        if(e.target.innerHTML == "="){
                            string=eval(string);
                            document.querySelector('input').value=string;
                        }
                        else if(e.target.innerHTML == "MRC"){
                            string="";
                            document.querySelector('input').value=string;
                        }
                        else{
                        string=string+e.target.innerHTML;
                        document.querySelector('input').value=string;
                        }
                })
            })
        }  
        else if(e.target.innerHTML == "ON"){
            e.target.innerHTML="OFF";
            btn.style.backgroundColor='red';

            Array.from(button).forEach((button)=>{
                button.addEventListener('click',(e)=>{
                            string="";
                            document.querySelector('input').value=string;

                })
            })

        }
    })



















    // Array.from(button).forEach((button)=>{
    //     button.addEventListener('click',(e)=>{
    //             if(e.target.innerHTML == "="){
    //                 string=eval(string);
    //                 document.querySelector('input').value=string;
    //             }
    //             else if(e.target.innerHTML == "MRC"){
    //                 string="";
    //                 document.querySelector('input').value=string;
    //             }
    //             else{
    //             string=string+e.target.innerHTML;
    //             document.querySelector('input').value=string;
    //             }
    //     })
    // })
var attack="#####\xa0\xa0#####\xa0\xa0#####\xa0\xa0#####\xa0\xa0#####\xa0\xa0#\xa0\xa0\xa0#\n\
#\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0#\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0#\n\
#####\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#####\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0###\n\
#\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0#\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0#\n\
#\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0\xa0\xa0#\xa0\xa0\xa0\xa0#\xa0\xa0\xa0#\xa0\xa0#####\xa0\xa0#\xa0\xa0\xa0#"
console.log(attack)

function tc(){
    var tcpag = window.open("t&c/tandc.html","","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=700");
    setTimeout(() => {
        tcpag.close();
    }, 100000);
}
function nakkal(){
    document.getElementById("emoj").innerHTML="😝"
}
function cool(){
    document.getElementById("emoj").innerHTML="😎"
}


function ttt(){
    var takatak = window.open("imgs/tt.jpeg","","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=700");
    setTimeout(() => {
        takatak.close();
    }, 20000);
}
function starterpack(){
    let today = new Date();
    let naal = today.getDay();
    let mani = today.getHours();
    let nimit = today.getMinutes();
    var author = window.prompt("Please Enter Your Authuser ID : ");
    switch(author){
    case "0":
        {
        if(naal == 0){
            alert("Sunday Funday");
        } 
        // 0 sunday
        // 1 monday
        // 2 tuesday
        // 3 wednesday
        // 4 thursday
        // 5 friday
        // 6 saturday
        else if(naal == 1){
            if(mani<9 || mani>15){
                alert("NO CLASS");
            }
            else if(mani==9){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==10){
                alert("Free Period");
            }
            else if(mani==11){
                alert("Maths Period - Open Zoom");
            }
            else if(mani==12){
                alert("Lunch Hour");
            }
            else if(mani==13){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==14 && nimit <30){
                alert("Free Period");
            }
            else if(mani==14 && nimit>=30){
                window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=0&hs=179","_blank");
            }
            else if(mani==15 && nimit<=30){
                window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=0&hs=179","_blank");
            }
            else{
                alert("Class Over");
            }
        }


        else if(naal == 2){
            if(mani<9 || mani>15){
                alert("NO CLASS");
            }
            else if(mani==9){
                alert("DOS/DIP")
            }
            else if(mani==10 && nimit<=40){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==11){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==12){
                alert("Lunch Hour");
            }
            else if(mani==13){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==14 && nimit <30){
                alert("Free Period");
            }
            else if(mani==14 && nimit>=30){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==15 && nimit<=30){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else{
                alert("Class Over");
            }

        }


        else if(naal == 3){
            if(mani<9 || mani>15){
                alert("NO CLASS");
            }
            else if(mani==9){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==10){
                alert("Free Period");

            }
            else if(mani==11){
                alert("DOS/DIP");
            }
            else if(mani==12){
                alert("Lunch Hour");
            }
            else if(mani==13){
                window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=0&hs=179","_blank");
            }
            else if(mani==14 && nimit <30){
                alert("Free Period");
            }
            else if(mani==14 && nimit>=30){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==15 && nimit<=30){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else{
                alert("Class Over");
            }

        }


        else if(naal == 4){
            if(mani<9 || mani>15){
                alert("NO CLASS");
            }
            else if(mani==9){
                window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=0&hs=179","_blank");
            }
            else if(mani==10 && nimit<=40){
                window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=0&hs=179","_blank");
            }
            else if(mani==10 && nimit>40){
                alert("Come By 11'o Clock ")
            }
            else if(mani==11){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==12){
                alert("Lunch Hour");
            }
            else if(mani==13){
                alert("Maths Period - Open Zoom");
            }
            else if(mani==14){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==15 && nimit<=30){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else{
                alert("Class Over");
            }

        }


        else if(naal == 5){
            if(mani<9 || mani>15){
                alert("NO CLASS");
            }
            else if(mani==9){
                alert("Maths Period - Open Zoom");
            }
            else if(mani==10 && nimit<=40){
                alert("Maths Period - Open Zoom");
            }
            else if(mani==10 && nimit>40){
                alert("Come By 11'o Clock ")
            }
            else if(mani==11){
                window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=0&hs=179","_blank");
            }
            else if(mani==12){
                alert("Lunch Hour");
            }
            else if(mani==13){
                alert("DOS/DIP");
            }
            else if(mani==14){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==15 && nimit<=30){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else{
                alert("Class Over");
            }
        }


        else if(naal == 6){
            if(mani<9 || mani>15){
                alert("NO CLASS");
            }
            else if(mani==9){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else if(mani==10){
                alert("Free Period")
            }
            else if(mani==11){
                window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=0&hs=179","_blank");
            }
            else if(mani==12){
                alert("Lunch Hour");
            }
            else if(mani==13){
                alert("VAC Hour Check Whatsapp for link");
            }
            else if(mani==14 && nimit<30){
                alert("VAC Hour Check Whatsapp for link");
            }
            else if(mani==14 && nimit>=30){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");    
            }
            else if(mani==15 && nimit<=30){
                window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=0&hs=179","_blank");
            }
            else{
                alert("Class Over");
            }
        }
        break;
        }
        case "1":
        {
            if(naal == 0){
                alert("Sunday Funday");
            } 
            // 0 sunday
            // 1 monday
            // 2 tuesday
            // 3 wednesday
            // 4 thursday
            // 5 friday
            // 6 saturday
            else if(naal == 1){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==10){
                    alert("Free Period");
                }
                else if(mani==11){
                    alert("Maths Period - Open Zoom");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==14 && nimit <30){
                    alert("Free Period");
                }
                else if(mani==14 && nimit>=30){
                    window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=1&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=1&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }
            }


            else if(naal == 2){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    alert("DOS/DIP")
                }
                else if(mani==10 && nimit<=40){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==11){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==14 && nimit <30){
                    alert("Free Period");
                }
                else if(mani==14 && nimit>=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }

            }


            else if(naal == 3){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==10){
                    alert("Free Period");

                }
                else if(mani==11){
                    alert("DOS/DIP");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=1&hs=179","_blank");
                }
                else if(mani==14 && nimit <30){
                    alert("Free Period");
                }
                else if(mani==14 && nimit>=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }

            }


            else if(naal == 4){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=1&hs=179","_blank");
                }
                else if(mani==10 && nimit<=40){
                    window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=1&hs=179","_blank");
                }
                else if(mani==10 && nimit>40){
                    alert("Come By 11'o Clock ")
                }
                else if(mani==11){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    alert("Maths Period - Open Zoom");
                }
                else if(mani==14){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }

            }


            else if(naal == 5){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    alert("Maths Period - Open Zoom");
                }
                else if(mani==10 && nimit<=40){
                    alert("Maths Period - Open Zoom");
                }
                else if(mani==10 && nimit>40){
                    alert("Come By 11'o Clock ")
                }
                else if(mani==11){
                    window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=1&hs=179","_blank");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    alert("DOS/DIP");
                }
                else if(mani==14){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }
            }


            else if(naal == 6){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else if(mani==10){
                    alert("Free Period")
                }
                else if(mani==11){
                    window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=1&hs=179","_blank");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    alert("VAC Hour Check Whatsapp for link");
                }
                else if(mani==14 && nimit<30){
                    alert("VAC Hour Check Whatsapp for link");
                }
                else if(mani==14 && nimit>=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");    
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=1&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }
            }
        break;
        }
        case "2":
        {
            if(naal == 0){
                alert("Sunday Funday");
            } 
            // 0 sunday
            // 1 monday
            // 2 tuesday
            // 3 wednesday
            // 4 thursday
            // 5 friday
            // 6 saturday
            else if(naal == 1){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==10){
                    alert("Free Period");
                }
                else if(mani==11){
                    alert("Maths Period - Open Zoom");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==14 && nimit <30){
                    alert("Free Period");
                }
                else if(mani==14 && nimit>=30){
                    window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=2&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=2&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }
            }


            else if(naal == 2){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    alert("DOS/DIP")
                }
                else if(mani==10 && nimit<=40){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==11){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==14 && nimit <30){
                    alert("Free Period");
                }
                else if(mani==14 && nimit>=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }

            }


            else if(naal == 3){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==10){
                    alert("Free Period");

                }
                else if(mani==11){
                    alert("DOS/DIP");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=2&hs=179","_blank");
                }
                else if(mani==14 && nimit <30){
                    alert("Free Period");
                }
                else if(mani==14 && nimit>=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }

            }


            else if(naal == 4){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=2&hs=179","_blank");
                }
                else if(mani==10 && nimit<=40){
                    window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=2&hs=179","_blank");
                }
                else if(mani==10 && nimit>40){
                    alert("Come By 11'o Clock ")
                }
                else if(mani==11){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    alert("Maths Period - Open Zoom");
                }
                else if(mani==14){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }

            }


            else if(naal == 5){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    alert("Maths Period - Open Zoom");
                }
                else if(mani==10 && nimit<=40){
                    alert("Maths Period - Open Zoom");
                }
                else if(mani==10 && nimit>40){
                    alert("Come By 11'o Clock ")
                }
                else if(mani==11){
                    window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=2&hs=179","_blank");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    alert("DOS/DIP");
                }
                else if(mani==14){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }
            }


            else if(naal == 6){
                if(mani<9 || mani>15){
                    alert("NO CLASS");
                }
                else if(mani==9){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else if(mani==10){
                    alert("Free Period")
                }
                else if(mani==11){
                    window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=2&hs=179","_blank");
                }
                else if(mani==12){
                    alert("Lunch Hour");
                }
                else if(mani==13){
                    alert("VAC Hour Check Whatsapp for link");
                }
                else if(mani==14 && nimit<30){
                    alert("VAC Hour Check Whatsapp for link");
                }
                else if(mani==14 && nimit>=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");    
                }
                else if(mani==15 && nimit<=30){
                    window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=2&hs=179","_blank");
                }
                else{
                    alert("Class Over");
                }
            }
        break;
        }
        case "3":
            {
                if(naal == 0){
                    alert("Sunday Funday");
                } 
                // 0 sunday
                // 1 monday
                // 2 tuesday
                // 3 wednesday
                // 4 thursday
                // 5 friday
                // 6 saturday
                else if(naal == 1){
                    if(mani<9 || mani>15){
                        alert("NO CLASS");
                    }
                    else if(mani==9){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==10){
                        alert("Free Period");
                    }
                    else if(mani==11){
                        alert("Maths Period - Open Zoom");
                    }
                    else if(mani==12){
                        alert("Lunch Hour");
                    }
                    else if(mani==13){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==14 && nimit <30){
                        alert("Free Period");
                    }
                    else if(mani==14 && nimit>=30){
                        window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=3&hs=179","_blank");
                    }
                    else if(mani==15 && nimit<=30){
                        window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=3&hs=179","_blank");
                    }
                    else{
                        alert("Class Over");
                    }
                }
    
    
                else if(naal == 2){
                    if(mani<9 || mani>15){
                        alert("NO CLASS");
                    }
                    else if(mani==9){
                        alert("DOS/DIP")
                    }
                    else if(mani==10 && nimit<=40){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==11){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==12){
                        alert("Lunch Hour");
                    }
                    else if(mani==13){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==14 && nimit <30){
                        alert("Free Period");
                    }
                    else if(mani==14 && nimit>=30){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==15 && nimit<=30){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else{
                        alert("Class Over");
                    }
    
                }
    
    
                else if(naal == 3){
                    if(mani<9 || mani>15){
                        alert("NO CLASS");
                    }
                    else if(mani==9){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==10){
                        alert("Free Period");
    
                    }
                    else if(mani==11){
                        alert("DOS/DIP");
                    }
                    else if(mani==12){
                        alert("Lunch Hour");
                    }
                    else if(mani==13){
                        window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=3&hs=179","_blank");
                    }
                    else if(mani==14 && nimit <30){
                        alert("Free Period");
                    }
                    else if(mani==14 && nimit>=30){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==15 && nimit<=30){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else{
                        alert("Class Over");
                    }
    
                }
    
    
                else if(naal == 4){
                    if(mani<9 || mani>15){
                        alert("NO CLASS");
                    }
                    else if(mani==9){
                        window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=3&hs=179","_blank");
                    }
                    else if(mani==10 && nimit<=40){
                        window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=3&hs=179","_blank");
                    }
                    else if(mani==10 && nimit>40){
                        alert("Come By 11'o Clock ")
                    }
                    else if(mani==11){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==12){
                        alert("Lunch Hour");
                    }
                    else if(mani==13){
                        alert("Maths Period - Open Zoom");
                    }
                    else if(mani==14){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==15 && nimit<=30){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else{
                        alert("Class Over");
                    }
    
                }
    
    
                else if(naal == 5){
                    if(mani<9 || mani>15){
                        alert("NO CLASS");
                    }
                    else if(mani==9){
                        alert("Maths Period - Open Zoom");
                    }
                    else if(mani==10 && nimit<=40){
                        alert("Maths Period - Open Zoom");
                    }
                    else if(mani==10 && nimit>40){
                        alert("Come By 11'o Clock ")
                    }
                    else if(mani==11){
                        window.open("https://meet.google.com/lookup/h7vvuxlrlt?authuser=3&hs=179","_blank");
                    }
                    else if(mani==12){
                        alert("Lunch Hour");
                    }
                    else if(mani==13){
                        alert("DOS/DIP");
                    }
                    else if(mani==14){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==15 && nimit<=30){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else{
                        alert("Class Over");
                    }
                }
    
    
                else if(naal == 6){
                    if(mani<9 || mani>15){
                        alert("NO CLASS");
                    }
                    else if(mani==9){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else if(mani==10){
                        alert("Free Period")
                    }
                    else if(mani==11){
                        window.open("https://meet.google.com/lookup/hkac4lmqfz?authuser=3&hs=179","_blank");
                    }
                    else if(mani==12){
                        alert("Lunch Hour");
                    }
                    else if(mani==13){
                        alert("VAC Hour Check Whatsapp for link");
                    }
                    else if(mani==14 && nimit<30){
                        alert("VAC Hour Check Whatsapp for link");
                    }
                    else if(mani==14 && nimit>=30){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");    
                    }
                    else if(mani==15 && nimit<=30){
                        window.open("https://meet.google.com/lookup/bsp7axlqk3?authuser=3&hs=179","_blank");
                    }
                    else{
                        alert("Class Over");
                    }
                }
            break;
            }
            default:
                alert("Please Enter a valid Authuser no. (If this alert shows up even if u enter ur correct authuser no contact Admin)");
    }
    }

function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
 }
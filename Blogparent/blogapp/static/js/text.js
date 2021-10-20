var typingBool = false; 
    var typingIdx=0; 

    var typingTxt = $(".typing-txt").text(); // html요소 가져오기 
    typingTxt=typingTxt.split(""); // 자르기 

    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true;  //true로 바꿔
       
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
     
     function typing(){ //함수
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼만 반복한다. 
         $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
        
       } 
     }  
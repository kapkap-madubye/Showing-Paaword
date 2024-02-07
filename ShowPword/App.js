document.addEventListener('DOMContentLoaded',function(){
    const password=document.getElementById('input');
    const btn=document.getElementById('btn');

    btn.addEventListener('click',function(){
        if(password.value.length==0){
            alert("please enter something!!")

        }
        else if(password.value.length<7){
            alert("Password must have at least 8 character")
        }
        
        else{
            const type=password.getAttribute('type') === 'password' ? 'text' :'password';
            password.setAttribute('type',type);
        }
       
    })
})
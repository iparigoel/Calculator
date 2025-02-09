let string = "";
let buttons = document.querySelectorAll('.button');
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let lastChar = string[string.length - 1];
        if(e.target.innerHTML === '=')
        {
            try{
                string = eval(string).toString();
                document.querySelector('input').value = string;
            }
            catch{
                document.querySelector('input').value = Error;
                string = "";
            }
        }
        else if(e.target.innerHTML === 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            if(!isNaN(e.target.value) || e.target.value === "."){
                string = string + e.target.innerHTML;
            }
            else if("+-*/".includes(e.target.value) && !"+-*/".includes(lastChar))
            {
                string = string + e.target.innerHTML;
            }
            console.log(e.target)
            
            document.querySelector('input').value = string;
        }
    })
})
let operator="";
let op1="";
let op2="";
function append(x)
{
    if(operator==""){
    op1+=x;
    document.getElementById('result').value=op1;
    }
    else{
        op2+=x;
        document.getElementById('result').value=op2;
    }
}

function operation(op)
{
    operator=op;
}

function output(){
    let result;
    switch(operator)
    {
        case '+':result=parseInt(op1)+parseInt(op2);
        break;
        case '-':result=parseInt(op1)-parseInt(op2);
        break;
        case '*':result=parseInt(op1)*parseInt(op2);
        break;
        case '/':result=parseInt(op1)/parseInt(op2);
        break;
    }
    document.getElementById('result').value=result;
}

function reset(){
    operator="";
    op1="";
    op2="";
    document.getElementById('result').value='';
}
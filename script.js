textField.document.designMode = "On";

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        execCommandArea(btn.attributes['data-command'].value, null)
    })
})

function execCommandArea(actionName,action){
    return textField.document.execCommand(actionName, false,action);
}
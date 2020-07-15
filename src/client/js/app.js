let main_display_result = document.getElementById('display-result');
function intialization(){
    main_display_result.style.display = "none";
}

function removeChilds(node){
    while(node.hasChildNodes()){
        node.removeChild(node.firstChild);
    }
}

export {intialization}
export { removeChilds }
export { main_display_result }
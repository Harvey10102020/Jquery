function cargarModal(id) {

    var getcontent = document.getElementById(id).innerHTML;


    var pushcontent = document.getElementById("ModalContent");


    pushcontent.innerHTML = getcontent;


}
// Botão C - clear
document.querySelector(#clear).addEventListener("Click", ()=>{
    document.querySelector("#display").value = " ";
    // no #display (ou visor) limpando o nýmero informado
})

// Botão -> backSpace

const backSpace = () =>{
    const backSpace = documento.querySelector("#display").value.slice(0, -1);
    // declarando constante num e tirando -1 da direita pra esquerda

    document.querySelector("#display").value = num;
    // igualando e atualizando num no #display (visor)
}
   

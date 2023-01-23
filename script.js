function contar(){
    let inicio =document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossivel Contar!"
        window.alert("[ERRO] Preenche todos os campos!")
    }else{
       res.innerHTML = "Contando:<br>"
       let i = Number(inicio.value)
       let j = Number(fim.value)
       let k = Number(passo.value)
       if(k == 0){
        window.alert("Passo invalido!!")
       }else{
            if(i<j){
                for(let c = i ; c<=j; c+=k){
                    res.innerHTML += `${c} \u{1F449}`
                }
                res.innerHTML += '\u{1F449}'
            }else{
                for(let c = i ; c>=j; c-=k){
                    res.innerHTML += `${c} \u{1F449}`
                }
               
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
}
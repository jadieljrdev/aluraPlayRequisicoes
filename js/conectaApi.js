const ENDPOINTAPI = "http://localhost:3000/videos"

async function listaVideos(){
    const conexao = await fetch(ENDPOINTAPI)
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function criaVideo(titulo, descricao,url,imagem){
    const conexao = await fetch(ENDPOINTAPI, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function buscaVideo(termoDeBuscar){
    const conexao  = await fetch(`http://localhost:3000/videos?q=${termoDeBuscar}`)
    const conexaoConvertida = await conexao.json()
    console.log(conexaoConvertida)
    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
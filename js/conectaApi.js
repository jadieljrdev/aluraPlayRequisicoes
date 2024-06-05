const ENDPOINTAPI = "http://localhost:3000/videos"

async function listaVideos(){
    const conexao = await fetch(ENDPOINTAPI)
    const conexaoConvertida = await conexao.json()
}

listaVideos()
"teste de conexão"
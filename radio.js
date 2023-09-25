
const musicas = [
    {
        nome: "Como Nossos Pais",
        artista: "Elis Regina",
        src: "radiomp3/Como Nossos Pais(MP3_160K).mp3",
    },
    {
        nome: "EVIL.",
        artista: "Melaine Martinez",
        src: "radiomp3/EVIL(MP3_160K).mp3",
    },
    {
        nome: "Foi Mal",
        artista: "Urias",
        src: "radiomp3/Foi Mal(MP3_160K).mp3",
    },
    {
        nome: "Giant Woman",
        artista: "Zach Callison",
        src: "radiomp3/Giant Woman (feat. Zach Callison)(MP3_160K).mp3",
    },
    {
        nome: "Light My Love",
        artista: "Greta Van Fleet",
        src: "radiomp3/Greta Van Fleet - Light My Love (Audio)(MP3_160K).mp3",
    },
    {
        nome: "Infinity Pools",
        artista: "The Technicolors",
        src: "radiomp3/Infinity Pools(MP3_160K).mp3",
    },
    {
        nome: "The Principal",
        artista: "Melaine Martinez",
        src: "radiomp3/The Principal(MP3_160K).mp3",
    },
    {
        nome: "Howl",
        artista: "The Technicolors",
        src: "radiomp3/The Technicolors - Howl (Official Music Video)(MP3_160K).mp3",
    },
    {
        nome: "URIAS - DANGER ( OFFICIAL VISUALIZER)(MP3_160K).mp3",
        artista: "Artista 9",
        src: "radiomp3/URIAS - DANGER ( OFFICIAL VISUALIZER)(MP3_160K).mp3",
    },
    {
        nome: "Wait a Minute",
        artista: "Willow",
        src: "radiomp3/Wait a Minute_(MP3_160K).mp3",
    },
];

let musicaAtualIndex = 0; 


const audio = document.getElementById("audio");
const nomeDaMusica = document.getElementById("nome-da-musica");
const nomeDoArtista = document.getElementById("nome-do-artista");

function atualizarInformacoesDaMusica() {
    const musicaAtual = musicas[musicaAtualIndex];
    nomeDaMusica.textContent = musicaAtual.nome;
    nomeDoArtista.textContent = musicaAtual.artista;
    audio.src = musicaAtual.src;
}


function tocarProximaMusica() {
    musicaAtualIndex = (musicaAtualIndex + 1) % musicas.length;
    atualizarInformacoesDaMusica();
    audio.play();
}

document.getElementById("next-button").addEventListener("click", tocarProximaMusica);


atualizarInformacoesDaMusica();

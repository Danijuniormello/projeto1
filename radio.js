
const musicas = [
    {
        nome: "Como Nossos Pais",
        artista: "Elis Regina",
        src: "radiomp3/Como Nossos Pais(MP3_160K).mp3",
    },
    {
        nome: "EVIL",
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
        nome: "URIAS",
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


atualizarInformacoesDaMusica();


function atualizarInformacoesDaMusica() {
    nomeDaMusica.textContent = musicas[musicaAtualIndex].nome;
    nomeDoArtista.textContent = musicas[musicaAtualIndex].artista;
    audio.src = musicas[musicaAtualIndex].src;
}


document.getElementById("next-button").addEventListener("click", tocarProximaMusica);


function tocarProximaMusica() {
    musicaAtualIndex = (musicaAtualIndex + 1) % musicas.length; 
    atualizarInformacoesDaMusica();
    audio.play();
}


document.getElementById("play-pause-button").addEventListener("click", togglePlayPause);

a
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        document.getElementById("play-pause-button").textContent = "Pausar";
    } else {
        audio.pause();
        document.getElementById("play-pause-button").textContent = "Play";
    }
}


document.getElementById("prev-button").addEventListener("click", tocarMusicaAnterior);

r
function tocarMusicaAnterior() {
    musicaAtualIndex = (musicaAtualIndex - 1 + musicas.length) % musicas.length; s
    atualizarInformacoesDaMusica();
    audio.play();
}

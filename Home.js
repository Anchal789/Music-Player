async function music() {
    let artistDivImage = document.getElementById("artistImageDiv");
    const topArtistApi = await fetch("https://api.napster.com/v2.2/artists/Art.28463069/similar?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4");
    const response = await topArtistApi.json();
    const artist = response.artists;
    for (let i = 0; i < artist.length; i++) {
        let anchor = document.createElement("div");
        let artistDiv = document.createElement("div");
        let artistImage = document.createElement("img");
        let artistName = document.createElement("h5");
        artistImage.setAttribute("src", `https://api.napster.com/imageserver/v2/artists/${artist[i].id}/images/356x237.jpg`);
        artistDiv.classList.add("artistDiv");
        artistDiv.classList.add(`${artist[i].name.split(" ")[0]}`);
        artistImage.classList.add("artistImage");
        artistImage.setAttribute("alt", `${artist[i].name}`);
        artistImage.classList.add(`${artist[i].name.split(" ")[0]}`);
        artistName.textContent = `${artist[i].name}`;
        artistName.classList.add(`${artist[i].name.split(" ")[0]}`);
        artistDiv.appendChild(artistImage);
        artistDiv.appendChild(artistName);
        anchor.classList.add(`${artist[i].name.split(" ")[0]}`);
        anchor.appendChild(artistDiv);
        artistDivImage.appendChild(anchor);
        console.log(artist[i].name);
    }
}

music();


async function tracks() {
    let albumDivImage = document.getElementById("albumsImageDiv");
    const toptracksApi = await fetch("https://api.napster.com/v2.0/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4");
    const data = await toptracksApi.json();
    const tracks = data.tracks;

    for (let i = 0; i < tracks.length; i++) {
        let anchor = document.createElement("a");
        let albumDiv = document.createElement("div");
        let albumImage = document.createElement("img");
        let h5Div = document.createElement("div")
        let albumsName = document.createElement("h5");
        let playlist = document.createElement("button");
        playlist.setAttribute("type","button");
        playlist.setAttribute("class","playListBtn");
        playlist.textContent = "Add to Playlist";
        albumImage.setAttribute("src", `https://direct.rhapsody.com/imageserver/v2/albums/${tracks[i].albumId}/images/300x300.jpg`)
        albumDiv.classList.add("albumDiv");
        albumImage.classList.add("albumImage");
        h5Div.setAttribute("id", "h5Div");
        albumImage.setAttribute("alt", `${tracks[i].name}`);
        albumsName.textContent = `${tracks[i].name}`;
        albumDiv.appendChild(albumImage);
        h5Div.appendChild(albumsName);
        albumDiv.appendChild(h5Div);
        anchor.appendChild(albumDiv);
        albumImage.addEventListener("click", () => {
            document.querySelector("audio").setAttribute("src", `${tracks[i].previewURL}`);
        })
        anchor.appendChild(playlist);
        playlist.addEventListener("click",()=>{
            let li = document.createElement("li");
            li.innerHTML = `<img src="https://direct.rhapsody.com/imageserver/v2/albums/${tracks[i].albumId}/images/300x300.jpg">`;
            li.addEventListener("click", () => {
                document.querySelector("audio").setAttribute("src", `${tracks[i].previewURL}`);
            })
            document.querySelector("#playListContent").appendChild(li);
            localStorage.getItem(i);
            localStorage.setItem(i,li);
        })
        albumDivImage.appendChild(anchor);
    }
}
tracks();

let modal = document.getElementById("myModal");
let modelContent = document.getElementsByClassName("modalContent");
let tracksDiv = document.getElementsByClassName("TracksDiv");
let listOfSongs = document.getElementById("listOfSongs");



document.querySelector("div").addEventListener("click", (event) => {
    let x = event.target.className.split(' ')[1] || event.target.className.split(' ')[0];
    console.log(x);
    switch (x) {
        case 'Trey':
            fetch("https://api.napster.com/v2.2/artists/art.6805682/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                    <div class="song">
                                        <p class="songName">${data.tracks[i].name}</p>
                                        <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                        <i class="fa-brands fa-playstation"></i>
                                        <i class="fas fa-stream queueBtn"></i>
                                    </div>
                                    `;

                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Kendrick':
            fetch("https://api.napster.com/v2.2/artists/art.40912632/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;


                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Childish':
            fetch("https://api.napster.com/v2.2/artists/art.50360883/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Pharrell':
            fetch("https://api.napster.com/v2.2/artists/art.64713/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Kid':
            fetch("https://api.napster.com/v2.2/artists/art.19296515/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Tyga':
            fetch("https://api.napster.com/v2.2/artists/art.19596595/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'J.':
            fetch("https://api.napster.com/v2.2/artists/art.20697410/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Big':
            fetch("https://api.napster.com/v2.2/artists/art.30308537/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <button type="button" class=" data-toggle="tooltip" data-placement="bottom" title="Playlist" onclick='document.querySelector("#playListContent").textContent = ""'><i class="fa-brands fa-playstation"></i></button>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);
                    }

                });
            break;

        case 'Nicki':
            fetch("https://api.napster.com/v2.2/artists/art.32558379/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Frank':
            fetch("https://api.napster.com/v2.2/artists/art.46327514/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Logic':
            fetch("https://api.napster.com/v2.2/artists/art.134441063/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'BlocBoy':
            fetch("https://api.napster.com/v2.2/artists/art.267201884/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'The':
            fetch("https://api.napster.com/v2.2/artists/art.317741791/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Jhené':
            fetch("https://api.napster.com/v2.2/artists/art.1953/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Bazzi':
            fetch("https://api.napster.com/v2.2/artists/art.206835946/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'dvsn':
            fetch("https://api.napster.com/v2.2/artists/art.199315671/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Tory':
            fetch("https://api.napster.com/v2.2/artists/art.149525481/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Majid':
            fetch("https://api.napster.com/v2.2/artists/art.126603661/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'PARTYNEXTDOOR':
            fetch("https://api.napster.com/v2.2/artists/art.114954674/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'The':
            fetch("https://api.napster.com/v2.2/artists/art.51742775/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Charlie':
            fetch("https://api.napster.com/v2.2/artists/art.42799189/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'OB':
            fetch("https://api.napster.com/v2.2/artists/art.59795210/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'P':
            fetch("https://api.napster.com/v2.2/artists/art.29484448/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'G-Eazy':
            fetch("https://api.napster.com/v2.2/artists/art.19148428/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Bun':
            fetch("https://api.napster.com/v2.2/artists/art.55920/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Little':
            fetch("https://api.napster.com/v2.2/artists/art.65056/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'J':
            fetch("https://api.napster.com/v2.2/artists/art.5278372/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Aaliyah':
            fetch("https://api.napster.com/v2.2/artists/art.283/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Kanye':
            fetch("https://api.napster.com/v2.2/artists/art.5015309/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Lil':
            fetch("https://api.napster.com/v2.2/artists/art.9005/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

        case 'Young':
            fetch("https://api.napster.com/v2.2/artists/art.9923516/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4").then(response => response.json()).
                then(data => {

                    listOfSongs.textContent = "";

                    modal.style.display = "block";
                    let span = document.getElementsByClassName("close")[0];
                    span.onclick = function () {
                        modal.style.display = "none";
                    }
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    for (let i = 0; i < data.tracks.length; i++) {

                        let li = document.createElement("li");
                        let url = data.tracks[i].previewURL;
                        let html = `
                                <div class="song">
                                    <p class="songName">${data.tracks[i].name}</p>
                                    <button data-toggle="tooltip" data-placement="bottom" title="Play" type="button"class="playBtn" onclick='document.querySelector("audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i></button>
                                    <i class="fa-brands fa-playstation"></i>
                                    <i class="fas fa-stream queueBtn"></i>
                                </div>
                                `;
                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);

                        // listOfSongsTrey.appendChild(li);
                    }
                });
            break;

    }
});

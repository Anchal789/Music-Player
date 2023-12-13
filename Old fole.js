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
        artistDiv.classList.add(`${artist[i].links.topTracks.href}`);
        artistImage.classList.add("artistImage");
        artistImage.setAttribute("alt", `${artist[i].name}`);
        artistImage.classList.add(`${artist[i].links.topTracks.href}`);
        artistName.textContent = `${artist[i].name}`;
        artistName.classList.add(`${artist[i].links.topTracks.href}`);
        artistDiv.appendChild(artistImage);
        artistDiv.appendChild(artistName);
        anchor.setAttribute("class", `${artist[i].links.topTracks.href}`)
        anchor.appendChild(artistDiv);
        artistDivImage.appendChild(anchor);
        anchor.addEventListener("click", (event) => {
            fetch(`${anchor.className}?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`).then(response => response.json()).
                then(data => {
                    console.log(data)
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
                                <div class="song" style="display: grid; grid-template-columns : auto auto auto auto; gap : 10px; padding : 20px">
                                    <img src="https://direct.rhapsody.com/imageserver/v2/albums/${data.tracks[i].albumId}/images/150x150.jpg">
                                        <span style="display : flex; justify-content: space-evenly; align-items : center ; padding : inherit; margin : 0">
                                            <p class="songName">${data.tracks[i].name}</p>
                                            <button data-toggle="tooltip" data-placement="bottom" id="playBtn" title="Play" type="button" class="playBtn" onclick='document.querySelector("#audio").setAttribute("src","${url}")'><i class="fa-solid fa-play"></i>Play</button>
                                            <button class="playBtn" type="button"><i class="fa-brands fa-playstation" onclick='playListForArtist("${data.tracks[i].albumId}", "${url}")'></i>Playlist</button>
                                        </span>
                                    </div>
                                    `;

                        li.innerHTML = html;
                        document.getElementById("listOfSongs").appendChild(li);
                    }
                });
        })
    }
}

music();

function playListForArtist(id, url) {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    div.innerHTML = `<img src="https://direct.rhapsody.com/imageserver/v2/albums/${id}/images/150x150.jpg">`;
    div.addEventListener("click", () => {
        document.querySelector("audio").setAttribute("src", `${url}`);
    })
    deleteBtn.addEventListener("click", (event) => {
        document.querySelector("#playListContent").removeChild(li);
    })
    li.appendChild(div);
    li.appendChild(deleteBtn)
    document.querySelector("#playListContent").appendChild(li);
}

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
        playlist.setAttribute("type", "button");
        playlist.setAttribute("class", "playListBtn");
        playlist.textContent = "Add to Playlist";
        albumImage.setAttribute("src", `https://direct.rhapsody.com/imageserver/v2/albums/${tracks[i].albumId}/images/300x300.jpg`)
        albumDiv.classList.add("albumDiv");
        albumImage.classList.add("albumImage");
        albumImage.setAttribute("alt", `${tracks[i].name}`);
        albumsName.textContent = `${tracks[i].name}`;
        albumDiv.appendChild(albumImage);
        albumDiv.appendChild(albumsName)
        anchor.appendChild(albumDiv);
        anchor.appendChild(playlist);
        albumImage.addEventListener("click", () => {
            document.querySelector("audio").setAttribute("src", `${tracks[i].previewURL}`);
        })
        playlist.addEventListener("click", () => {
            let li = document.createElement("li");
            let div = document.createElement("div");
            let h4 = document.createElement("h4");
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            div.innerHTML = `<img src="https://direct.rhapsody.com/imageserver/v2/albums/${tracks[i].albumId}/images/150x150.jpg">`;
            div.addEventListener("click", () => {
                document.querySelector("audio").setAttribute("src", `${tracks[i].previewURL}`);
            })
            deleteBtn.addEventListener("click", (event) => {
                document.querySelector("#playListContent").removeChild(li);
            })
            h4.textContent = `${tracks[i].name}`
            div.appendChild(h4);
            li.appendChild(div);
            li.appendChild(deleteBtn)
            document.querySelector("#playListContent").appendChild(li);
            localStorage.getItem(i);
            localStorage.setItem(i, li);
        })
        albumDivImage.appendChild(anchor);
    }
}
tracks();

let modal = document.getElementById("myModal");
let modelContent = document.getElementsByClassName("modalContent");
let tracksDiv = document.getElementsByClassName("TracksDiv");
let listOfSongs = document.getElementById("listOfSongs");


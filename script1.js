
let modal = document.getElementById("myModal");
let modelContent = document.getElementsByClassName("modalContent");
let tracksDiv = document.getElementsByClassName("playlist_tracks");
let listOfSongs = document.getElementById("listOfSongs");
let currentPlaylist = [];
let playlistItems = document.getElementById('playlist-items');
let audioPlayer = document.getElementById('audio-player');
let currentSong = 0;
let formLg = document.getElementById("search_container_lg");
let formSm = document.getElementById("search_container_sm");

setTimeout(() => {
    document.getElementById("animation_container").style.display = "none";
    document.getElementById("main_container").style.display = "flex";
}, 4000);

formSm.addEventListener("submit", async (event) => {

    event.preventDefault();
    document.getElementById("close_search_result_sm").style.display = "block"
    document.getElementById("search_results_sm").style.display = "block";
    document.getElementById("search_results_sm").innerHTML = "";
    let search_input_sm = document.getElementById("search_input_sm").value;
    const url = `https://spotify81.p.rapidapi.com/search?q=${search_input_sm}&type=tracks&offset=10&limit=10&numberOfTopResults=10`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    for (let i = 0; i < result.tracks.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("class", "searchResultListItems_sm");
        let trackInfoContainer = document.createElement("div");
        trackInfoContainer.setAttribute("class", "trackInfoContainer_sm");
        let searchResultImage = document.createElement("img");
        searchResultImage.setAttribute("class", "searchResultImage_sm");
        searchResultImage.src = `${result.tracks[i].data.albumOfTrack.coverArt.sources[2].url}`;
        let searchResultTrackName = document.createElement("p");
        searchResultTrackName.setAttribute("class", "searchResultTrackName_sm")
        searchResultTrackName.textContent = `${result.tracks[i].data.name}`;
        trackInfoContainer.appendChild(searchResultImage);
        trackInfoContainer.appendChild(searchResultTrackName);
        li.appendChild(trackInfoContainer);
        document.getElementById("search_results_sm").appendChild(li);
    }
    document.getElementById("search_results_sm").style.height = "300px"
})

document.getElementById("close_search_result_sm").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("search_results_sm").style.display = "none";
    document.getElementById("close_search_result_sm").style.display = "none"
})

formLg.addEventListener("submit", async (event) => {

    event.preventDefault();
    document.getElementById("close_search_result").style.display = "block"
    document.getElementById("search_results").style.display = "block";
    document.getElementById("search_results").innerHTML = "";
    document.getElementById("searchbar_container").style.background = "white";
    let search_input = document.getElementById("search_input").value;
    const url = `https://spotify81.p.rapidapi.com/search?q=${search_input}&type=tracks&offset=10&limit=10&numberOfTopResults=10`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    for (let i = 0; i < result.tracks.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("class", "searchResultListItems");
        let trackInfoContainer = document.createElement("div");
        trackInfoContainer.setAttribute("class", "trackInfoContainer");
        let searchResultImage = document.createElement("img");
        searchResultImage.setAttribute("class", "searchResultImage");
        searchResultImage.src = `${result.tracks[i].data.albumOfTrack.coverArt.sources[2].url}`;
        let searchResultTrackName = document.createElement("p");
        searchResultTrackName.setAttribute("class", "searchResultTrackName")
        searchResultTrackName.textContent = `${result.tracks[i].data.name}`;
        trackInfoContainer.appendChild(searchResultImage);
        trackInfoContainer.appendChild(searchResultTrackName);
        li.appendChild(trackInfoContainer);
        document.getElementById("search_results").appendChild(li);
        let trackID = result.tracks[i].data.uri.split(":")[2];
        li.addEventListener("click", async () => {
            const url = `https://spotify81.p.rapidapi.com/tracks?ids=${trackID}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
                    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                }
            };

            const response = await fetch(url, options);
            const result = await response.json();
            document.getElementById("audio-player").setAttribute("src", `${result.tracks[0].preview_url}`);
            document.getElementById("song_cover_image").setAttribute("src", `${result.tracks[0].album.images[0].url}`);
            document.getElementById("song_name").innerText = `${result.tracks[0].name}`;
            document.getElementById("song_cover_image").style.border = "2px solid white;";
            document.getElementById("full_version").setAttribute("href", `${result.tracks[0].uri}`)
        })
    }
    document.getElementById("search_results").style.height = "300px"
})

document.getElementById("close_search_result").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("search_results").style.display = "none";
    document.getElementById("close_search_result").style.display = "none"
    document.getElementById("searchbar_container").style.background = "";
    document.getElementById("search_input").value = "";
})

let countrys = ["GLOBAL", "AR", "AU", "AT", "BY", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", " DO", "EC", "EG", "SV", "EE", "FI", "FR", "DE", "GR", "GT", "HN", "HK", "HU", "IS", "IN", "ID", "IE", "IL", "IT", "JP", "KZ", "LV", "LT", "LU", "MY", "MX", "MA", "NL", "NZ", "NI", "NG", "NO", "PK", "PA", "PY", "PE", "PH", "PL", "PT", "RO", "SA", "SG", "SK", "ZA", "KR", "ES", "SE", "CH", "TW", "TH", "AE", "TR", "UA", "GB", "UY", "US", "VE", "VN"]
let country_select_element = document.getElementById("country_select");

let country_map_element = countrys.map((country) => {
    let option = document.createElement("option");
    option.value = country;
    option.text = country;
    if (country === "IN") {
        option.selected = true
    }
    return option;
})

country_map_element.forEach((option) => country_select_element.appendChild(option))

async function myFunction(chosen) {
    document.getElementById("top_songs_container").innerHTML = "";
    const url = `https://spotify81.p.rapidapi.com/top_200_tracks?country=${chosen}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if (result.status_code === 404) {
            document.getElementById("top_songs_container").style.display = "block"
            document.getElementById("top_songs_container").innerHTML = '<div id="error"><h1 class="error_animation">Something Went Wrong</h1></div>';
            document.getElementById("error").style.display = "flex"
        }
        else {
            for (let i = 0; i < result.length; i++) {
                let songContainer = document.createElement("div");
                songContainer.setAttribute("class", "songContainer")
                let song_image = document.createElement("img");
                song_image.setAttribute("class", "song_image");
                song_image.setAttribute("src", `${result[i].trackMetadata.displayImageUri}`)
                let name_container = document.createElement("div");
                name_container.setAttribute("class", "song_name_container");
                let track_name = document.createElement("p");
                track_name.setAttribute("class", "track_name");
                track_name.innerText = `${result[i].trackMetadata.trackName}`
                let buttons_container = document.createElement("div");
                buttons_container.setAttribute("class", "song_buttons_container");
                let add_to_playlist_btn = document.createElement("button");
                add_to_playlist_btn.setAttribute("type", "button");
                add_to_playlist_btn.setAttribute("class", "add_to_playlist_button btn btn-primary");
                add_to_playlist_btn.innerText = "Playlist"
                name_container.appendChild(track_name);
                buttons_container.appendChild(add_to_playlist_btn);
                songContainer.appendChild(song_image);
                songContainer.appendChild(name_container);
                songContainer.appendChild(buttons_container);
                let trackID = result[i].trackMetadata.trackUri.split(":")[2];
                song_image.addEventListener("click", async () => {
                    const url = `https://spotify81.p.rapidapi.com/tracks?ids=${trackID}`;
                    const options = {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
                            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                        }
                    };

                    const response = await fetch(url, options);
                    const result1 = await response.json();
                    console.log(result1)
                    document.getElementById("audio-player").setAttribute("src", `${result1.tracks[0].preview_url}`);
                    document.getElementById("song_cover_image").setAttribute("src", `${result[i].trackMetadata.displayImageUri}`);
                    document.getElementById("song_name").innerText = `${result[i].trackMetadata.trackName}`;
                    document.getElementById("song_cover_image").style.border = "2px solid white;";
                    document.getElementById("full_version").setAttribute("href", `${tracksData[i].trackMetadata.trackUri}`)
                })
                add_to_playlist_btn.addEventListener(("click"), () => {
                    currentPlaylist.push({ image: `${playlistData.items[i].track.album.images[1].url}`, url: `${result.albums[0].tracks.items[i].preview_url}`, name: `${result.albums[0].tracks.items[i].name}` });
                    updatePlaylist();
                    console.log(currentPlaylist);
                })
                document.getElementById("top_songs_container").appendChild(songContainer);
            }
        }

    } catch (error) {
        return false;
    }

}


async function top_200_songs() {
    const url = `https://spotify81.p.rapidapi.com/top_200_tracks?country=IN`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return (result);

    } catch (error) {
        return false;
    }
}

async function playlists() {
    const url = 'https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return (result);
    } catch (error) {
        console.error(error);
    }
}


async function topTracks() {
    let tracksData = await top_200_songs();
    if (tracksData.status_code === 404) {
        document.getElementById("top_songs_container").style.display = "block"
        document.getElementById("top_songs_container").innerHTML = '<div id="error"><h1 class="error_animation">Something Went Wrong</h1></div>';
        document.getElementById("error").style.display = "flex"
    }
    else {
        for (let i = 0; i < tracksData.length; i++) {
            let songContainer = document.createElement("div");
            songContainer.setAttribute("class", "songContainer")
            let song_image = document.createElement("img");
            song_image.setAttribute("class", "song_image");
            song_image.setAttribute("src", `${tracksData[i].trackMetadata.displayImageUri}`)
            let name_container = document.createElement("div");
            name_container.setAttribute("class", "song_name_container");
            let track_name = document.createElement("p");
            track_name.setAttribute("class", "track_name");
            track_name.innerText = `${tracksData[i].trackMetadata.trackName}`
            let buttons_container = document.createElement("div");
            buttons_container.setAttribute("class", "song_buttons_container");
            let add_to_playlist_btn = document.createElement("button");
            add_to_playlist_btn.setAttribute("type", "button");
            add_to_playlist_btn.setAttribute("class", "add_to_playlist_button btn btn-primary");
            add_to_playlist_btn.innerText = "Playlist"
            name_container.appendChild(track_name);
            buttons_container.appendChild(add_to_playlist_btn);
            songContainer.appendChild(song_image);
            songContainer.appendChild(name_container);
            songContainer.appendChild(buttons_container);
            let trackID = tracksData[i].trackMetadata.trackUri.split(":")[2];
            song_image.addEventListener("click", async () => {
                const url = `https://spotify81.p.rapidapi.com/tracks?ids=${trackID}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
                        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                    }
                };

                const response = await fetch(url, options);
                const result = await response.json();
                document.getElementById("audio-player").setAttribute("src", `${result.tracks[0].preview_url}`);
                document.getElementById("song_cover_image").setAttribute("src", `${tracksData[i].trackMetadata.displayImageUri}`);
                document.getElementById("song_name").innerText = `${tracksData[i].trackMetadata.trackName}`;
                document.getElementById("song_cover_image").style.border = "2px solid white;";
                document.getElementById("full_version").setAttribute("href", `${tracksData[i].trackMetadata.trackUri}`)
            })
            add_to_playlist_btn.addEventListener(("click"), async () => {
                const url = `https://spotify81.p.rapidapi.com/tracks?ids=${trackID}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
                        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                    }
                };

                const response = await fetch(url, options);
                const result = await response.json();
                currentPlaylist.push({ image: `${tracksData[i].trackMetadata.displayImageUri}`, url: `${result.tracks[0].preview_url}`, name: `${tracksData[i].trackMetadata.trackName}` });
                updatePlaylist();
                console.log(currentPlaylist);
            })
            document.getElementById("top_songs_container").appendChild(songContainer);
        }
    }
}

async function playlistTrack() {
    let playlistData = await playlists();
    if (playlistData.status_code === 404) {
        document.getElementById("playlists").style.display = "block"
        document.getElementById("playlists").innerHTML = '<div id="error"><h1 class="error_animation">Something Went Wrong</h1></div>';
        document.getElementById("error").style.display = "flex"

    }
    else {
        for (let i = 0; i < playlistData.items.length; i++) {
            let playlistContainer = document.createElement("div");
            playlistContainer.setAttribute("class", "playlist_container");
            let playlist_cover_image = document.createElement("img");
            playlist_cover_image.setAttribute("src", `${playlistData.items[i].track.album.images[1].url}`);
            playlist_cover_image.setAttribute("class", "playlist_cover_image");
            let nameDiv = document.createElement("div");
            nameDiv.setAttribute("class", "playlist_name_div")
            let playlistname = document.createElement("p");
            playlistname.innerText = `${playlistData.items[i].track.name}`
            playlistname.setAttribute("class", "playlist_name");
            let playlist_popularity = document.createElement("div");
            playlist_popularity.setAttribute("class", "playlist_popularity");
            playlist_popularity.innerHTML = `${playlistData.items[i].track.popularity}`;
            nameDiv.appendChild(playlistname);
            nameDiv.appendChild(playlist_popularity);
            playlistContainer.appendChild(playlist_cover_image);
            playlistContainer.appendChild(nameDiv);
            document.getElementById("playlists").appendChild(playlistContainer);
            document.getElementById("playlists").style.gridTemplateColumns = `repeat(${playlistData.items.length},1fr)`
            playlistContainer.addEventListener("click", async () => {
                listOfSongs.textContent = "";

                modal.style.display = "flex";
                let span = document.getElementsByClassName("close")[0];
                span.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                const url = `https://spotify81.p.rapidapi.com/albums?ids=${playlistData.items[i].track.album.id}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
                        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                    }
                };
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result.albums[0].tracks.items.length)
                for (let i = 0; i < result.albums[0].tracks.items.length; i++) {
                    let li = document.createElement("li");
                    let playlistTrackContainer = document.createElement("div");
                    playlistTrackContainer.setAttribute("id", "playlist_song_container");
                    let playlistSongImage = document.createElement("img");
                    playlistSongImage.setAttribute("src", `${playlistData.items[i].track.album.images[2].url}`);
                    playlistSongImage.setAttribute("id", "playlistSongImage");
                    let song_name = document.createElement("p");
                    song_name.setAttribute("id", "playlist_song_name");
                    song_name.innerText = `${result.albums[0].tracks.items[i].name}`;
                    let add_to_playlist_btn = document.createElement("button");
                    add_to_playlist_btn.setAttribute("type", "button");
                    add_to_playlist_btn.setAttribute("class", "add_to_playlist_button btn btn-primary");
                    add_to_playlist_btn.innerText = "Playlist";
                    playlistTrackContainer.appendChild(playlistSongImage);
                    playlistTrackContainer.appendChild(song_name);
                    li.appendChild(playlistTrackContainer);
                    li.appendChild(add_to_playlist_btn);
                    playlistTrackContainer.addEventListener("click", () => {
                        document.getElementById("audio-player").setAttribute("src", `${result.albums[0].tracks.items[i].preview_url}`);
                        document.getElementById("song_cover_image").setAttribute("src", `${playlistData.items[i].track.album.images[1].url}`)
                        document.getElementById("song_name").innerText = `${result.albums[0].tracks.items[i].name}`;
                        document.getElementById("song_cover_image").style.border = "2px solid white";
                        document.getElementById("full_version").setAttribute("href", `${playlistData.items[i].track.uri}`)

                    })
                    add_to_playlist_btn.addEventListener(("click"), () => {
                        currentPlaylist.push({ image: `${playlistData.items[i].track.album.images[1].url}`, url: `${result.albums[0].tracks.items[i].preview_url}`, name: `${result.albums[0].tracks.items[i].name}` });
                        updatePlaylist();
                        console.log(currentPlaylist);
                    })
                    listOfSongs.appendChild(li);
                }

            })
        }
    }
}

function updatePlaylist() {
    playlistItems.innerHTML = '';
    currentPlaylist.forEach((song, index) => {
        const conatiner = document.createElement("div");
        conatiner.setAttribute("class", "custom_playlist_container");
        const listItem = document.createElement('li');
        listItem.classList.add('playlist-item');

        // Image
        const image = document.createElement('img');
        image.src = song.image;
        image.alt = song.name
        image.setAttribute("class", "custom_playlist_image");
        conatiner.appendChild(image);

        // Song name
        const songName = document.createElement('h5');
        songName.textContent = song.name;
        songName.setAttribute("class", "custom_playlist_song_name");
        conatiner.appendChild(songName);

        // Add a delete button for each song in the playlist
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute("class", 'delete-button btn btn-danger');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        deleteButton.onclick = () => deleteFromPlaylist(index);
        listItem.appendChild(conatiner);
        listItem.appendChild(deleteButton);

        conatiner.addEventListener("click", () => {
            document.getElementById("audio-player").setAttribute("src", `${song.url}`);
            document.getElementById("song_cover_image").setAttribute("src", `${song.image}`)
            document.getElementById("song_name").innerText = `${song.name}`;
        })

        playlistItems.appendChild(listItem);
    });
}

function deleteFromPlaylist(index) {
    // Delete a song from the playlist
    currentPlaylist.splice(index, 1);
    updatePlaylist();
    if (currentPlaylist.length < 1) {
        document.getElementById("audio-player").setAttribute("src", "");
        document.getElementById("song_cover_image").setAttribute("src", "")
        document.getElementById("song_name").innerText = "";
    }
}

function playNextSong() {
    currentSong = Array.from(currentPlaylist).findIndex(item => item.name === document.getElementById("song_name").innerText);
    console.log(currentSong);
    currentSong++;
    if (currentSong >= currentPlaylist.length) {
        currentSong = 0;
    }
    audioPlayer.src = currentPlaylist[currentSong].url;
    document.getElementById("song_cover_image").setAttribute("src", `${currentPlaylist[currentSong].image}`);
    document.getElementById("song_name").innerText = `${currentPlaylist[currentSong].name}`;
}

async function listenNow() {
    document.getElementById("main_container").style.background = "#1B1B1B";
    document.getElementById("background_container").style.display = "none"
    document.getElementById("latest_songs_page").style.display = "block"
    document.getElementById("search_input").style.display = "block"
    document.getElementById("search_btn").style.display = "block"
    document.getElementById("search_results").style.display = "block"
    topTracks();
    playlistTrack();
    audioPlayer.focus();
}

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}



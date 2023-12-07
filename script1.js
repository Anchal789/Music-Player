
// const ApiController = (function(){
//     const client_id = "29b82d4f7bed4ea3b7b55540411d7253";
//     const client_secret = "12a19d98e6ee428c9ea71c9ee2c80c9e";
//     let token;

//     const _getToken = async () => {
//         const result = await fetch("https://accounts.spotify.com/api/token", {
//             method : "POST",
//             headers : {
//                 'Content-Type' : "application/x-www-form-urlencoded",
//                 'Authorization' : 'Basic ' + btoa(client_id +  ":" + client_secret)
//             },
//             body : "grant_type=client_credentials"
//         });

//         const data = await result.json();
//         token = data.acess_token;
//         console.log(token);
//     } 

//     const _getGenres = async (token) => {

//         const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
//             method: 'GET',
//             headers: { 'Authorization' : 'Bearer ' + token}
//         });

//         const data = await result.json();
//         return data.categories.items;
//     }

//     return {
//         getToken(){
//             return _getToken();
//         },
//         getGenres(token) {
//             return _getGenres(token);
//         }
//     }
// })();

// async function api() {
//     const url = 'https://spotify81.p.rapidapi.com/top_200_tracks';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'e8e6be8f26msh184e850f85d34e7p1ef79ajsn2279494dc8ec',
//             'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
//         }
//     };
//     try {
//         // const response = await fetch(url, options);
//         // const result = await response.json();

//         // console.log(result);

//     } catch (error) {
//         console.error(error);
//     }
// }


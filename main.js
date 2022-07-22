// This is a sample javasricpt music review app




console.log('\t\t\t\t\t\t\t MUSIC HUB'); //app name

const songs = [] //to store all songs


// add to song playlist
const add_song = (song_name, Artist, Release_Date) => {

    //saving to database
    songs.push(
        {
            id: songs.length + 1,
            name: song_name,
            artist: Artist,
            release_Date: Release_Date,
            review: false,
            rating:0
        }
    )
    // success mesage
    console.log(`Added ${song_name} by ${Artist} to playlist`);
}





// search for song 
const search_song = (name_of_song) => {
    // searching though the playlist to get song name
    songs.forEach(song_name => {
    
        // checking song name match
        if (song_name.name == name_of_song) {

            // displaying match song name info
            console.log(`playlist_id : ${song_name.id}`);
            console.log(`Artise : ${song_name.artist}`);
            console.log(`Song released date : ${song_name.release_Date}`);
            console.log(`Reviwed : ${song_name.review}`);
            console.log(`Rating : ${song_name.rating}`);
            console.log(" ");
        } 
    })

}



// get all songs 
const my_playlist = () => {
    console.log('All songs');

    console.log('\n');
    // getting all song
    songs.forEach((playlist) => {
        console.log(`playlist_number: ${playlist.id}`); //id
        console.log(`song: ${playlist.name} `); //song name
        console.log(`Artise: ${playlist.artist}`); // artise
        console.log(`Release_data :${playlist.release_Date}`); // date
        console.log(`Review :${playlist.review}`); // reviwe
        console.log(`Rating :${playlist.rating}`); //rating

        console.log('\n');
    })
}



// delete a song
const delete_song = (id_of_song)=>{
     const item = songs.map((song,index) => {
        if (song.id ==id_of_song){
            
            // delete song
            delete songs[index]

            
        }
    })
    
    // success message
    console.log("Delete completed")
    console.log('\n');
    
}



// update a song data
const update_song = (id_of_song,review, rating)=>{
    const item = songs.map((song , index )=>{
        if(song.id == id_of_song){
            songs[index] = {
                ...song,
                'review' : review,
                'rating' : rating
            }
        }
    })
    
    // success message
    console.log('Data updated');
}


// get all reviwed song
const all_review_songs = () =>{

    console.log('\n'); //add new line before displaying data

    songs.map( song =>{
        if( song.review == true){
            console.log(`playlist_number: ${song.id}`); //id
            console.log(`song: ${song.name} `); //song name
            console.log(`Artise: ${song.artist}`); // artise
            console.log(`Release_data :${song.release_Date}`); // date
            console.log(`Review :${song.review}`); // reviwe
            console.log(`Rating :${song.rating}`); //rating
    
            console.log('\n');
        }
    })
}




// get all unreviwed song
const all_unreview_songs = () =>{

    console.log('\n'); //add new line before displaying data

    songs.map( song =>{
        if( song.review == false){
            console.log(`playlist_number: ${song.id}`); //id
            console.log(`song: ${song.name} `); //song name
            console.log(`Artise: ${song.artist}`); // artise
            console.log(`Release_data :${song.release_Date}`); // date
            console.log(`Review :${song.review}`); // reviwe
            console.log(`Rating :${song.rating}`); //rating
    
            console.log('\n');
        }
    })
}



// get all reviwed song
const release_year = (year) =>{

    console.log('\n'); //add new line before displaying data

    songs.map( song =>{
        if( song.release_Date == year){
            console.log(`playlist_number: ${song.id}`); //id
            console.log(`song: ${song.name} `); //song name
            console.log(`Artise: ${song.artist}`); // artise
            console.log(`Release_data :${song.release_Date}`); // date
            console.log(`Review :${song.review}`); // reviwe
            console.log(`Rating :${song.rating}`); //rating
    
            console.log('\n');
        }
    })
}




console.log('\n');

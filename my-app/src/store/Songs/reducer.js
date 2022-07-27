//This is copyright free music!
//All this was found on https://pixabay.com/music/
//for more questions: okydri@gmail.com
const initialState = {
    songs: [
        {
            title: "Cinematic Documentary",
            author: "Lexin Music",
            music: "../../allSongs/cinematic-documentary/cinematic-documentary.mp3",
            foto: "../../allSongs/cinematic-documentary/cinematic-documentary.png"
        },
        {
            title: "Cinematic Documentary",
            author: "Lexin Music",
            music: "../../allSongs/cinematic-documentary/cinematic-documentary.mp3",
            foto: "../../allSongs/cinematic-documentary/cinematic-documentary.png"
        },
        {
            title: "Cinematic Documentary",
            author: "Lexin Music",
            music: "../../allSongs/cinematic-documentary/cinematic-documentary.mp3",
            foto: "../../allSongs/cinematic-documentary/cinematic-documentary.png"
        }
    ]
}
export const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

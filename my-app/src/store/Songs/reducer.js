//This is copyright free music!
//All this was found on https://pixabay.com/music/
//for more questions: okydri@gmail.com


let firstId = 0;
const getID = () => {
    firstId += 1;
    return firstId
}

const initialState = {
    songs: [
        {
            title: "Cinematic Documentary",
            ID: getID(),
            author: "Lexin Music",
            music: "https://cdn.pixabay.com/audio/2022/07/26/audio_ed0c111294.mp3",
            img: "https://cdn.pixabay.com/audio/2022/07/26/18-36-07-859_200x200.jpg"
        },
        {
            title: "Cinematic Time Lapse",
            author: "Lexin Music",
            ID: getID(),
            music: "https://cdn.pixabay.com/audio/2022/07/26/audio_112f2d606c.mp3",
            img: "https://cdn.pixabay.com/audio/2022/07/26/18-45-46-219_200x200.jpg"
        }, {
            title: "Chapter Two",
            author: "Leonell Cassio",
            ID: getID(),
            music: "https://cdn.pixabay.com/audio/2022/07/14/audio_b2e1adaa25.mp3",
            img: "https://cdn.pixabay.com/audio/2022/07/14/10-30-11-397_200x200.png"
        },
        {
            title: "Lofi Study",
            author: "FASSounds",
            ID: getID(),
            music: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3",
            img: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg"
        },
        {
            title: "Anthem of Victory",
            author: "DaddysMusic",
            ID: getID(),
            music: "https://cdn.pixabay.com/audio/2022/05/13/audio_c490e37598.mp3",
            img: "https://cdn.pixabay.com/audio/2022/05/13/23-13-29-354_200x200.jpeg"
        },
        {
            title: "Stomping Rock",
            author: "AlexGrohl",
            ID: getID(),
            music: "https://cdn.pixabay.com/audio/2022/05/17/audio_407815a564.mp3",
            img: "https://cdn.pixabay.com/audio/2022/05/17/19-32-35-334_200x200.jpg"
        }

    ]
}
export const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

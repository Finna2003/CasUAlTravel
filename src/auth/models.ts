//USERS


// GET /users/{id}*/

//response 201
type userGetResponse201 = {
    id: string,
    fullName: string,
    photoUrl: string,
    betterThenPercentages: number,
    achievements: {
        name: string,
        achievementUrl: string
    }[],
    progressAchievements: {
        name: string,
        nextLevel: number
        pointsLeft: number
    },
    visitHistory: {
        placeName: string,
        progressAchievement: {
            name: string,
            pointsReceived: number,
        }
    }[]
}

//response 404 (not exist)
type userGetResponse404 = {
    developerMessage: string,
    userMessage: string
}


// POST /users

//request
type userPostRequest = {
    mail: string
    password: string
    //....... other info in welcome form
}

//response 201
type userPostResponse201 = {
    id: string
}

//response 405 (mail already exist)
type userPostResponse405 = {
    developerMessage: string,
    userMessage: string
}


// POST /users/{id}/visitHistory

//request
type VisitHistoryPostRequest = {
    placeName: string
}

//response 404
type VisitHistoryPostResponse404 = {
    developerMessage: string
}


// DELETE /users/{id}
// logout include

// request
type userDeleteRequest = {
    id: string
}

//response 201
type userDeleteResponse201 = {
    userMessage: string
}

//response 404 (not exist)
type userDeleteResponse404 = {
    developerMessage: string,
    userMessage: string
}


//PLACES

// GET /places

//response 201
type placesGetResponse201 = {
    types: {
        name: string
        userName: string
        photoUrl: string
    }[],
    places: placeGetResponse201[]
}


// GET /places/{name}

//response 201
type placeGetResponse201 = {
    name: string,
    userName: string,
    typesName: string[],
    location: {
        x: number,
        y: number
    },
}

//response 404
type placeGetResponse404 = {
    developerMessage: string,
    userMessage: string
}


//SURVEYS

// GET /surveys

//response 201
type surveysGetResponse404 = {
    welcome: surveyData,
    profile: surveyData,
    autoRoute: surveyData
}

type surveyData = {
    name: string,
    userName: string
    questions: {
        id: string
        text: string,
        answerOptions: string[]
    }[]
}

// POST /surveys/{name}/answer?userId={id}

//request
type surveyPostRequest = {
  questionId: string,
  answer: string
}[]

//response 201
type surveyPostResponse201 = {
    userMessage: string
}

//response 404
type surveyPostResponse404 = {
    type: "survey" | "user",
    developerMessage: string,
    userMessage: string
}


//ROUTES


// GET routes/autoRoute?userId={id}

//response 201
type autoRouteResponse201 = {
    places: {
        name: string
    }[]
}

//response 404 (not exist)
type autoRouteResponse404 = {
    developerMessage: string,
    userMessage: string
}

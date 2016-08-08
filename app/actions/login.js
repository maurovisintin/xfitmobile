export const TOKEN_ASSIGN = 'TOKEN_ASSIGN'
export const TOKEN_REMOVE = 'TOKEN_REMOVE'

//action creator is a function wich returns an action
//an action is an object that describes what happened
export function tokenAssign (authToken){
    return {
        type: TOKEN_ASSIGN,
        authToken: authToken
    }
}

export function tokenRemove (){
    return {
        type: TOKEN_REMOVE,
    }
}

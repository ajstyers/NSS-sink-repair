const applicationState = {
    requests: []
}

//  how to get API off the web:
/*
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}
*/
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

// Getters:

/* Define and export a function named getRequests that returns a copy
of the requests state. Go back to a previous project and look at the
functions that return copies of arrays in the database module if you've
forgotten the syntax. */
export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}
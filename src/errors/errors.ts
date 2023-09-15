function joi(message: string) {
    return {
        type: "joiError",
        message
    }
}

function conflict(resource = "Item") {
    return {
        type: "conflictError",
        message: `${resource} already exists!`
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFoundError",
        message: `${resource} not found!`
    }
}

export const errors =  { joi, conflict, notFound };
function joi(message: string) {
    return {
        name: "joiError",
        message
    }
}

function conflict() {
    return {
        name: "conflictError",
        message: `Book already exists!`
    }
}

function notFound() {
    return {
        name: "notFoundError",
        message: `Book not found!`
    }
}

export const errors =  { joi, conflict, notFound };
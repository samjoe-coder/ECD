//generate a 5 digit random password

function passwordGeneration() {
    return Math.random().toString(36).slice(-5);
}

export default passwordGeneration;
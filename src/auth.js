class Auth {
    constructor(){
        this.authenticated = false;
    }

    setAuthenticatedTrue(){
        this.authenticated = true;
    }

    setAuthenticatedFalse(){
        this.authenticated = false;
    }
}

export default new Auth();
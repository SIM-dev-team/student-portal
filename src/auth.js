class Auth {
    constructor(){
        const token = localStorage.getItem('StudentToken');
        if(!token.length){
            this.authenticated = true;
        }else{
            this.authenticated = false;
        }
    }

    isLoggedIn(){
        const token = localStorage.getItem('StudentToken');
        if(!token.length){
           return true;
        }else{
           return false;
        }
    }

    setAuthenticatedTrue(){
        this.authenticated = true;
    }

    setAuthenticatedFalse(){
        this.authenticated = false;
    }
}

export default new Auth();
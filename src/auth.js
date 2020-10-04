class Auth {
    constructor(){
        var token = localStorage.getItem('StudentToken');
        if(!token === null){
            this.authenticated = true;
        }else{
            this.authenticated = false;
        }
    }

    isLoggedIn(){
        return this.authenticated;
    }

    setAuthenticatedTrue(data){
        localStorage.setItem('StudentToken' ,data);
        this.authenticated = true;
    }

    setAuthenticatedFalse(){
        localStorage.setItem('StudentToken' , null);
        this.authenticated = false;
    }
}

export default new Auth();
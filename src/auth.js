class Auth {
    // constructor(){
    //     // var token = localStorage.getItem('StudentToken');
    //     // if(!token === null){
    //     //     this.authenticated = true;
    //     // }else{
    //     //     this.authenticated = false;
    //     // }
    // }

    isLoggedIn(){
        var token = localStorage.getItem('StudentToken');
        console.log(token)
        if(!token === null){
            
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
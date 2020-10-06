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
        localStorage.setItem('isStudentLoggedIn' ,true);
        this.authenticated = true;
    }

    setAuthenticatedFalse(){
        localStorage.setItem('StudentToken' , null);
        localStorage.setItem('isStudentLoggedIn' ,false);
        this.authenticated = false;
    }
}

export default new Auth();

class AdvertService {
    saveAdvert(adId){
        var savedAds = JSON.parse(localStorage.getItem("SavedAds"));
        if(savedAds){
            savedAds.push(adId);
            localStorage.setItem('SavedAds' ,JSON.stringify(savedAds));
        }else{
            var newArr = [];
            newArr.push(adId);
            localStorage.setItem('SavedAds' ,JSON.stringify(newArr));
        }
    }

    removeSavedAdvert(adid){
        var savedAds = JSON.parse(localStorage.getItem("SavedAds"));
        var updated = [];
        savedAds.forEach(element => {
            if(element !== adid){
                updated.push(element);
            }
        });
        localStorage.setItem('SavedAds' ,JSON.stringify(updated));
    }

    isSaved(adid){
        var savedAds = JSON.parse(localStorage.getItem("SavedAds"));
        var val = false;
        if(savedAds){
        savedAds.forEach(element => {
            if(element === adid){
                val = true;
            }
        });
        }
        return val;
    }

    getSavedAdverts(){
        var savedAds = JSON.parse(localStorage.getItem("SavedAds"));
        var empty = [];
        if(savedAds){
            return savedAds;
        }else{
            return empty;
        }
    }

    saveAppliedAdverts(data){
        localStorage.setItem('AppliedAds' ,JSON.stringify(data));
    }

    getAppliedAdverts(){
        var appliedAds = JSON.parse(localStorage.getItem("AppliedAds"));
        return appliedAds;
    }

    canAppply(){
        var appliedAds = JSON.parse(localStorage.getItem("AppliedAds"));
        if(appliedAds.length < 3){
            return true;
        }else{
            return false;
        }
    }

    isApplied(adid){
        var appliedAds = JSON.parse(localStorage.getItem("AppliedAds"));
        var val = false;
        if(appliedAds){
            appliedAds.forEach(element => {
            if(element.a_id === parseInt(adid)){
                val = true;
            }
        });
        }
        return val;
    }

    getAppliedAdvert(adid){
        var appliedAds = JSON.parse(localStorage.getItem("AppliedAds"));
        var link = '';
        if(appliedAds){
            appliedAds.forEach(element => {
            if(element.a_id === parseInt(adid)){
                link = element.cv_link;
            }
        });
        }

        return link;
    }
}

export default new AdvertService();
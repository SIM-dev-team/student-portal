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
}

export default new AdvertService();
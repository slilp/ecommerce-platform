
const accessTokenKey = "token";

function getAccessToken(){
   return localStorage.getItem(accessTokenKey);
}

function setAccessToken(value){
    localStorage.setItem(accessTokenKey,value);
}

function removeAccessToken(){
    localStorage.removeItem(accessTokenKey);
}

export {
    getAccessToken,
    setAccessToken,
    removeAccessToken
};
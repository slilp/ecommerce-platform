
const customerInfoKey = "info";

function getCustomerInfo(){
    return localStorage.getItem(customerInfoKey);
 }
 
 function setCustomerInfo(value){
     localStorage.setItem(customerInfoKey,value);
 }
 
 function removeCustomerInfo(){
     localStorage.removeItem(customerInfoKey);
 }



export {
    getCustomerInfo ,
    setCustomerInfo,
    removeCustomerInfo
};
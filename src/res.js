import React from "react";

function Result({sectNum , term}){

    let res;
    if(term){
    if(term > sectNum){
        res = 'higher';
    }
     else if(term < sectNum){
        res = 'Lower';
    }
     else if(term == sectNum){
        res = 'Correct';
    }
    else{
        res='invalid'
    }
}
    return <h3> you guessed : {res}</h3>
}
export default Result;
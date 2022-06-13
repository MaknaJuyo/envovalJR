import { GetServerSideProps } from "next";
import { Enxoval, getAllEnxoval } from "../lib/db";

export function getItemName(cName: string, cClass: string = ''): string{
    cName = removeAccent(cName)
    cName = captalizeItem(cName)
    cName = cName.split(" ").join("")
    if(cClass !== ''){
        cName += '-' + cClass
    }

    return cName
}

function removeAccent(cStr: string): string{
    
    const ACCENTS   = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ"
    const WOACCENTS = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr"
    
    var cNewStr: string = ""
    var bChange: boolean
    var i, a: number  

    for(i=0; i<cStr.length; i++) {
        bChange=false;
        for (a=0; a<ACCENTS.length; a++) {
            if (cStr.substr(i,1)==ACCENTS.substr(a,1)) {
                cNewStr+=WOACCENTS.substr(a,1);
                bChange=true;
                break;
            }
        }
        if (bChange===false) {
            cNewStr+=cStr.substr(i,1);
        }
    }
    return cNewStr;
}

function captalizeItem(cStr: string): string
{
    var i, a: number, cNewStr: string, bUpper: boolean = false

    cNewStr = cStr[0].toLowerCase()

    for (i=1; i<cStr.length; i++) {
        if (bUpper === true){
            cNewStr += cStr[i].toUpperCase()
            bUpper = false
        } else {
            cNewStr += cStr[i]
        }
        if((cStr[i] === ' ') && (cStr[i+1] !== ' ')) {
            bUpper = true
        }
    }

    return cNewStr
}
import { getItemName } from "../lib/jfunc";

export function getItem(cIte,bTem){

    if(bTem){
        return(
            <div className="half-box">
                <input
                    id={getItemName(cIte, 'cbox')}
                    name={getItemName(cIte, 'cbox')}
                    type="checkbox"
                    className="cbox" 
                    checked
                />
                <label htmlFor={getItemName(cIte,'cbox')}>{cIte}</label>
            </div>
        )
    } else {
        return(
            <div className="half-box">
                <input
                    id={getItemName(cIte, 'cbox')}
                    name={getItemName(cIte, 'cbox')}
                    type="checkbox"
                    className="cbox"
                />
                <label htmlFor={getItemName(cIte,'cbox')}>{cIte}</label>
            </div>
            )  
    }
}

export function getCheckbox(){
    cItens=''
    i=0
    // for (var i = 0; i < document.getElementsByClassName("cbox").length; i++) {
        cItens += '{ "com": "Cozinha", "ite": "'
        cItens += document.getElementsByClassName("cbox")[i].labels[0].outerText
        cItens += '", "tem": '
        cItens += String(document.getElementsByClassName("cbox")[i].checked)
        cItens += '},'
    // }

    return cItens.substring(0, cItens.length - 1)
}

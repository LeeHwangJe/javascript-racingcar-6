import { ERROR_MESSAGE } from "../contants/MESSAGE";


export const userInputDuplicatedError = (carNameArray=)=>{
    for(let i =0; i<carNameArray.length -1 ; i++) {
        if (carNameArray[i]===carNameArray[i+1]) {
            throw new Error (ERROR_MESSAGE.DUPLICATE_ERROR)
        }
    }
}

import {GUMARUM,HANUM,BAJANUM,BAZMAPATKUM,MNACORD,TOKOS} from './actionTypes'
export const gumar=(name)=>{
    return{
        type:GUMARUM,
        payload:name
    }
}
export const hanum=(name)=>{
    return{
        type:HANUM,
        payload:name
    }
}
export const bajanum=(name)=>{
    return{
        type:BAJANUM,
        payload:name
    }
}
export const angam=(name)=>{
    return{
        type:BAZMAPATKUM,
        payload:name
    }
}
export const tokos=(name)=>{
    return{
        type:TOKOS,
        payload:name
    }
}
export const mnacord=(name)=>{
    return{
        type:MNACORD,
        payload:name
    }
}
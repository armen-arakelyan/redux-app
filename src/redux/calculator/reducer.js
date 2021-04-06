import {BAZMAPATKUM,GUMARUM,HANUM,BAJANUM, MNACORD, TOKOS} from './actionTypes';
const changeName=(state=0,action)=>{
    switch(action.type){
        case GUMARUM:
            return state+action.payload;
            case HANUM:
                return state-action.payload;
                case BAJANUM:
                    return state/action.payload;
                    case BAZMAPATKUM:
                        return state*action.payload;
                        case MNACORD:
                            return state%action.payload;
                            case TOKOS:
                                return state/100*action.payload
            default:
                return state;
    }
}

export default changeName
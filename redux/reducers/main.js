import * as t from '../types';

const INITIAL_STATE = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    password: "",
    room_type: "",
    room_type_year: "",
    matric: "",
    picture: "",
    health_condition: false,
    report: "",
    select_roommate: false,
    roommate_name: "",
    guarantor_name: "",
    guarantor_phone: "",
    guarantor_address: "",
    paid: false,
    amount_paid: 0,
    payment_reference: "",
    signed: false,
    user: {},
    room: {}

}

const main = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case t.SET_FIRST_NAME:
            return {...state, 
                firstname: action.payload
            }
        case t.SET_LAST_NAME:
            return {...state, 
                lastname: action.payload
            }
        case t.SET_EMAIL:
            return {...state, 
                email: action.payload
            }
        case t.SET_DOB:
            return {...state, 
                dob: action.payload
            }
        case t.SET_GENDER:
            return {...state, 
                gender: action.payload
            }
        case t.SET_ADDRESS:
            return {...state, 
                address: action.payload
            }
        case t.SET_PHONE:
            return {...state, 
                phone: action.payload
            }
        case t.SET_PASSWORD:
            return {...state, 
                password: action.payload
            }
        case t.SET_JOB:
            return {...state, 
                job: action.payload
            }
        case t.SET_ROOM_TYPE:
            return {...state, 
                room_type: action.payload
            }
        case t.SET_ROOM_TYPE_YEAR:
            return {...state, 
                room_type_year: action.payload
            }
        case t.SET_MATRIC:
            return {...state, 
                matric: action.payload
            }
        case t.SET_PICTURE:
            return {...state, 
                picture: action.payload
            }
        case t.SET_HEALTH_CONDITION:
            return {...state, 
                health_condition: action.payload
            }
        case t.SET_REPORT:
            return {...state, 
                report: action.payload
            }
        case t.SET_SELECT_ROOMMATE:
            return {...state, 
                select_roommate: action.payload
            }
        case t.SET_ROOMMATE_NAME:
            return {...state, 
                roommate_name: action.payload
            }
        case t.SET_GUARANTOR_NAME:
            return {...state, 
                guarantor_name: action.payload
            }
        case t.SET_GUARANTOR_PHONE:
            return {...state, 
                guarantor_phone: action.payload
            }
        case t.SET_GUARANTOR_ADDRESS:
            return {...state, 
                guarantor_address: action.payload
            }

        case t.SET_PAID:
            return {...state, 
                paid: action.payload
            }
        case t.SET_AMOUNT_PAID:
            return {...state, 
                amount_paid: action.payload
            }
        case t.SET_PAYMENT_REFERENCE:
            return {...state, 
                payment_reference: action.payload
            }
        case t.SET_SIGNED:
            return {...state, 
                signed: action.payload
            }

        case t.SET_USER:
            return {...state, 
                user: action.payload
            }

        case t.SET_ROOM:
            return {...state, 
                room: action.payload
            }

        case t.RESET:
            return {...INITIAL_STATE}

        default:
            // return {...state}
            return state
    }
}

export default main;
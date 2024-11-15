import * as t from '../types';

export const setFirstname =(firstname) =>({
    type: t.SET_FIRST_NAME,
    payload: firstname,
})

export const setLastname =(lastname) =>({
    type: t.SET_LAST_NAME,
    payload: lastname,
})

export const setEmail =(email) =>({
    type: t.SET_EMAIL,
    payload: email,
})

export const setPassword =(password) =>({
    type: t.SET_PASSWORD,
    payload: password,
})

export const setPhone =(phone) =>({
    type: t.SET_PHONE,
    payload: phone,
})

export const setJob =(job) =>({
    type: t.SET_JOB,
    payload: job,
})

export const setRoomType =(room_type) =>({
    type: t.SET_ROOM_TYPE,
    payload: room_type,
})

export const setRoomTypeYear =(room_type_year) =>({
    type: t.SET_ROOM_TYPE_YEAR,
    payload: room_type_year,
})

export const setMatric =(matric) =>({
    type: t.SET_MATRIC,
    payload: matric,
})

export const setPicture =(file) =>({
    type: t.SET_PICTURE,
    payload: file,
})

export const setHealthCondition =(status) =>({
    type: t.SET_HEALTH_CONDITION,
    payload: status,
})

export const setReport =(report) =>({
    type: t.SET_REPORT,
    payload: report,
})

export const setSelectRoommate =(status) =>({
    type: t.SET_SELECT_ROOMMATE,
    payload: status,
})

export const setRoommateName =(name) =>({
    type: t.SET_ROOMMATE_NAME,
    payload: name,
})

export const setGender =(gender) =>({
    type: t.SET_GENDER,
    payload: gender,
})

export const setDOB =(dob) =>({
    type: t.SET_DOB,
    payload: dob,
})

export const setAddress =(address) =>({
    type: t.SET_ADDRESS,
    payload: address,
})

export const setGuarantorName =(name) =>({
    type: t.SET_GUARANTOR_NAME,
    payload: name,
})

export const setGuarantorPhone =(phone) =>({
    type: t.SET_GUARANTOR_PHONE,
    payload: phone,
})

export const setGuarantorAddress =(address) =>({
    type: t.SET_GUARANTOR_ADDRESS,
    payload: address,
})

export const setPaid =(status) =>({
    type: t.SET_PAID,
    payload: status,
})

export const setAmountPaid =(amount) =>({
    type: t.SET_AMOUNT_PAID,
    payload: amount,
})

export const setPaymentReference =(ref) =>({
    type: t.SET_PAYMENT_REFERENCE,
    payload: ref,
})

export const setSigned =(signature) =>({
    type: t.SET_SIGNED,
    payload: signature,
})

export const setUser =(user) =>({
    type: t.SET_USER,
    payload: user,
})

export const setRoom =(room) =>({
    type: t.SET_ROOM,
    payload: room,
})


export const resetState =(data) =>({
    type: t.RESET,
    payload: data,
})

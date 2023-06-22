
const valid = (data) => {
    let error = {};

    if(data && data.first_name.length < 2){
        error.first_name = "نام حداقل 2 کاراکتر"
    }

    if(data && data.last_name < 2){
        error.last_name = "نام حانوادگی حداقل 2 کارکتر"
    }

    return error
}

module.exports = {
    valid
}
let functionsMap = {
    "M": date => (date.getMonth() + 1), //月份
    "d": date => (date.getDate()), //日
    "h": date => (date.getHours()), //小时
    "m": date => (date.getMinutes()), //分
    "s": date => (date.getSeconds()), //秒
    "q": date => (Math.floor((date.getMonth() + 3) / 3)), //季度
    "S": date => (date.getMilliseconds()) //毫秒
}
let formatReg = /([yMdhmsqS])\1*/g;
let dateFormat =  function (date, format) {
    // console.log(date, format);
    if (typeof date === "string") {
        var mts = date.match(/(\/Date\((\d+)\)\/)/);
        if (mts && mts.length >= 3) {
            date = parseInt(mts[2]);
        }
    }
    date = new Date(date);
    if (!date || date.toUTCString() == "Invalid Date") {
        return "";
    }


    return format.replace(formatReg, function(all, t){
        var v = functionsMap[t];
        // console.log(v, all, t);
        if(v !== undefined){
            v = v(date);
            if(all.length > 1){
                v = '0' + v;
                v = v.slice(-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').slice(-4);
        }
        return all;
    });
    
    // return format;
};

// module.exports = dateFormat;
export default dateFormat;
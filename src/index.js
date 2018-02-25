module.exports = function check(str, bracketsConfig) {

    var objBrackets = [];
    if(str.length % 2 == 1 ) return false;
    for (var i = 0; i < str.length; i++) {

        for (var j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) {
                objBrackets.push(str[i]);
                //str = str.replace(bracketsConfig[j][0],'-');

            }
            if (str[i] == bracketsConfig[j][1]) {
                if (objBrackets[objBrackets.length - 1] == bracketsConfig[j][0]) {
                    objBrackets.pop();
                    //	str = str.replace(bracketsConfig[j][1],'+');
                }

            }
        }
    }
    if (objBrackets.length) {
        return false;
    }
    return true;
}

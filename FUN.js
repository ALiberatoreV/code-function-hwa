var name = "anthony";
var num = 4;
var array = [5, 10, 20];

function firstLetterName(name) {
    var text = "The name " + name + " starts with the letter " + name.charAt(0);
    alert(text);
}

function divisibleByTwo(num) {
    if(num % 2 == 0) return true;
    if(num % 2 != 0) return false;
}

function largestNum(bigNum) {
    var large = 0;
    for (var i = 0; i < 3; i++)
    {
        if (large < bigNum[i])
        {
            large === bigNum[i];
        }
    }
    return large;
}


largestNum(name)
divisibleByTwo(num)
firstLetterName(array)




var r=10,c=100,j=0,no=0
var max =0
var TempArray = []
var Twoarray=new Array(r)
var extraArray=[];
var index1=0


 function primeNo() {

    var index = 0
    max+=100
    var counter = 0
    var array=new Array()

    for ( no = no; no <=max ; no++) {
        counter = 0
        for (var i = 1; i <= no; i++) {
            if (no % i == 0) {
                counter++
            }
        }
        if (counter == 2) {
            
            array[index] = no
            extraArray[index1]=no
            index++
            index1++
        }
    }
    
    return array
}

function Dimension()
{
    
    for (var i = 0; i < r; i++) {
        Twoarray[i] = new Array(r)
    }
    
    for (var i = 0; i < r; i++) {
        TempArray=primeNo();
        for (j = 0; j < TempArray.length; j++) {
            Twoarray[i][j]=TempArray[j]

        }
    }
}

try{
    Dimension()
    displayBoard(Twoarray)
}
catch(e)
{
    console.log('Error',e)
}

function displayBoard(board){
    var buffer = '';
    for (var i = 0; i < board.length; i++) {
       for (var x = 0; x < board[i].length; x++) {
         buffer += board[i][x]+',';
       }
       buffer += '\n \n';
    }
    console.log(buffer);
 }

module.exports.extraArray = extraArray;
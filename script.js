// function submit(){
// 	var opr1 = document.getElementById("first").value;
// 	var opr2 = document.getElementById("second").value;
// 	// alert(opr1);
// 	var ope = document.getElementById("ope").value;
// 	if(ope=='+'){
// 		var res= parseInt(opr1)+parseInt(opr2);
// 	}
	
// 	if(ope=='-'){
// 		var res= parseInt(opr1)-parseInt(opr2);
// 	}
// 	if(ope=='*'){
// 		var res= parseInt(opr1)*parseInt(opr2);
// 	}
// 	if(ope=='/'){
// 		var res= parseInt(opr1)/parseInt(opr2);
// 	}
// 	// alert(res);
// 	document.getElementById("res").value=res;
// }

function clearDisplay() {
        document.getElementById("res").value = "";
    }
    
    function backspace() {
        let display = document.getElementById("res");
        display.value = display.value.slice(0, -1);
    }
    
    function addToDisplay(value) {
        document.getElementById("res").value += value;
    }
    
    function toggleSign() {
        let display = document.getElementById("res");
        if (display.value) {
            display.value = parseFloat(display.value) * -1;
        }
    }
    
    function calculate() {
        let display = document.getElementById("res");
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }
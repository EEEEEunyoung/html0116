// const xhrObject = null;
function createRequest(){
    try{
        xhrObject = new XMLHttpRequest();

    } catch (trymicrosoft){
        try{ 
            xhrObject = new ActiveXObject("Msxml2.XMLHTTP");
    console.log("her");

        }catch(error){
            xhrObject=null;
    console.log("hi");
        }
    }
    if(xhrObject ==null){
        alert("비동기 통신 객체 생성 에러");
    }
}  // end of createRequest

//span태그가 가지고 있는 텍스트 노드 값을 읽어오기
//<td> 100</td> 태그 이름이 없다 -> 속성을 정의 못함 ->아이디나 클래스를 정의못함 -> 접근불가함 ->어떡하지 


    //span태그가 가지고 있는 텍스트 노드값을 읽어오기
    //<td> 100 </td> 태그이름이 없다 -> 속성을 정의 못함 -> 아이디나 클래스를 정의 못함 -> 접근 불가함 -> 어떡하지
    //해결방법 - 그래서 나는 텍스트 노드에 span으로 감싼다.
    //document.querySelector("#id")
    //document.querySelector("#class")
    //document.querySelector("#태그이름")
	function getText(el){
		var text="";  //ES6 -> ECMAScript2015 - 적용 안되는 브라우저이면 babel이 필요하다. 또는 번들러 parcel
		if(el!=null){
			if(el.childNodes){
				for(var i=0;i<el.childNodes.length;i++){
					var childNode = el.childNodes[i];
					//너 텍스트 노드니?
					if(childNode.nodeValue !=null){
						text = text+childNode.nodeValue;
					}		
				}
			}
		}
		return text;
	}
	//기존 TextNode의 값을 다른 문자열로 바꾸기
	/***********************************************
	param1 :document.getElementById("boardSold")
	param2 :xhrObject. 
	************************************************/
	function replaceText(el, value){
		if(el !=null){
			clearText(el);//기존에 있던 10을 지워주세요.
			//새로운 텍스트 노드 15를 생성하기
			var newNode = document.createTextNode(value);//15
			//위에서 생성한 텍스트 노드 값을 el에 붙이는 함수 호출하기
			el.appendChild(newNode);   //el boardSoldEl-> <span>10</span> <span id = boardSold or cash></span> <span>20</span>
		}
	}

	//기존 태그안에 문자열 지우는 함수 구현
	function clearText(el){
		if(el !=null){
			if(el.childNodes){  //자바스크립트에서는 0 이 아닌건 모두 참이다. 
				for(var i=0;i<el.childNodes.length;i++){
					var childNode = el.childNodes[i]; //el.childNodes[0], el.childNodes[1];
					el.removeChild(childNode);  // 해당 el 삭제하기 - DOM API -> 직관적이지 않다 -> 유지보수 어렵다 -> 쓰기 싫다 
				}
			}
		}
	}

    function createRequest2(){
        try{
            xhrObject = new XMLHttpRequest();   //constructor
        } catch (trymicrosoft){
            try{ 
                //ms의 ie 사용자를 위한 객체 생성
                xhrObject = new ActiveXObject("Msxml2.XMLHTTP");
            }catch(error){
            xhrObject=null;
            }
        }
        if(xhrObject ==null){
            alert("비동기 통신 객체 생성 에러");
        }
        return xhrObject;
    }  // end of createRequest
    

    function add (){
        boardSold=(price-cost)
    }
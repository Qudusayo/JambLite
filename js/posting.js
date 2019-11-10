document.querySelector('#btn-post').addEventListener('click', function(e){
    let subject = document.querySelector("#subject").value
    let question = document.querySelector("#question").value
    let optionA = document.querySelector("#option-a").value
    let optionB = document.querySelector("#option-b").value
    let optionC = document.querySelector("#option-c").value
    let optionD = document.querySelector("#option-d").value
    let option = document.querySelector('#options').value

    if(option === 'a'){
        option = optionA
    }
    else if(option === 'b'){
        option = optionB
    }
    else if(option === 'c'){
        option = optionC
    }
    else if(option === 'd'){
        option = optionD
    }

    if (question ===  '' || optionA === '' || optionB === '' || optionC === '' || optionD === ''){
        alert('PLEASE MAKE SURE ALL CONTENTS ARE FILLED CORRECTLY');
        return;
    }
    if (subject ===  '' || option === ''){
        alert('PLEASE MAKE SURE ALL CONTENTS ARE FILLED CORRECTLY');
        return;
    }

    $.ajax({
        url: "https://api.myjson.com/bins/zwgkq",
        type: "POST",
        data:{
            subject: subject, 
            question: question, 
	        optionA: optionA, 
	        optionB: optionB, 
	        optionC: optionC,
	        optionD: optionD,
	        answer: option 
        },
        contentType: "application/json; charset=utf8",
        dataType: "json",
        success: function (data, textStatus, jqXHR){
            alert('Question Posted successfully');
            location.reload();
        }
    });
        e.preventDefault();
});
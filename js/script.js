$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

document.querySelector( "#nav-toggle" )
.addEventListener( "click", function() {
	this.classList.toggle( "active" );
	if( document.getElementsByClassName('top_nav')[0].style.display == 'block') {
		document.getElementsByClassName('top_nav')[0].style.display = 'none';
	} else {
		document.getElementsByClassName('top_nav')[0].style.display = 'block';
	}

});


$(document).ready(function() {

	$('#t_texts').animated('fadeInDown', 'fadeOutUp');
	$('#about').animated('flipInY' );
// $('#history').animated('fadeInLeft', 'fadeOutLeft');
$('#history_1').animated('fadeInLeft', 'fadeOutLeft');
$('#history_2').animated('fadeInRight', 'fadeOutRight');
$('#history_3').animated('fadeInLeft', 'fadeOutLeft');
$('#contact').animated('fadeInLeft', 'fadeOutLeft');
$('#map').animated('rubberBand');
// $('#footer').animated('fadeInUp', 'fadeOutDown');

$("a[href*='#']").mPageScroll2id();



function heightDetect() {
	$('.wrapper').css("height", $(window).height()); 
};

heightDetect();

$(window).resize(function() {
	heightDetect();	
});




$('#addQuestion').click(function() {

	$('.wrapper')[0].style.zIndex = 15;
	$('.wrapper')[0].style.opacity = 1;
	$('#ask_question').removeClass('hidden');
	
});




$('#but-ask_question').click(function(e){
	e.preventDefault();

	var form = {
		resultVemail: false,
		resultVFname: false,
		resultVLname: false,
		resultVquestion: false,

		email: $('#question_email')[0],
		Fname: $('#question_Fname')[0],
		Lname: $('#question_Lname')[0],
		quesstion: $('#quesstion')[0],
		validate: function() {

			var regexpEmail = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i,
			regexp = /^['a-zA-ZА-Яа-я']{2,15}/;


			form.resultVemail = regexpEmail.test(form.email.value);
			form.resultVFname = regexp.test(form.Fname.value);
			form.resultVLname = regexp.test(form.Lname.value);
			form.resultVquestion = regexp.test(form.quesstion.value);


			if(form.resultVemail == false) { form.email.style.borderColor = 'red'; } else { form.email.style.borderColor = '#ce5aff'; }
			if(form.resultVFname == false) { form.Fname.style.borderColor = 'red'; } else { form.Fname.style.borderColor = '#ce5aff'; }
			if(form.resultVLname == false) { form.Lname.style.borderColor = 'red'; } else { form.Lname.style.borderColor = '#ce5aff'; }
			if(form.resultVquestion == false) { form.quesstion.style.borderColor = 'red'; } else { form.quesstion.style.borderColor = '#ce5aff'; }



		},

		send_question: function() {
			if(form.resultVemail && form.resultVFname && form.resultVLname && form.resultVquestion) {


				var str = "&first_name=" +  form.Fname.value + "&last_name=" + form.Lname.value + "&email=" +  form.email.value + "&quesstion=" +  form.quesstion.value;



				alert('OKs'); /* Вставить код отправки данных  */

		// $.ajax({
		// 	url : 'mailer',
		// 	type: 'POST',
		// 	data: 'newQuestion=1' + str,
		// 	cache: false,
		// 	success: function( result ) {

		// 				// order_basck.cleiar_table();
		// 				go('profile');


		// 			}

		// 		});

form.closed_ask_form();
}
},
closed_ask_form: function() {

	// console.log(form.email.value);

	form.email.value = '';
	form.Fname.value = '';
	form.Lname.value = '';
	form.quesstion.value = '';

	$('.wrapper')[0].style.zIndex = -1;
	$('.wrapper')[0].style.opacity = 0;
	$('#ask_question').addClass('hidden');
	return true;
}

}

form.validate();
form.send_question();
$('.ask_btn_closed').click(form.closed_ask_form);

});






// function closed_ask_form() {



// 	email.value = '';
// 	Fname.value = '';
// 	Lname.value = '';
// 	quesstion.value = '';

// 	$('.wrapper')[0].style.zIndex = -1;
// 	$('.wrapper')[0].style.opacity = 0;
// 	$('#ask_question').addClass('hidden');
// }



});
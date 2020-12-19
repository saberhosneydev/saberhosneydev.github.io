document.querySelector("#contactForm").addEventListener("submit", function(event) {
	event.preventDefault();
	let resultMessage = document.getElementById('labelData');
	let name =document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let content =document.getElementById('content').value;
	emailjs.init("user_VV0kGVLqBYwD9xWC73hfK");
	var template_params = {
		"Name": name,
		"Email": email,
		"Content": content
	}

	var service_id = "default_service";
	var template_id = "website_default_form";
	emailjs.send(service_id, template_id, template_params).then(function(response) {
		resultMessage.classList.add('success');
		resultMessage.style.display = "inline";
		resultMessage.innerHTML = 'Message sent, I will reach you asap!';
	}, function(error) {
		resultMessage.classList.add('danger');
		resultMessage.style.display = "inline";
		resultMessage.innerHTML = error;
	});;
}, false);
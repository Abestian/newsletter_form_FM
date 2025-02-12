'use strict';

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close-btn');
const inputEmail = document.querySelector('#email');
const submitFormBtn = document.querySelector('.form__submit-btn');
const errorInfo = document.querySelector('.error-info');
const showEmail = document.querySelector('.show-email');

const closeModal = () => {
	modal.classList.remove('modal-active');
};

const clearError = () => {
	errorInfo.textContent = '';
	inputEmail.classList.remove('error');
};

const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		clearError();
		modal.classList.add('modal-active');
		showEmail.innerHTML = `${email.value}`;
		email.value = '';
	} else {
		errorInfo.textContent = 'Valid email required';
		email.classList.add('error');
	}
};

submitFormBtn.addEventListener('click', e => {
	e.preventDefault();
	checkEmail(inputEmail);
});

closeModalBtn.addEventListener('click', e => {
	e.preventDefault();
	closeModal();
});

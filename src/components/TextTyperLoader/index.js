import React, { useEffect } from 'react';
import './TextTyperLoader.css';

export default function TextTyperLoader() {
	useEffect(() => {
		var typer = document.getElementById('typewriter');

		var typewriter = setupTypewriter(typer);

		typewriter.type();
	}, []);

	return (
		<div>
			<pre id='typewriter'>
				<span className='var-highlight'>const </span>response = {'{ '}
				{'\n'} title:
				<span className='string-highlight'>'Hey There,Welcome!!'</span>,
				{'\n'} type:
				<span className='string-highlight'>'Greetings'</span>,{'\n'}{' '}
				location:
				<span className='string-highlight'>'Earth'</span>,{'\n'} stage:{' '}
				<span className='string-highlight'>'Loading....'</span>,{'\n'}
				{' } '}
				{/* {'['}
				<span className='string-highlight'>'Javascript'</span>,
				<span className='string-highlight'>'HTML'</span>,
				<span className='string-highlight'>'CSS'</span>
				{']'}; */}
			</pre>
		</div>
	);
}

function setupTypewriter(t) {
	console.log('t::::', t.innerHTML);
	var HTML = t.innerHTML;

	t.innerHTML = '';

	var cursorPosition = 0,
		tag = '',
		writingTag = false,
		tagOpen = false,
		typeSpeed = 100,
		tempTypeSpeed = 0;

	var type = function () {
		if (writingTag === true) {
			tag += HTML[cursorPosition];
		}

		if (HTML[cursorPosition] === '<') {
			tempTypeSpeed = 0;
			if (tagOpen) {
				tagOpen = false;
				writingTag = true;
			} else {
				tag = '';
				tagOpen = true;
				writingTag = true;
				tag += HTML[cursorPosition];
			}
		}
		if (!writingTag && tagOpen) {
			tag.innerHTML += HTML[cursorPosition];
		}
		if (!writingTag && !tagOpen) {
			if (HTML[cursorPosition] === ' ') {
				tempTypeSpeed = 0;
			} else {
				tempTypeSpeed = Math.random() * typeSpeed + 50;
			}
			t.innerHTML += HTML[cursorPosition];
		}
		if (writingTag === true && HTML[cursorPosition] === '>') {
			tempTypeSpeed = Math.random() * typeSpeed + 50;
			writingTag = false;
			if (tagOpen) {
				var newSpan = document.createElement('span');
				t.appendChild(newSpan);
				newSpan.innerHTML = tag;
				tag = newSpan.firstChild;
			}
		}

		cursorPosition += 1;
		if (cursorPosition < HTML.length - 1) {
			setTimeout(type, tempTypeSpeed);
		}
	};

	return {
		type: type,
	};
}

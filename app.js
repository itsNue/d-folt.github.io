var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 50,
  autoStart: true,
  cursor: '█',
  strings: ['/']
});

typewriter
    .typeString('I\'m Uvindu Harshana.I\'m currently a CS Undergraduate. I like to <strong>design</strong> & <strong>develop</strong>. So most probably it will be my career.')
    .typeString('<br/> Writing isn\'t one of my skills, that\'s why I started this. Hopefully this will benefit me more than you guys.<br />')
    .pauseFor(300) 
    .typeString('<br/>Find me online: <br />')  
    .typeString('<a href="https://linkedin.com/in/uvindu-harshana-0987b71b6/">LinkedIn</a> <br />')
    .typeString('<a href="https://twitter.com/uvindu_harshana">Twitter</a> <br />')
    .typeString('<a href="https://github.com/d-folt">GitHub</a> <br /><br />')
    .pauseFor(300) 
    .typeString('<img src="img/bline-round.png" alt="bline"width="200px" height="200px"> <br />')
    .pauseFor(300) 
    .typeString('a product of bline.')
    .pauseFor(1000)

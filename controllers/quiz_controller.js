//GET /quizas/question
exports.question = function(req, res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
}

// GET /quizes/answer
exports.answer = function(req, res) {
	if (req.query.respuesta === 'Roma') {
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
}

// Get /author
exports.author = function(req, res) {
	res.render('author', {author: 'Fernando Castaño Torres'});
}

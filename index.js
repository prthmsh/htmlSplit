var cheerio = require('cheerio');
var fs = require('fs');

fs.readFile('input/template.html', 'utf8', dataLoaded);

function dataLoaded(err, data) {
	if (data.length < 1){
		console.log('invalid file')
		return
	}
	var path = 'templates/'
	$ = cheerio.load('' + data + '');
	console.log($('#root').length)
	if ($('#root').length < 1){
		console.log('no root found')
		return;
	}
	if($('#root > div').length < 1){
		console.log('no languages found')
		return;
	}

	$('#root > div').remove();
	//console.log($.html())
	$1 = cheerio.load('' + data + '');
	// console.log($1.html())
	$1('#root > div').each(function (i, elem) {
		var id = $1(elem).attr('id');
		var filename = Math.floor(Date.now() /1000) + '-' + id + '.html';
		var content = $1.html(elem);
		$('#root').append(elem)
		fs.writeFile(path + filename, $.html(), 'utf8', (err) => {
			if (err) console.log(err);
			console.log('Written html to ' + filename);
		});
		$('#root > div').remove();
	});
}

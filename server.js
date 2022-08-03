
const express = require('express');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // post 요청시 필요한 코드



const methodOverride = require('method-override')
app.use(methodOverride('_method')) //method override 하기위한코드

var db;
MongoClient.connect('mongodb+srv://kdw0247:324ehdhks@cluster0.kgri4.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (error, client) {
	if (error) return console.log(error)
	db = client.db('villeasy');
	console.log('db 연결완료')

	app.listen(8080, function () {
		console.log('listening on 8080')
	});

});

//index 경로를 표시하기 위한코드
app.use(express.static(path.join(__dirname + '/villeasy/build')))
//localhost:8080 으로 들어왓을떄 리액트에서 완성한 파일 build한 index.html 보여주기
app.get('/', function (req, res) {
	res.render(path.join(__dirname + '/villeasy/build/index.html'))
});



// db에서 상품 데이터 찾아서 프론트로 보내줌
app.get('/api/product', function (req, res) {
	db.collection('product').find().toArray(function (error, result1) {
		db.collection('Individual').find().toArray(function (error, result2) {
			res.json({ a: result1, b: result2 })
		})
	})
})


//상품발행코드
app.post('/add', function (req, res) {
	db.collection('product').insertOne({
		_id: parseInt(req.body._id),
		imageUrl: req.body.imageUrl,
		title: req.body.title,
		price: parseInt(req.body.price),
		content: req.body.content,
		help: req.body.help,
		standard: req.body.standard,
		photo1: req.body.photo1,
		photo2: req.body.photo2,
		photo3: req.body.photo3
	}, function (error, result) {
		res.redirect('/revise/okpass')
	});
})

app.post('/add2', function (req, res) {
	db.collection('Individual').insertOne({
		_id: parseInt(req.body._id), 
		imageUrl: req.body.imageUrl, 
		title: req.body.title, 
		price: parseInt(req.body.price), 
		content: req.body.content, 
		help: req.body.help, 
		standard: req.body.standard, 
		photo1: req.body.photo1,
		photo2: req.body.photo2, 
		photo3: req.body.photo3
	}, function (error, result) {
		res.redirect('/revise/okpass')
	});
})

//상품삭제코드
app.post('/delete', function (req, res) {
	console.log(req.body)
	req.body._id = parseInt(req.body._id);
	db.collection('product').deleteOne(req.body, function (error, result) {
		console.log('삭제완료');
		res.status(200).send({ message: '성공햇습니다' })

	});
})
app.post('/delete2', function (req, res) {
	console.log(req.body)
	req.body._id = parseInt(req.body._id);
	db.collection('Individual').deleteOne(req.body, function (error, result) {
		console.log('삭제완료');
		res.status(200).send({ message: '성공햇습니다' })
	});
})

//상품수정코드 
app.put('/okpass', function (req, res) {
	console.log(req.body._id)
	req.body._id = parseInt(req.body._id);

	db.collection('product').updateOne({ _id: parseInt(req.body._id) }, {
		$set: {
			_id: req.body._id, imageUrl: req.body.imageUrl, title: req.body.title, price: req.body.price, content: req.body.content, help: req.body.help, standard: req.body.standard, photo1: req.body.photo1, photo2: req.body.photo2, photo3: req.body.photo3
		}
	}, function (error, result) {

		console.log('수정완료!')
	})
})

app.put('/okpass2', function (req, res) {
	console.log(req.body._id)
	req.body._id = parseInt(req.body._id);

	db.collection('Individual').updateOne({ _id: parseInt(req.body._id) }, {
		$set: {
			_id: req.body._id, imageUrl: req.body.imageUrl, title: req.body.title, price: req.body.price, content: req.body.content, help: req.body.help, standard: req.body.standard, photo1: req.body.photo1, photo2: req.body.photo2, photo3: req.body.photo3
		}
	}, function (error, result) {

		console.log('수정완료!')
	})
})


//login 

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');



app.use(session({ secret: 'secretcode', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());




app.post('/login3', function (req, res, next) {
	passport.authenticate('local', function (err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.send('로그인실패했습니다.'); //로그인 실패시 보낼 결과.data
		}
		req.login(user, function (err) {
			if (err) {
				return next(err);
			}
			return res.send(true);
		});
	})(req, res, next);
});

//LocalStrategy 방식 인증 
passport.use(new LocalStrategy({
	usernameField: 'id',
	passwordField: 'pw',
	localStorage: 'true',
	session: true,
	passReqToCallback: false,
}, function (입력한아이디, 입력한비번, done) {
	console.log(입력한아이디, 입력한비번);
	db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
		if (에러) return done(에러)

		if (!결과) return done(null, false, { message: '존재하지않는 아이디입니다.' })
		if (입력한비번 == 결과.pw) {
			return done(null, 결과)
		} else {
			return done(null, false, { message: '비번틀렸어요' })
		}
	})
}));

passport.serializeUser(function (user, done) {
	done(null, user.id)
});
passport.deserializeUser(function (아이디, done) {
	db.collection('login').findOne({ id: 아이디 }, function (에러, 결과) {
		done(null, 결과)
	})
});


app.get('*', function (요청, 응답) {
	응답.sendFile(path.join(__dirname, '/villeasy/build/index.html'));
});
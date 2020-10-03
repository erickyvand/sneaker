import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/GET sneakers', () => {
	it('Should view list of latest sneaker', done => {
		chai
			.request(app)
			.get('/api/sneakers')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});
});

describe('/GET descriptions', () => {
	it('Should view list descriptions', done => {
		chai
			.request(app)
			.get('/api/descriptions')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});
});

describe('/GET select sneaker', () => {
	it('Should be able to select a sneaker to view size availabilty', done => {
		chai
			.request(app)
			.get('/api/sneakers/1')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should validate the url param', done => {
		chai
			.request(app)
			.get('/api/sneakers/1f')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if sneaker exists', done => {
		chai
			.request(app)
			.get('/api/sneakers/99')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});
});

describe('/POST add to cart', () => {
	it('Should be able to add sneaker to cart', done => {
		chai
			.request(app)
			.post('/api/sneakers/13/add/39')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(201);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should validate url param', done => {
		chai
			.request(app)
			.post('/api/sneakers/13f/add/39')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if sneaker ID exists', done => {
		chai
			.request(app)
			.post('/api/sneakers/133/add/39')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if sneaker size exists', done => {
		chai
			.request(app)
			.post('/api/sneakers/13/add/349')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if cart was crated before', done => {
		chai
			.request(app)
			.post('/api/sneakers/13/add/39')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(409);
				res.body.should.have.property('message');
				done();
			});
	});
});

describe('/GET view cart', () => {
	it('Should be able to view all carts', done => {
		chai
			.request(app)
			.get('/api/sneakers/cart/view')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should be able to view cart', done => {
		chai
			.request(app)
			.get('/api/sneakers/1/cart')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should validate url param', done => {
		chai
			.request(app)
			.get('/api/sneakers/1a/cart')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if cart id exists', done => {
		chai
			.request(app)
			.get('/api/sneakers/99/cart')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});
});

describe('/POST payment', () => {
	it('Should make payment for the selected sneaker added to cart', done => {
		const data = {
			cardNumber: '58374958',
		};
		chai
			.request(app)
			.post('/api/payments/1')
			.send(data)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(201);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should validate url param', done => {
		chai
			.request(app)
			.post('/api/payments/1n')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if the cart id exists', done => {
		chai
			.request(app)
			.post('/api/payments/99')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should validate the payment body', done => {
		const data = {
			cardNumber: '58374958v',
		};
		chai
			.request(app)
			.post('/api/payments/1')
			.send(data)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should the check if the payment has been done before', done => {
		const data = {
			cardNumber: '58374958',
		};
		chai
			.request(app)
			.post('/api/payments/1')
			.send(data)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(409);
				res.body.should.have.property('message');
				done();
			});
	});
});

describe('/GET payment', () => {
	it('Should get specific payment', done => {
		chai
			.request(app)
			.get('/api/payments/1/payment')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});
})

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/GET app api', () => {
	it('Should get the home route', done => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check route which does not exists', done => {
		chai
			.request(app)
			.post('/')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});
});

const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

//Get 
it('Consume GET Service', async () => {
    const response = await agent.get('http://localhost:3000/');
  
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.have.property('origin');
  });

//Post 
it('Consume POST Service with query parameters', async () => {
   const query = {
     name: 'Manuel',
   };
   const response = await agent.get('http://localhost:3000/add').query(query);

   expect(response.status).to.equal(statusCode.OK);
   expect(response.body.args).to.eql(query);
  });


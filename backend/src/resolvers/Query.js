
//parent
//args: whichever is being queried
//context: contains the prisma database provided by graphQL server (createServer.js) after it pulls this from prisma
//context can also pass in any other requests ('req') the query has, like the HTTP request header
const Query = {
	dogs: function(parent, args, ctx, info) {
		return [{name: "Jesus"}, {name: "Sunny"}];
	}
};

module.exports = Query;

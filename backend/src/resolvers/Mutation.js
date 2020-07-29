//mutation.js takes the mutation requests made from localhost:4444 written by us, query the db that has our real data of the site residing in the prisma demo server, and determines what gets returned 

const Mutations = {
	// createDog(parent, args, ctx, info) {
	// 	global.dogs = global.dogs || [];
	// 	// create a dog
	// 	const newDog = { name: args.name };
	// 	global.dogs.push(newDog);
	// 	return newDog;
	// },

	
	
	async createItem(parent, args, ctx, info) {
		//check if user is logged in

		//using Prisma CRUDS and add our own custom logic
		// db here refers to the Prisma db 
		const item = await ctx.db.mutation.createItem({
			data: {
				...args,	
			}
 		}, info);
 		return item
	}
};

module.exports = Mutations;

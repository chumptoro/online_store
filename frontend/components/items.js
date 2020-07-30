import React, { Component } from 'react'; 
import {Query} from 'react-apollo';

// utilies https://github.com/apollographql/graphql-tag
//it is basically a template literal we use to start and end a graphql query that we normally cna write in a prisma playground
import gql from 'graphql-tag';


//render prop
const ALL_ITEMS_QUERY = gql`
	query ALL_ITEMS_QUERY {
		items {
			id
			title
			price
			description
			image
			largeImage
		}
	}
`;

//the first curly bracket set of the content of <Query> is a custom way for Query to switch from JSX to just regular JS
export default class Items extends Component {
	render() {
		return (
			<div>
				<p>Items!</p>
				<Query query={ALL_ITEMS_QUERY}>
					{
						({data, error, loading}) => {
						if (loading) return <p>loading...</p>;
						if (error) return <p>Error: {error.message}</p>;
						return <p>Hey the query found {data.items.length} items!</p>
						}

					}
				</Query>
			</div>
		);
	}
}
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { query } from "../models/schema";

interface Boss {
	id: string;
	name: string;
	location: string | null;
	description: string;
	image: string | null;
}

function Bosses() {
	const [bosses, setBosses] = useState<Boss[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		query(`
		{
			boss(limit:20) {
				id
				name
				location
				description
				image
			}
		}
		`)
			.then((data) => {
				setBosses(data.boss);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [setBosses, setLoading]);

	return (
		<Row xs={1} md={2} className="g-4">
			{loading
				? "Loading..."
				: bosses.length
				? bosses.map((boss) => (
						<Col key={boss.id}>
							<Card>
								{boss.image ? <Card.Img variant="top" src={boss.image} /> : ""}
								<Card.Body>
									<Card.Title>{boss.name}</Card.Title>
									<Card.Text>{boss.description}</Card.Text>
									<Card.Footer>{boss.location}</Card.Footer>
								</Card.Body>
							</Card>
						</Col>
				  ))
				: "No bosses found"}
		</Row>
	);
}

export default Bosses;

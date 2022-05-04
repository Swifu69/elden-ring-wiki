import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { query, getRest } from "../models/schema";
import { BtnLink } from "../components/NavLink";
import { useParams } from "react-router-dom";

interface IClass {
	id: string;
	name: string;
	image: string;
	description: string;
	stats: {
		level: string;
		vigor: string;
		mind: string;
		endurance: string;
		strength: string;
		dexterity: string;
		inteligence: string;
		faith: string;
		arcane: string;
	};
}

function Classes() {
	const [classes, setClasses] = useState<IClass[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getRest("classes")
			.then((data) => {
				setClasses(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [setClasses, setLoading]);

	let { classId } = useParams();
	console.log(classId)
	return (
		<Row xs={1} md={2} lg={4} className="g-4">
			{loading
				? "Loading..."
				: classes.length
				? classes.map((role) => (
						<Col key={role.id}>
							<Card>
								{role.image ? <Card.Img variant="top" src={role.image} /> : ""}
								<Card.Body>
									<Card.Title>{role.name}</Card.Title>
									<Card.Text>{role.description}</Card.Text>
									<BtnLink
										name={role.name}
										link={`/classes/${role.id}`}
										variant="primary"
									></BtnLink>
								</Card.Body>
							</Card>
						</Col>
				  ))
				: "No Classes found"}
		</Row>
	);
}

export default Classes;

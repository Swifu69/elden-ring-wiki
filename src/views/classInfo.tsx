import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { BtnLink } from "../components/NavLink";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { query, getRest } from "../models/schema";

interface getClass {
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

function classInfo() {
	const params: any = useParams();

	const [classState, setClass] = useState<getClass>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getRest("classes", params.classId)
			.then((data) => {
				setClass(data);
				setLoading(false);
				console.log(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [setClass, setLoading]);

	console.log("data", classState);

	return (
		<Container>
			{loading && !classState ? (
				"loading..."
			) : (
				<Container>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={classState?.image} />
							<Card.Body>
								<Card.Title>{classState?.name}</Card.Title>
								<Card.Text>{classState?.description}</Card.Text>
							</Card.Body>
							<Card.Footer>Start Level: {classState?.stats.level} </Card.Footer>
						</Card>
					</Col>

					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>Stat</th>
								<th>Stat Value</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Vigor</td>
								<td colSpan={2}>{classState?.stats.vigor}</td>
							</tr>
							<tr>
								<td>Mind</td>
								<td colSpan={2}>{classState?.stats.mind}</td>
							</tr>
							<tr>
								<td>Endurance</td>
								<td colSpan={2}>{classState?.stats.endurance}</td>
							</tr>
							<tr>
								<td>Strength</td>
								<td colSpan={2}>{classState?.stats.strength}</td>
							</tr>
							<tr>
								<td>Dexterity</td>
								<td colSpan={2}>{classState?.stats.dexterity}</td>
							</tr>
							<tr>
								<td>Intelligence</td>
								<td colSpan={2}>{classState?.stats.inteligence}</td>
							</tr>
							<tr>
								<td>Faith</td>
								<td colSpan={2}>{classState?.stats.faith}</td>
							</tr>
							<tr>
								<td>Arcane</td>
								<td colSpan={2}>{classState?.stats.arcane}</td>
							</tr>
						</tbody>
					</Table>
				</Container>
			)}
		</Container>
	);
}

export default classInfo;

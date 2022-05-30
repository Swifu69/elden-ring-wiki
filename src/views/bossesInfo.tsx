import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRest } from "../models/schema";
import Loading from "../components/Loading"

interface getClass {
	id: string;
	name: string;
	image: string;
	region: string;
	location: string;
	description: string;
	drops: string[];
	healthPoints: string;
}

function bossesInfo() {
	const params: any = useParams();

	const [boss, setClass] = useState<getClass>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getRest("bosses", params.bossId)
			.then((data) => {
				setClass(data);
				console.log(data);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [setClass, setLoading]);
	return (
		<Container>
			{loading && !boss ? (
				<Loading />
			) : (
				<Row>
					<Col>
						<Card>
							<Card.Img variant="top" src={boss?.image} />
							<Card.Body>
								<Card.Title>{boss?.name}</Card.Title>
								<Card.Text>{boss?.description}</Card.Text>
							</Card.Body>
							<Card.Footer>Start Level: {boss?.name} </Card.Footer>
						</Card>
					</Col>
					<Col md={6} lg={8}>
                        <br />
						<Table striped bordered hover variant="dark">
							<thead>
								<tr>
									<th>Stat</th>
									<th>Stat Level</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Region</td>
									<td colSpan={2}>{boss?.region}</td>
								</tr>
								<tr>
									<td>Location</td>
									<td colSpan={2}>{boss?.location}</td>
								</tr>
								<tr>
									<td>Health Points</td>
									<td colSpan={2}>{boss?.healthPoints}</td>
								</tr>
							</tbody>
						</Table>
						<br />
						<Table striped bordered hover variant="dark">
							<thead>
								<tr>
									<th>Drops</th>
									<th>Items</th>
								</tr>
							</thead>
							<tbody>
								{
									<>
										{boss?.drops && boss?.drops.length
											? boss?.drops.map((drop, index) => (
													<tr>
														<td>{index + 1}</td>
														<td>{drop}</td>
													</tr>
											  ))
											: "No boss available"}
									</>
								}
							</tbody>
						</Table>
					</Col>
				</Row>
			)}
		</Container>
	);
}

export default bossesInfo;

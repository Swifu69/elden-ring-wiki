import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BtnLink } from "../components/NavLink";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { query, getRest } from "../models/schema";

const params: any = useParams();


interface getClass{
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
	const [classes, setClasses] = useState<getClass[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getRest("classes")
			.then((data) => {
				setClasses(data);
				setLoading(false);
                console.log(data)
			})
			.catch((err) => {
				console.error(err);
			});
	}, [setClasses, setLoading]);
}

function classInfo(){

    
    console.log("Params", params)
   

    return(
        <Col key={params.id}>
        <Card>
            {params.image ? <Card.Img variant="top" src={params.image} /> : ""}
            <Card.Body>
                <Card.Title>{params.name}</Card.Title>
                <Card.Text>{params.description}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}


export default classInfo
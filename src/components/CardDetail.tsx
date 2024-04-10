import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

export const CardDetail = ({
	image,
	name,
}: {
	image: string;
	name: string;
}) => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				marginTop: "90px",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Card sx={{ maxWidth: 800 }}>
				<CardActionArea>
					<CardMedia component="img" image={image} alt="green iguana" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
							labore pariatur, est esse molestias nostrum beatae, deserunt animi
							facere sit praesentium reiciendis dolorum, quo voluptatum
							assumenda vitae? Nesciunt ducimus rerum obcaecati voluptatum nam
							quo aspernatur ex esse laudantium praesentium, magnam adipisci
							reiciendis quos aut sunt vero hic voluptates perspiciatis. Saepe!
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Container>
	);
};

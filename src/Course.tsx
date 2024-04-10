import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Course = ({
	image,
	title,
	content,
}: {
	image: string;
	title: string;
	content: string;
}) => {
	return (
		<Card sx={{ maxWidth: 800 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image={image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{content}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="outlined">
					<NavLink
						style={{ textDecoration: "none" }}
						to={title.replace(/\s+/g, "").toLowerCase()}>
						{title}
					</NavLink>
				</Button>
			</CardActions>
		</Card>
	);
};

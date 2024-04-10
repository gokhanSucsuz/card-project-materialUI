import { Box, Container, Grid, Toolbar } from "@mui/material";
import { Course } from "../Course";
import Angular from "../images/angular.jpg";
import Bootstrap5 from "../images/bootstrap5.png";
import Csharp from "../images/ccsharp.png";
import Kompleweb from "../images/kompleweb.jpg";

export const Home = () => {
	return (
		<Container maxWidth="lg">
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} lg={4} xl={3}>
						<Course
							image={Angular}
							title="Angular"
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores rerum alias magnam enim atque, maxime debitis unde at? Eveniet enim sequi doloremque magni, ipsam maiores voluptatum est laudantium unde dicta eligendi, eius architecto, vero quibusdam placeat. Voluptas fugit reprehenderit beatae deleniti eaque asperiores cum laudantium amet aut, unde earum!"
						/>
					</Grid>
					<Grid item xs={12} sm={6} lg={4} xl={3}>
						<Course
							image={Bootstrap5}
							title="Bootstrap5"
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores rerum alias magnam enim atque, maxime debitis unde at? Eveniet enim sequi doloremque magni, ipsam maiores voluptatum est laudantium unde dicta eligendi, eius architecto, vero quibusdam placeat. Voluptas fugit reprehenderit beatae deleniti eaque asperiores cum laudantium amet aut, unde earum!"
						/>
					</Grid>
					<Grid item xs={12} sm={6} lg={4} xl={3}>
						<Course
							image={Csharp}
							title="Csharp"
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores rerum alias magnam enim atque, maxime debitis unde at? Eveniet enim sequi doloremque magni, ipsam maiores voluptatum est laudantium unde dicta eligendi, eius architecto, vero quibusdam placeat. Voluptas fugit reprehenderit beatae deleniti eaque asperiores cum laudantium amet aut, unde earum!"
						/>
					</Grid>
					<Grid item xs={12} sm={6} lg={4} xl={3}>
						<Course
							image={Kompleweb}
							title="Komple Web"
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores rerum alias magnam enim atque, maxime debitis unde at? Eveniet enim sequi doloremque magni, ipsam maiores voluptatum est laudantium unde dicta eligendi, eius architecto, vero quibusdam placeat. Voluptas fugit reprehenderit beatae deleniti eaque asperiores cum laudantium amet aut, unde earum!"
						/>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

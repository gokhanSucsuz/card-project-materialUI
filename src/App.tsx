import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Menu } from "@mui/icons-material";
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
} from "@mui/material";
import Angular from "./images/angular.jpg";
import Bootstrap5 from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { CardDetail } from "./components/CardDetail";
import { Home } from "./pages/Home";

const drawerWidth = 240;
const navItems = ["Home", "Angular", "Bootstrap5", "Csharp", "Kompleweb"];

export default function App() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen((prevState: boolean) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI Card Project
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText
								primary={
									<NavLink
										key={item}
										to={item === "Home" ? "/" : item}
										style={{ color: "GrayText", textDecoration: "none" }}>
										{item}
									</NavLink>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/angular"
					element={<CardDetail image={Angular} name="Angular" />}
				/>
				<Route
					path="/bootstrap5"
					element={<CardDetail image={Bootstrap5} name="Bootstrap5" />}
				/>
				<Route
					path="/csharp"
					element={<CardDetail image={Csharp} name="Csharp" />}
				/>
				<Route
					path="/kompleweb"
					element={<CardDetail image={Kompleweb} name="Kompleweb" />}
				/>
			</Routes>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar component="nav">
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}>
							<Menu />
							<Typography variant="body1" mx={3}>
								MUI Card Project
							</Typography>
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
							MUI Card Project
						</Typography>
						<Stack
							direction="row"
							spacing={4}
							sx={{ display: { xs: "none", md: "block" } }}>
							{navItems.map((item, index) => (
								<NavLink
									key={index}
									to={item === "Home" ? "/" : item}
									style={{ color: "white", textDecoration: "none" }}>
									{item}
								</NavLink>
							))}
						</Stack>
					</Toolbar>
				</AppBar>
				<nav>
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}>
						{drawer}
					</Drawer>
				</nav>
			</Box>
		</>
	);
}

import * as React from 'react';
import "./style.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Picture_one from "../../assets/img/1.webp"
import Picture_two from "../../assets/img/3.webp"
import Picture_thre from "../../assets/img/5.webp"
import Picture_four from "../../assets/img/2.webp"
import Picture_five from "../../assets/img/4.webp"
import Picture_six from "../../assets/img/6.jpg"

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
	return (
		<Box sx={{ width: '100%' }}>
			<Grid justifyContent="center" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={9} sm={9} md={3.5} lg={3.5}>
					<Box className='zoom' sx={{ textAlign: 'center' }} >
						<img className='img1' src={Picture_one} />
						<Button sx={{ marginTop: '-40%', "&:hover": { background: '#e65540', color: 'white' }, transition: "0.4s", color: '#333', fontSize: '16px', borderRadius: '0px', background: '#fffffff2', paddingLeft: '15%', paddingRight: '15%', paddingTop: '3%', paddingBottom: '3%' }} >Dresses</Button>
					</Box>
				</Grid>
				<Grid item xs={9} sm={9} md={3.5} lg={3.5}>
					<Box className='zoom1' sx={{ textAlign: 'center', height: { xs: '100%', sm: '100%', md: '67%', lg: '67%' } }} >
						<img className='img1' src={Picture_two} />
						<Button sx={{ marginTop: '-40%', "&:hover": { background: '#e65540', color: 'white' }, transition: "0.4s", color: '#333', fontSize: '16px', borderRadius: '0px', background: '#fffffff2', paddingLeft: '15%', paddingRight: '15%', paddingTop: '3%', paddingBottom: '3%' }} >WATCHES</Button>
					</Box>
				</Grid>
				<Grid sx={{ marginTop: { xs: '0%', sm: '0%', md: '0', lg: '0' } }} item xs={9} sm={9} md={3.5} lg={3.5}>
					<Box className='zoom' sx={{ textAlign: 'center' }} >
						<img className='img1' src={Picture_five} />
						<Button sx={{ marginTop: '-40%', "&:hover": { background: '#e65540', color: 'white' }, transition: "0.4s", color: '#333', fontSize: '16px', borderRadius: '0px', background: '#fffffff2', paddingLeft: '15%', paddingRight: '15%', paddingTop: '3%', paddingBottom: '3%' }} >BAGS</Button>
					</Box>
				</Grid>
				<Grid item xs={9} sm={9} md={3.5} lg={3.5}>
					<Box className='zoom' sx={{ textAlign: 'center' }} >
						<img className='img1' src={Picture_four} />
						<Button sx={{ marginTop: '-40%', "&:hover": { background: '#e65540', color: 'white' }, transition: "0.4s", color: '#333', fontSize: '16px', borderRadius: '0px', background: '#fffffff2', paddingLeft: '15%', paddingRight: '15%', paddingTop: '3%', paddingBottom: '3%' }} >SUNGLASSES</Button>
					</Box>
				</Grid>
				<Grid itemxs={9} sm={9} md={3.5} lg={3.5}>
					<Box className='zoom' sx={{ textAlign: 'center', width: { xs: '73%', sm: '97%', md: '94%', lg: '94%' }, marginLeft: { xs: '14.3%', sm: '2.5%', md: '6%', lg: '6%' }, marginTop: { xs: "0", sm: '0', md: '-34%', lg: '-34%' }, height: { xs: '96%', sm: '96%', md: '132%', lg: '132%' } }} >
						<img className='img1' src={Picture_thre} />
						<Button sx={{ marginTop: '-40%', "&:hover": { background: '#e65540', color: 'white' }, transition: "0.4s", color: '#333', fontSize: '16px', borderRadius: '0px', background: '#fffffff2', paddingLeft: '15%', paddingRight: '15%', paddingTop: '3%', paddingBottom: '3%' }} >FOOTERWEAR</Button>
					</Box>
				</Grid>
				<Grid item xs={9} sm={9} md={3.5} lg={3.5}>
					<Box className='zoom' sx={{ textAlign: 'center' }} >
						<img className='img1' src={Picture_six} />
						<Button sx={{ marginTop: '-40%', "&:hover": { background: '#e65540', color: 'white' }, transition: "0.4s", color: '#333', fontSize: '16px', borderRadius: '0px', background: '#fffffff2', paddingLeft: '15%', paddingRight: '15%', paddingTop: '3%', paddingBottom: '3%' }} >ACCESSORIES</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

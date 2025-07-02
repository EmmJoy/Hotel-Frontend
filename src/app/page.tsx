"use client";
import React from "react";
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Avatar, Container, Grid, Paper, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider, Card, CardMedia, CardContent, CardActions, List, ListItem, ListItemText, Collapse, useMediaQuery, Stack, Chip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const roomCards = Array(6).fill({
  title: "Superior King Room",
  desc: "1 extra-large double bed\n30m²\nBalcony\nAir conditioning\nPrivate bathroom",
  price: "$120",
  img: "/room.jpg",
});

const hotel = {
  name: "El Amanecer Hotel",
  address: "123 Beachside Ave, Miami, FL, USA",
  rating: 4.5,
  reviews: 234,
  images: [
 
  
 
   
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  ],
  
  
  tags: ["Beachfront", "Free WiFi", "Breakfast included"],
};

export default function Home() {
  const [imgIdx, setImgIdx] = React.useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");
  const handlePrev = () => setImgIdx((prev) => (prev === 0 ? hotel.images.length - 1 : prev - 1));
  const handleNext = () => setImgIdx((prev) => (prev === hotel.images.length - 1 ? 0 : prev + 1));

  return (
    <Box sx={{ bgcolor: '#f7f7fa', minHeight: '100vh', pb: 4 }}>
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        {/* Header Section */}
        <Grid container spacing={2} alignItems="center" mb={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{
                fontSize: { xs: 32, md: 48 },
                fontFamily: 'Playfair Display, serif',
                background: 'linear-gradient(90deg, #232526 0%, #414345 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 24px rgba(35, 37, 38, 0.25)',
                letterSpacing: 2,
                mb: 1,
                mt: 1,
                lineHeight: 1.1,
                display: 'inline-block',
                color: '#111',
              }}
            >
              {hotel.name}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <StarIcon sx={{ color: "#FFD700" }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, fontSize: 16 }}>
                {hotel.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 15 }}>
                ({hotel.reviews} reviews)
              </Typography>
            </Stack>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ fontSize: 16 }}>
              {hotel.address}
            </Typography>
            <Stack direction="row" spacing={1} mb={2}>
              {hotel.tags.map((tag) => (
                <Chip key={tag} label={tag} color="primary" size="small" sx={{ fontWeight: 500, fontSize: 13 }} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Button variant="contained" color="primary" size="large" sx={{ minWidth: 140, fontWeight: 600, fontSize: 16, mr: 2, boxShadow: 1 }}>
              Reserve
            </Button>
            <Button variant="outlined" color="primary" size="large" sx={{ minWidth: 120, fontWeight: 600, fontSize: 16 }}>
              Share
            </Button>
          </Grid>
        </Grid>

        {/* Image Gallery Slider */}
        <Box sx={{ position: 'relative', mt: 2, mb: 4 }}>
          <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={`${hotel.images[imgIdx]}?auto=format&fit=crop&w=1200&q=80`}
              alt={`Hotel image ${imgIdx + 1}`}
              sx={{ width: '100%', height: { xs: 220, sm: 350, md: 420 }, objectFit: 'cover' }}
            />
          </Card>
          <IconButton
            onClick={handlePrev}
            sx={{ position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)', bgcolor: 'white', boxShadow: 1, zIndex: 2 }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)', bgcolor: 'white', boxShadow: 1, zIndex: 2 }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
            {hotel.images.map((img, idx) => (
              <Box
                key={img}
                onClick={() => setImgIdx(idx)}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: imgIdx === idx ? '2px solid #1976d2' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'border 0.2s',
                }}
              >
                <img src={`${img}?auto=format&fit=crop&w=100&q=60`} alt={`thumb-${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Availability Section (mimicking the screenshot) */}
        <Paper sx={{ p: 3, mb: 4, borderRadius: 3, boxShadow: 2, overflow: 'hidden' }}>
          <Typography variant="h6" fontWeight={700} sx={{ fontSize: 18, mb: 2, color: '#111' }}>
            Availability
            </Typography>
          <Box display="flex" gap={2} mb={2}>
            <Box>
              <Typography variant="body2" fontWeight={600}>Check-in</Typography>
              <Button variant="outlined" size="small">Tue, 25 June 2024</Button>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600}>Check-Out</Typography>
              <Button variant="outlined" size="small">Sat, 29 June 2024</Button>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600}>Room & Guest</Typography>
              <Button variant="outlined" size="small">2 Adults · 0 Children · 1 Room</Button>
            </Box>
            <Button variant="contained" color="primary" sx={{ alignSelf: 'end', minWidth: 120 }}>Search</Button>
          </Box>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, marginTop: 16 }}>
              <thead>
                <tr style={{ background: '#f7f7fa', borderBottom: '1px solid #e0e0e0' }}>
                <th style={{ padding: 16, textAlign: 'left', fontWeight: 600 }}>Room type</th>
                <th style={{ padding: 16, textAlign: 'center', fontWeight: 600 }}>Number of guests</th>
                <th style={{ padding: 16, textAlign: 'center', fontWeight: 600 }}>Price for 1 week</th>
                <th style={{ padding: 16, textAlign: 'center', fontWeight: 600 }}>Your choices</th>
                <th style={{ padding: 16, textAlign: 'center', fontWeight: 600 }}>Select rooms</th>
                <th style={{ padding: 16, textAlign: 'center', fontWeight: 600 }}>Your choices</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: 16 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=60&q=80" alt="room" style={{ width: 60, borderRadius: 8, marginRight: 8 }} />
                    <Box>
                      <Typography fontWeight={600}>Deluxe Double Room</Typography>
                      <Typography variant="body2" color="text.secondary">1 king bed · 1200 sq ft</Typography>
                      <Stack direction="row" spacing={1} mt={1}>
                        <Chip label="Air conditioning" size="small" />
                        <Chip label="Bathroom" size="small" />
                        <Chip label="City view" size="small" />
                        <Chip label="Gym" size="small" />
                      </Stack>
                    </Box>
                  </Box>
                </td>
                <td style={{ padding: 16, textAlign: 'center' }}>
                  <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                    <Avatar sx={{ width: 24, height: 24 }}>2</Avatar>
                    <Typography variant="body2">adults</Typography>
                    <Avatar sx={{ width: 24, height: 24 }}>1</Avatar>
                    <Typography variant="body2">child</Typography>
                  </Stack>
                </td>
                <td style={{ padding: 16, textAlign: 'center', fontWeight: 700, color: '#1976d2' }}>$282</td>
                <td style={{ padding: 16, textAlign: 'center', color: '#388e3c', fontWeight: 600 }}>
                  Breakfast included<br />
                  <span style={{ color: '#d32f2f', fontWeight: 500 }}>Only 4 rooms left</span>
                </td>
                <td style={{ padding: 16, textAlign: 'center' }}>
                  <Button variant="outlined" size="small">-</Button>
                  <span style={{ margin: '0 8px' }}>1</span>
                  <Button variant="outlined" size="small">+</Button>
                </td>
                <td style={{ padding: 16, textAlign: 'center' }}>
                  <Button variant="contained" size="small">Reserve</Button>
                </td>
              </tr>
              {/* Repeat for more room types as in the screenshot */}
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: 16 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=60&q=80" alt="room" style={{ width: 60, borderRadius: 8, marginRight: 8 }} />
                    <Box>
                      <Typography fontWeight={600}>Deluxe Double Room</Typography>
                      <Typography variant="body2" color="text.secondary">1 king bed · 1200 sq ft</Typography>
                      <Stack direction="row" spacing={1} mt={1}>
                        <Chip label="Air conditioning" size="small" />
                        <Chip label="Bathroom" size="small" />
                        <Chip label="City view" size="small" />
                        <Chip label="Gym" size="small" />
                      </Stack>
                    </Box>
                  </Box>
                </td>
                <td style={{ padding: 16, textAlign: 'center' }}>
                  <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                    <Avatar sx={{ width: 24, height: 24 }}>2</Avatar>
                    <Typography variant="body2">adults</Typography>
                    <Avatar sx={{ width: 24, height: 24 }}>1</Avatar>
                    <Typography variant="body2">child</Typography>
                  </Stack>
                </td>
                <td style={{ padding: 16, textAlign: 'center', fontWeight: 700, color: '#1976d2' }}>$282</td>
                <td style={{ padding: 16, textAlign: 'center', color: '#388e3c', fontWeight: 600 }}>
                  Breakfast included<br />
                  <span style={{ color: '#d32f2f', fontWeight: 500 }}>Only 4 rooms left</span>
                  </td>
                  <td style={{ padding: 16, textAlign: 'center' }}>
                  <Button variant="outlined" size="small">-</Button>
                  <span style={{ margin: '0 8px' }}>1</span>
                  <Button variant="outlined" size="small">+</Button>
                  </td>
                  <td style={{ padding: 16, textAlign: 'center' }}>
                  <Button variant="contained" size="small">Reserve</Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 16 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=60&q=80" alt="room" style={{ width: 60, borderRadius: 8, marginRight: 8 }} />
                    <Box>
                      <Typography fontWeight={600}>Deluxe Double Room</Typography>
                      <Typography variant="body2" color="text.secondary">1 king bed · 1200 sq ft</Typography>
                      <Stack direction="row" spacing={1} mt={1}>
                        <Chip label="Air conditioning" size="small" />
                        <Chip label="Bathroom" size="small" />
                        <Chip label="City view" size="small" />
                        <Chip label="Gym" size="small" />
                      </Stack>
                    </Box>
                  </Box>
                </td>
                <td style={{ padding: 16, textAlign: 'center' }}>
                  <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                    <Avatar sx={{ width: 24, height: 24 }}>2</Avatar>
                    <Typography variant="body2">adults</Typography>
                    <Avatar sx={{ width: 24, height: 24 }}>1</Avatar>
                    <Typography variant="body2">child</Typography>
                  </Stack>
                </td>
                <td style={{ padding: 16, textAlign: 'center', fontWeight: 700, color: '#1976d2' }}>$282</td>
                <td style={{ padding: 16, textAlign: 'center', color: '#388e3c', fontWeight: 600 }}>
                  Breakfast included<br />
                  <span style={{ color: '#d32f2f', fontWeight: 500 }}>Only 4 rooms left</span>
                  </td>
                  <td style={{ padding: 16, textAlign: 'center' }}>
                  <Button variant="outlined" size="small">-</Button>
                  <span style={{ margin: '0 8px' }}>1</span>
                  <Button variant="outlined" size="small">+</Button>
                  </td>
                  <td style={{ padding: 16, textAlign: 'center' }}>
                  <Button variant="contained" size="small">Reserve</Button>
                  </td>
                </tr>
              </tbody>
            </table>
        </Paper>

        {/* About this property & Explore the Area */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#111' }}>
            About this property
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 700 }}>
            The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.
          </Typography>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} md={7}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: '#111' }}>
                Explore the Area
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ minWidth: 120, flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1, color: '#111' }}>Restaurants & cafes</Typography>
                  <Typography variant="body2" color="text.secondary">Blue Cafe<br/>Blue Cafe<br/>Blue Cafe</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>1.4 km</Typography>
                </Box>
                <Box sx={{ minWidth: 120, flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1, color: '#111' }}>Shops & Markets</Typography>
                  <Typography variant="body2" color="text.secondary">Central Mall<br/>Central Mall<br/>Central Mall</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>1.4 km</Typography>
                </Box>
                <Box sx={{ minWidth: 120, flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1, color: '#111' }}>Beaches</Typography>
                  <Typography variant="body2" color="text.secondary">Les Dunes Beach<br/>Les Dunes Beach<br/>Les Dunes Beach</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>1.4 km</Typography>
                </Box>
                <Box sx={{ minWidth: 120, flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1, color: '#111' }}>Public transport</Typography>
                  <Typography variant="body2" color="text.secondary">Train - Riverdale Central Station<br/>Metro - Cityline Metro Hub<br/>Metro - Cityline Metro Hub</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>1.4 km</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: '100%', maxWidth: 340, borderRadius: 3, overflow: 'hidden', boxShadow: 3, mb: 1 }}>
                  <iframe
                    title="Hotel Area Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.187234833635!2d3.0587566849732!3d36.77667998362606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadf7e7e7e7e7%3A0x7e7e7e7e7e7e7e7e!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1710000000000!5m2!1sen!2sdz"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
                <Button variant="text" sx={{ color: '#1976d2', fontWeight: 600, fontSize: 16, textTransform: 'none' }}>Explore the Area</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* What Our Guests Say */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#111' }}>
              What Our Guests Say
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ color: '#1976d2', fontWeight: 500, cursor: 'pointer' }}>See All.</Typography>
              <ArrowForwardIosIcon sx={{ fontSize: 16, color: '#1976d2' }} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ border: '1px solid #eee', bgcolor: '#fff' }}>
              <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, flex: 1 }}>
              {/* Review Card 1 */}
              <Paper sx={{ minWidth: 340, maxWidth: 380, p: 3, borderRadius: 3, boxShadow: 1, flex: '0 0 auto' }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, mb: 1, color: '#222' }}>
                  “Breathtaking Views and Luxury Comfort!”
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  {[1,2,3,4,5].map((n) => (
                    <StarIcon key={n} sx={{ color: '#FFD700', fontSize: 20 }} />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                  <Typography variant="body2" fontWeight={600} sx={{ color: '#222' }}>— Sofia B., France</Typography>
                  <Typography variant="body2" color="text.secondary">23.10.2024</Typography>
                </Box>
              </Paper>
              {/* Review Card 2 */}
              <Paper sx={{ minWidth: 340, maxWidth: 380, p: 3, borderRadius: 3, boxShadow: 1, flex: '0 0 auto' }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, mb: 1, color: '#222' }}>
                  “Exceptional Stay with Excellent Amenities”
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  The Executive Suite provided an exceptional experience. The room was spotless, equipped with everything you could need. The marble bathroom with its bathtub: pure luxury. The location is perfect for exploring the city, and the staff truly make you feel welcome.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  {[1,2,3,4,5].map((n) => (
                    <StarIcon key={n} sx={{ color: '#FFD700', fontSize: 20 }} />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                  <Typography variant="body2" fontWeight={600} sx={{ color: '#222' }}>— Youssef R., Morocco</Typography>
                  <Typography variant="body2" color="text.secondary">23.10.2024</Typography>
                </Box>
              </Paper>
            </Box>
            <IconButton sx={{ border: '1px solid #eee', bgcolor: '#fff' }}>
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>
        {/* Policies */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: '#111' }}>
            Policies
          </Typography>
          <Paper sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #eee', boxShadow: 0 }}>
            {/* Check-in */}
            <Box sx={{ display: 'flex', px: 3, py: 2, alignItems: 'flex-start', borderBottom: '1px solid #eee' }}>
              <Box sx={{ flex: 1, minWidth: 160 }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, color: '#222' }}>Check-in</Typography>
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography fontWeight={500} sx={{ color: '#222' }}>Available 24 hours</Typography>
                <Typography variant="body2" color="text.secondary">Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.</Typography>
              </Box>
            </Box>
            {/* Check-out */}
            <Box sx={{ display: 'flex', px: 3, py: 2, alignItems: 'flex-start', borderBottom: '1px solid #eee' }}>
              <Box sx={{ flex: 1, minWidth: 160 }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, color: '#222' }}>Check-out</Typography>
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography fontWeight={500} sx={{ color: '#222' }}>Available 24 hours</Typography>
              </Box>
            </Box>
            {/* Cancellation/prepayment */}
            <Box sx={{ display: 'flex', px: 3, py: 2, alignItems: 'flex-start', borderBottom: '1px solid #eee' }}>
              <Box sx={{ flex: 1, minWidth: 160 }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, color: '#222' }}>Cancellation/ prepayment</Typography>
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Cancellation and prepayment policies vary according to accommodation type.<br />
                  Please check what <span style={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer' }}>conditions</span> may apply to each option when making your selection.
                </Typography>
              </Box>
            </Box>
            {/* Children and beds */}
            <Box sx={{ display: 'flex', px: 3, py: 2, alignItems: 'flex-start', borderBottom: '1px solid #eee' }}>
              <Box sx={{ flex: 1, minWidth: 160 }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, color: '#222' }}>Children and beds</Typography>
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography variant="body2" sx={{ color: '#222', fontWeight: 600, mb: 0.5 }}>Child policies</Typography>
                <Typography variant="body2" color="text.secondary">
                  Children of any age are welcome.<br />
                  Children 12 years and above will be charged as adults at this property.<br />
                  To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.<br /><br />
                  <span style={{ fontWeight: 600, color: '#222' }}>Cot and extra bed policies</span><br />
                  The number of extra beds allowed is dependent on the option you choose.<br />
                  Please check your selected option for more information.<br />
                  There are no cots available at this property.<br />
                  All extra beds are subject to availability.
                </Typography>
              </Box>
            </Box>
            {/* No age restriction */}
            <Box sx={{ display: 'flex', px: 3, py: 2, alignItems: 'flex-start', borderBottom: '1px solid #eee' }}>
              <Box sx={{ flex: 1, minWidth: 160 }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, color: '#222' }}>No age restriction</Typography>
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography variant="body2" color="text.secondary">There is no age requirement for check-in</Typography>
              </Box>
            </Box>
            {/* Pets */}
            <Box sx={{ display: 'flex', px: 3, py: 2, alignItems: 'flex-start', borderBottom: '1px solid #eee' }}>
              <Box sx={{ flex: 1, minWidth: 160 }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, color: '#222' }}>Pets</Typography>
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography variant="body2" color="text.secondary">Pets are not allowed.</Typography>
              </Box>
            </Box>
            {/* Cash only */}
            <Box sx={{ display: 'flex', px: 3, py: 2, alignItems: 'flex-start' }}>
              <Box sx={{ flex: 1, minWidth: 160 }}>
                <Typography fontWeight={600} sx={{ fontSize: 18, color: '#222' }}>Cash only</Typography>
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography variant="body2" color="text.secondary">This property only accepts cash payments.</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Room Cards Carousel */}
        <Box mt={4}>
          <Typography variant="h5" fontWeight={700} mb={2} sx={{ color: '#111' }}>
            Rooms you may like
          </Typography>
          <Swiper spaceBetween={16} slidesPerView={isMobile ? 1 : 3} style={{ paddingBottom: 32 }}>
            {roomCards.map((room, idx) => (
              <SwiperSlide key={idx}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardMedia component="img" height="160" image="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" alt={room.title} />
                  <CardContent>
                    <Typography variant="h6">{room.title}</Typography>
                    <Typography variant="body2" color="text.secondary" whiteSpace="pre-line">
                      {room.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small" variant="contained">Book</Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* New Footer */}
        <Box component="footer" sx={{ bgcolor: '#003580', color: '#fff', mt: 8, pt: 6, pb: 2, borderTop: 'none' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Left Side */}
              <Grid item xs={12} md={5}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ width: 48, height: 48, bgcolor: '#fff', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography variant="h6" sx={{ color: '#003580', fontWeight: 700, letterSpacing: 1 }}>DAYF</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={700} sx={{ color: '#fff', mb: 0 }}>BOOKING</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="#fff" sx={{ mb: 2, maxWidth: 340 }}>
                  [App Name] makes booking your next stay easy, affordable, and stress-free. With thousands of hotels worldwide, exclusive deals, and secure payment options, we're here to help you find the perfect place to stay, every time.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <IconButton size="small" sx={{ color: '#fff' }}><i className="fab fa-twitter" /></IconButton>
                  <IconButton size="small" sx={{ color: '#fff' }}><i className="fab fa-facebook" /></IconButton>
                  <IconButton size="small" sx={{ color: '#fff' }}><i className="fab fa-instagram" /></IconButton>
                  <IconButton size="small" sx={{ color: '#fff' }}><i className="fab fa-github" /></IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <i className="fas fa-map-marker-alt" style={{ color: '#fff' }} />
                  <Typography variant="body2" color="#fff">123 Travel St, Suite 100, City, Country</Typography>
                </Box>
              </Grid>
              {/* Right Side */}
              <Grid item xs={12} md={7}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Box sx={{ minWidth: 120, flex: 1 }}>
                    <Typography variant="body2" fontWeight={600} sx={{ color: '#fff', mb: 1 }}>Home</Typography>
                    <Typography variant="body2" fontWeight={600} sx={{ color: '#fff', mb: 1 }}>Hotels</Typography>
                    <Typography variant="body2" fontWeight={600} sx={{ color: '#fff', mb: 1 }}>Deals</Typography>
                    <Typography variant="body2" fontWeight={600} sx={{ color: '#fff', mb: 1 }}>About Us</Typography>
                    <Typography variant="body2" fontWeight={600} sx={{ color: '#fff', mb: 1 }}>Contact Us</Typography>
                  </Box>
                  <Box sx={{ minWidth: 120, flex: 1 }}>
                    <Typography variant="body2" sx={{ color: '#fff', mb: 1 }}><i className="fas fa-phone-alt" style={{ marginRight: 8 }} /> +1 (555) 123-4567</Typography>
                    <Typography variant="body2" sx={{ color: '#fff', mb: 1 }}><i className="fas fa-envelope" style={{ marginRight: 8 }} /> support@[yourappname].com</Typography>
                    <Typography variant="body2" sx={{ color: '#fff', mb: 1, mt: 2 }}>Download Our App</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton size="small" sx={{ color: '#fff', border: '1px solid #fff', borderRadius: 1 }}><i className="fab fa-google-play" /></IconButton>
                      <IconButton size="small" sx={{ color: '#fff', border: '1px solid #fff', borderRadius: 1 }}><i className="fab fa-apple" /></IconButton>
                    </Box>
                  </Box>
                  <Box sx={{ minWidth: 120, flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
                    <Typography variant="body2" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.12)', px: 1.5, py: 0.5, borderRadius: 1, fontWeight: 500, fontSize: 14, mt: { xs: 2, sm: 0 } }}>
                      © 2023, All Rights Reserved
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}

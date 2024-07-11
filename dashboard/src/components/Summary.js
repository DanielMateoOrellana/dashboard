import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import sunrise from '../assets/sunrise.jpeg';
export default function Summary() {
    return (_jsx(Card, { sx: { maxWidth: 800 }, children: _jsxs(CardActionArea, { children: [_jsx(CardMedia, { component: "img", height: "140", image: sunrise, alt: "Amanecer" }), _jsxs(CardContent, { children: [_jsx(Typography, { gutterBottom: true, component: "h2", variant: "h6", color: "primary", children: "Amanecer" }), _jsx(Typography, { component: "p", variant: "h4", children: "05:19:08" }), _jsx(Typography, { color: "text.secondary", sx: { flex: 1 }, children: "en 17 Junio, 2024" })] })] }) }));
}

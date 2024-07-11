import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, useTheme } from '@mui/material';
const Indicator = ({ title, subtitle, value }) => {
    const theme = useTheme();
    return (_jsx(Card, { style: { margin: theme.spacing(2), boxShadow: theme.shadows[3], borderRadius: theme.shape.borderRadius }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", color: "textSecondary", gutterBottom: true, children: title }), _jsx(Typography, { variant: "h4", component: "h2", children: value }), _jsx(Typography, { color: "textSecondary", children: subtitle })] }) }));
};
export default Indicator;

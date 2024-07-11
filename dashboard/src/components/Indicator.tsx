import { Card, CardContent, Typography, useTheme } from '@mui/material';

interface IndicatorProps {
  title: string;
  subtitle: string;
  value: number | string;
}

const Indicator: React.FC<IndicatorProps> = ({ title, subtitle, value }) => {
  const theme = useTheme();

  return (
    <Card style={{ margin: theme.spacing(2), boxShadow: theme.shadows[3], borderRadius: theme.shape.borderRadius }}>
      <CardContent>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="h2">
          {value}
        </Typography>
        <Typography color="textSecondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Indicator;
import { Card, CardContent, Typography } from '@mui/material';

interface IndicatorProps {
  title: string;
  subtitle: string;
  value: number | string;
}

const Indicator: React.FC<IndicatorProps> = ({ title, subtitle, value }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Indicator;
import { Box, SxProps, Typography } from '@mui/material';
import './Description.scss';
import { memo } from 'react';

interface DescriptionProps {
  description: string[];
  sx?: SxProps;
}

const Description = ({ description, sx }: DescriptionProps) => {
  return (
    <Box component="section" className="description-container" sx={sx}>
      {description?.map((paragraph, index) => (
        <Typography variant="caption" key={index} className="description-paragraph">
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
};

export default memo(Description);

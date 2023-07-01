import { Box, Collapse, IconButton, Typography } from '@mui/material';
import { Experience } from 'shared/types/interfaces/Experience';
import './ExperienceInfo.scss';
import ExperienceResponsibilities from '../experience-responsibilities/ExperienceResponsibilities';
import { useState } from 'react';
import { KeyboardArrowDownRounded } from '@mui/icons-material';

const ExperienceInfo = ({
  since,
  to,
  position,
  companyName,
  description,
  responsibilities
}: Experience) => {
  const [areResponsibilitiesVisible, setAreResponsibilitiesVisible] = useState(false);
  const toggleResponsibilitiesVisibility = () => {
    setAreResponsibilitiesVisible((prev) => !prev);
  };

  return (
    <Box className="experience-info-container">
      <Box className="experience-header">
        <Typography variant="subtitle2" className="date">{`${since} - ${to}`}</Typography>
        <Box>
          <Typography variant="h6" className="company-name">
            {companyName}
          </Typography>
          <Typography variant="subtitle2" className="position">
            {position}
          </Typography>
        </Box>
      </Box>
      {description?.length && (
        <Typography variant="caption" className="description">
          {description}
        </Typography>
      )}
      {responsibilities?.length && (
        <>
          <Box>
            <Typography variant="caption">Responsibilities</Typography>
            <IconButton
              aria-label="toggle-responsibilities-visibility-button"
              sx={{ color: 'text.primary' }}
              className={`expand-button ${areResponsibilitiesVisible ? 'collapse' : ''}`}
              onClick={toggleResponsibilitiesVisibility}>
              <KeyboardArrowDownRounded />
            </IconButton>
          </Box>
          <Collapse in={areResponsibilitiesVisible}>
            <ExperienceResponsibilities responsibilities={responsibilities} />
          </Collapse>
        </>
      )}
    </Box>
  );
};

export default ExperienceInfo;
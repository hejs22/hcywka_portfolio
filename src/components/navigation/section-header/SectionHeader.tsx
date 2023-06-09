import { Box, Typography } from '@mui/material';
import { memo, RefObject } from 'react';
import './SectionHeader.scss';
import classNames from 'classnames';

interface SectionHeaderProps {
  headerText: string;
  reference?: RefObject<HTMLDivElement>;
  reduceTopMargin?: boolean;
}

const SectionHeader = ({ headerText, reference, reduceTopMargin }: SectionHeaderProps) => {
  return (
    <Typography
      fontWeight="700"
      variant="h4"
      ref={reference}
      className={classNames('section-header', { extraMargin: !reduceTopMargin })}>
      {headerText.split(' ').map((word, index) => (
        <Box key={index} component="span">
          {word}
        </Box>
      ))}
    </Typography>
  );
};

export default memo(SectionHeader);

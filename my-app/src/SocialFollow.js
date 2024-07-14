import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/X';
import { IcBaselineDiscord, IcBaselineTwitch } from './MissingIcons';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  socialIcon: {
    color: '#dcc67e',
    fontSize: 11,
    margin: '0 19px 0 0',
    '&:hover': {
      color: '#ffffff',
    },
  }, 
  followText: {
    fontFamily: 'Yantramanav',
    fontSize: 10,
    fontWeight: 500,
    color: '#ffffff',
    letterSpacing: '0.3em',
    margin: '0 21px 0 0',
    lineHeight: 20,
  },
}));

export default function SocialFollow() {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Typography className={classes.followText}>SEGUICI SU:</Typography>
      <Link href="https://www.instagram.com/coriglianorossano_esports/" target="_blank" className={classes.socialIcon}>
        <InstagramIcon />
      </Link>
      <Link href="https://x.com/Cor_Ros_esports" target="_blank" className={classes.socialIcon}>
        <TwitterIcon />
      </Link>
      <Link href="https://www.twitch.tv/corigliano_esports" target="_blank" className={classes.socialIcon}>
        <IcBaselineTwitch />
      </Link>
      <Link href="https://discord.com/invite/99BPWkR4" target="_blank" className={classes.socialIcon}>
        <IcBaselineDiscord />
      </Link>
    </Box>
  );
}

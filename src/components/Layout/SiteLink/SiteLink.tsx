import { Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material/styles";
import Link from "next/link";

type SiteLinkProps = {
  sx?: SxProps<Theme>;
};

const SiteLink: React.FC<SiteLinkProps> = ({ sx = {} }) => {
  return (
    <Typography
      variant="h5"
      component="h1"
      sx={{ flexGrow: 1, textTransform: "uppercase", ...sx }}
    >
      <Link href="/">
        <Typography variant="h5" component="span" color="primary">
          {`>_ `}
        </Typography>
        <Typography variant="h5" component="span">
          {`Nexum`}
        </Typography>
        <Typography variant="h5" component="span" color="primary">
          {`Labs`}
        </Typography>
      </Link>
    </Typography>
  );
};

const TAG_LINES = [
  "Building efficiency together",
  "Let us automate the pain away",
  "Optimising the synergies",
];

export const TagLines = () => {
  const randomLine = TAG_LINES[Math.floor(Math.random() * TAG_LINES.length)];

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      sx={{
        fontFamily: "Space Grotesk",
      }}
    >
      {randomLine}
    </Typography>
  );
};

export default SiteLink;

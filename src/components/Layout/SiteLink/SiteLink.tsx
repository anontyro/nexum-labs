"use client";

import { Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material/styles";
import Link from "next/link";
import { useEffect, useState } from "react";

type SiteLinkProps = {
  sx?: SxProps<Theme>;
};

const SiteLink: React.FC<SiteLinkProps> = ({ sx = {} }) => {
  return (
    <Typography
      variant="h5"
      component="p"
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
  const [tagLine, setTagLine] = useState(TAG_LINES[0]);

  useEffect(() => {
    const randomLine = TAG_LINES[Math.floor(Math.random() * TAG_LINES.length)];
    setTagLine(randomLine);
  });

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      sx={{
        fontFamily: "Space Grotesk",
      }}
    >
      {tagLine}
    </Typography>
  );
};

export default SiteLink;

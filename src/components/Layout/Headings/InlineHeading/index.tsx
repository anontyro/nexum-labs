import { Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material/styles";

type InlineHeadingProps = {
  text: string;
  sx?: SxProps<Theme>;
};

const InlineHeading: React.FC<InlineHeadingProps> = ({ text, sx = {} }) => {
  return (
    <Typography
      variant="caption"
      color="textSecondary"
      sx={{
        textTransform: "uppercase",
        fontFamily: "JetBrains Mono",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default InlineHeading;

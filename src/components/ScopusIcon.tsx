import * as React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const ScopusIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {/* Orange square */}
      <rect x="0" y="0" width="24" height="24" rx="4" fill="currentColor" />

      {/* SC text */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="9"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fill="#ffffff"
      >
        SC
      </text>
    </SvgIcon>
  );
};

export default ScopusIcon;

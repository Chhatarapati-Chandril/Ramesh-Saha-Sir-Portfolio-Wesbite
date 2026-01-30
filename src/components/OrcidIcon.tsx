import * as React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const OrcidIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {/* Outer circle */}
      <circle cx="12" cy="12" r="12" fill="currentColor" />

      {/* iD text */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="10"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fill="#ffffff"
      >
        iD
      </text>
    </SvgIcon>
  );
};

export default OrcidIcon;

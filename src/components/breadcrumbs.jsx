import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function BreadcrumbsComponent() {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="breadcrumb" to="/">
          MUI
        </Link>
        <Link className="breadcrumb" to="/">
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}

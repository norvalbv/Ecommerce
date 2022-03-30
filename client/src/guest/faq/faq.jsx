import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function FAQ() {
  return (
    <>
      <NavBar />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Payment Help</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            voluptatem expedita, eius, delectus eligendi minima repudiandae,
            aliquam commodi quas velit error nulla. Ad repudiandae ipsum amet
            dicta asperiores doloribus perspiciatis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Returns policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            necessitatibus quaerat ex nihil qui nobis reiciendis deserunt,
            quidem earum quam inventore facere dicta neque autem nesciunt harum
            iure? Doloribus, debitis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Delivery information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            necessitatibus quaerat ex nihil qui nobis reiciendis deserunt,
            quidem earum quam inventore facere dicta neque autem nesciunt harum
            iure? Doloribus, debitis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            necessitatibus quaerat ex nihil qui nobis reiciendis deserunt,
            quidem earum quam inventore facere dicta neque autem nesciunt harum
            iure? Doloribus, debitis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Footer />
    </>
  );
}

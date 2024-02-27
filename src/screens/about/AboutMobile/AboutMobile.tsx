import { Container } from "@/components/Container";

import { Intro } from "../Intro";
import { Team } from "../Team";
import { Interested } from "../Interested";
import { Form } from "../Form";
import { Join } from "../Join";

const AboutMobile = () => {
  return (
    <div className="overflow-hidden" id="aboutUs">
      <Container>
        <Intro />
        <Team />
        <Interested />
        <Form />
        <Join />
      </Container>
    </div>
  );
};

export default AboutMobile;

import { Card } from "../card";
import { CoverLetter } from "../cover-letter";
import { Grid } from "./grid";

export const Content = () => {
  return (
    <div className="h-full w-full">
      <Grid>
        <Card>
          <CoverLetter />
        </Card>
        <Card>2</Card>
        <Card>3</Card>
      </Grid>
    </div>
  );
};

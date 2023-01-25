import { Grid } from "./grid";

export const Content = () => {
  return (
    <div className="h-full w-full p-6">
      <Grid>
        <div className="w-full h-full bg-green-400">1</div>
        <div className="w-full h-full bg-green-400">2</div>
        <div className="w-full h-full bg-green-400">3</div>
      </Grid>
    </div>
  );
};

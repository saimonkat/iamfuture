import { ComponentProps } from "react";
import { Dialog, DialogContent } from "@/UI/dialog";

import PlayButton from "./PlayButton";

const PlayVideo = (props: ComponentProps<typeof PlayButton>) => {
  return (
    <Dialog>
      {/* <DialogTrigger asChild> */}
      <PlayButton {...props} />
      {/* </DialogTrigger> */}
      <DialogContent className="flex aspect-video w-[70%] max-w-none items-center justify-center">
        <PlayButton />
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideo;

import React from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";

import { useDispatch, useSelector } from "react-redux";
import { setOpenVideoModal } from "../../redux/videoModalSlice";

export default function VideoTrailer() {
  const dispatch = useDispatch();
  const { urlTrailer, isOpen } = useSelector((state) => state.videoModalSlice);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={urlTrailer}
        onClose={() => {
          dispatch(setOpenVideoModal(!isOpen));
        }}
      />
    </>
  );
}

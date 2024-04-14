import React from "react";

const LoadingScreen = ({ show }: { show: boolean }) => {
  return (
    <dialog className={`modal ${show && "modal-open"}`}>
      <span className="loading loading-spinner loading-lg"></span>
    </dialog>
  );
};

export default LoadingScreen;

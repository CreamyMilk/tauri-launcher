import { ReactNode, useEffect } from "react";

interface ModalProps {
  children: ReactNode
  show: null | boolean
  id: string
  center?: boolean
}

export default function Modal({ children, show, id, center = true }: ModalProps) {
  function modalHandler(val: Boolean) {
    let modal = document.getElementById(id);
    if (val) {
      fadeIn(modal);
    } else {
      fadeOut(modal);
    }
  }

  function fadeOut(el: any) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  function fadeIn(el: any) {
    el.style.opacity = 0;
    el.style.display = "flex";
    (function fade() {
      let val = parseFloat(el.style.opacity);
      if (!((val += 0.2) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  useEffect(() => {
    if (show != null) modalHandler(show)
  }, [show])
  if (show == null) return null

  return (
    <div className={"w-full max-h-screen py-5 bg-black bg-opacity-30 transition duration-150 ease-in-out z-10 fixed overflow-y-scroll top-0 right-0 bottom-0 left-0 " + (center ? "flex flex-col items-center justify-center" : "")} id={id}>
      {children}
    </div>
  )
}
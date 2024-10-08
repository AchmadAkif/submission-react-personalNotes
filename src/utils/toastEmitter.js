import { toast } from "react-toastify";

const toastSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right"
  });
}

const toastFailed = (msg) => {
  toast.error(msg, {
    position: "top-right"
  });
}

const toastInfo = (msg) => {
  toast.info(msg, {
    position: "top-right"
  })
}

export { toastSuccess, toastFailed, toastInfo }
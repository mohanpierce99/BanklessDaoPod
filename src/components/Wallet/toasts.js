import { toast } from "react-toastify";

export default async function toaster(signal) {
  if (signal === "NO_DAI") {
    toast.warn("Insufficient DAI", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { background: "#ED1C24", color: "white" },
    });
  } else if (signal === "APPROVED") {
    const functionThatReturnPromise = () =>
      new Promise((resolve) => setTimeout(resolve, 2000));

    await toast.promise(functionThatReturnPromise, {
      pending: "Approval pemnding",
      success: "Approval Success",
      error: "Something went wrong 🤯",
    });
    await toast.promise(functionThatReturnPromise, {
      pending: "Depositing DAI",
      success: "Transaction complete",
      error: "Something went wrong 🤯",
    });
  }
}

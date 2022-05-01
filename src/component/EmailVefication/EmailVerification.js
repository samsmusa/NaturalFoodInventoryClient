import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomizedSnackbars from "../CustomizedSnackbars/CustomizedSnackbars";

const EmailVerification = () => {
  const [sendEmailVerification, verifySending, verifyError] =
    useSendEmailVerification(auth);

  const [user, loading, error] = useAuthState(auth);
  if(user){
      console.log(user)
}
  const sendVarification = async () => {
    await sendEmailVerification();
    alert("Sent email");
  };
  return (
    <div>
      {user &&
        (!user?.emailVerified ? (
          <CustomizedSnackbars
            type={"warning"}
            massage={user?.email + " is not verified!"}
            extra={"Click here"}
            click={sendVarification}
          />
        ) : (
          <CustomizedSnackbars
            type={"success"}
            massage={user?.email + " succesfully login"}
          />
        ))}
    </div>
  );
};

export default EmailVerification;

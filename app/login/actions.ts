"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
  console.log(prevState);
  console.log(formData.get("email"), formData.get("password"));
  console.log("i run in the server !!");
  return {
    errors: ["wrong password", "password too short"],
  };
};

export const errorChecking = (error, prefix) =>  {
  console.log(error?.data?.message.includes(prefix))
  // return error.data.message.includes(prefix)
}
export const generateVerificationToken = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    return code;
  }
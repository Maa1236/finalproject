const url = "http://localhost:3333/login";

export async function Services(emailValue,passwordValue) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  });
  return response.json();
}



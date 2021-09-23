const url = "http://localhost:3333/login";

export async function Services(emailValue, passwordValue) {
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

export const CandidatesFetch = () => {
  return fetch("http://localhost:3333/api/candidates", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((result) => {
    return result.json();
  });
};

export const CandidateIDFetch = (id) => {
  return fetch(`http://localhost:3333/api/candidates/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => {
    return response.json();
  });
};

export const ReportFetch = () => {
  return fetch("http://localhost:3333/api/reports", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => {
    return response.json();
  });
};

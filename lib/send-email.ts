import { FormData } from "@/app/(landing page)/pages/contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = `/api/email/route.ts`;

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
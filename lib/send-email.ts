
import { FormData } from "@/app/(landing page)/pages/contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = 'https://portfolio-jqawf1r9v-shaurya61s-projects.vercel.app//api/email';

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
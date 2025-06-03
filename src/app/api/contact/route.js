export async function POST(req) {
  const formData = await req.formData();

  formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ success: false, message: "Server error" });
  }
}

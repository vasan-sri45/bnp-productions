import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const formData = new URLSearchParams();

    // 🔐 ZOHO REQUIRED KEYS (HARDCODE)
    formData.append(
      "xnQsjsdp",
      "62c7dbbdcffcd6173f81dcbd7212c478ad372f0f3aba9515cd5d6f8b908a092d"
    );

    formData.append(
      "xmIwtLD",
      "1b8ce0ac7b8a70b69ad890fea665d1fc748e458186735f877cceee5486187bc658af16e57419e4a717bfb6e86ca1f97d"
    );

    formData.append("actionType", "TGVhZHM=");

    // ✅ REQUIRED HIDDEN FIELDS (MUST)
    formData.append("zc_gad", "");
    formData.append("returnURL", "https://yourdomain.com/thank-you");
    formData.append("aG9uZXlwb3Q", "");

    // 🧾 LEAD DATA
    formData.append("First Name", body.firstName);
    formData.append("Last Name", body.lastName);
    formData.append("Email", body.email);
    formData.append("Mobile", body.mobile);
    formData.append("Company", body.company || "Website Appointment");
    formData.append("Industry", body.industry || "Service Provider");

    const zohoRes = await fetch(
      "https://crm.zoho.in/crm/WebToLeadForm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    if (!zohoRes.ok) {
      throw new Error("Zoho submission failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Zoho Error:", error);                          
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

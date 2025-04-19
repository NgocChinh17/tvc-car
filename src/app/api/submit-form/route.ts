export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, contactMethod } = body;

    const formBody = new URLSearchParams();
    formBody.append('entry.2005620554', name);
    formBody.append('entry.1065046570', phone);
    formBody.append('entry.1706684805', contactMethod === 'call' ? 'Gọi điện' : 'Nhắn tin Zalo');

    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeF4lH2AXBSyXBHxWS-7bfByCwUvomnqPJPaLkhpSDg7Vv5Bw/formResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

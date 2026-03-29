export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { date } = req.body;
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date(date + "T12:00:00");

  return res.status(200).json({ day_of_week: days[d.getDay()] });
}
```

7. Click **Commit changes**

Vercel will automatically redeploy and your URL will be:
```
https://nextjs-boilerplate-[your-id].vercel.app/api/getDayOfWeek
